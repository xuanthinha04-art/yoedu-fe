import React, { useState } from 'react';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { getRank, getRandomId } from '@/features/student_tailwindcss/utils/SetDiem';
import StudentList from './StudentList';
import EditStudentForm from './EditStudentForm';
import SearchStudent from './SearchStudent';
import AddStudent from './AddStudent';

export interface StudentType {
    id: number;
    name: string;
    phuhuynh: string;
    sdt: number;
    hocluc: string;
    diem: number;
}

const initStudents: StudentType[] = [
    { id: 1, name: "Nguyen Van A", phuhuynh: "Nguyen Thi A", sdt: 123456789, hocluc: getRank(7),  diem: 7  },
    { id: 2, name: "Nguyen Van B", phuhuynh: "Nguyen Thi B", sdt: 123456789, hocluc: getRank(6),  diem: 6  },
    { id: 3, name: "Nguyen Van C", phuhuynh: "Nguyen Thi C", sdt: 123456789, hocluc: getRank(5),  diem: 5  },
    { id: 4, name: "Nguyen Van D", phuhuynh: "Nguyen Thi D", sdt: 123456789, hocluc: getRank(9),  diem: 9  },
    { id: 5, name: "Nguyen Van E", phuhuynh: "Nguyen Thi E", sdt: 123456789, hocluc: getRank(10), diem: 10 },
    { id: 6, name: "Nguyen Van F", phuhuynh: "Nguyen Thi F", sdt: 123456789, hocluc: getRank(4),  diem: 4  },
];

const emptyStudent: StudentType = { id: 0, name: '', phuhuynh: '', sdt: 0, hocluc: '', diem: 0 };

const Student: React.FC = () => {
    const [studentsantd, setStudents] = useState<StudentType[]>(initStudents);
    const [search, setSearch] = useState("");
    const [activeSearchTerm, setActiveSearchTerm] = useState("");
    
    const handleSearch = () => setActiveSearchTerm(search);
    const handleCancelSearch = () => {
        setSearch("");
        setActiveSearchTerm("");
    };

    const filterStudent = studentsantd.filter((u) =>
        u.name.toLowerCase().includes(activeSearchTerm.toLowerCase())
    );

    const deleteStudent = (id: number) => {
        setStudents(studentsantd.filter((u) => u.id !== id));
    };

    const [showAddForm, setShowAddForm] = useState(false);
    const [editingId, setEditingId] = useState<number | null>(null);
    const [editFormData, setEditFormData] = useState<StudentType>(emptyStudent);
    const [newStudent, setNewStudent] = useState<StudentType>(emptyStudent);

    const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const parsed = (name === 'diem' || name === 'sdt') ? Number(value) : value;
        setEditFormData(prev => ({
            ...prev,
            [name]: parsed,
            ...(name === 'diem' ? { hocluc: getRank(Number(value)) } : {})
        }));
    };

    const handleAddChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const parsed = (name === 'diem' || name === 'sdt') ? Number(value) : value;
        setNewStudent(prev => ({
            ...prev,
            [name]: parsed,
            ...(name === 'diem' ? { hocluc: getRank(Number(value)) } : {})
        }));
    };

    const addStudent = () => {
        if (!newStudent.name) return alert("Vui lòng nhập tên");
        setStudents([...studentsantd, {
            ...newStudent,
            id: getRandomId(),
            hocluc: getRank(newStudent.diem)
        }]);
        setNewStudent(emptyStudent);
        setShowAddForm(false);
    };

    const startEdit = (student: StudentType) => {
        setEditingId(student.id);
        setEditFormData(student);
    };

    const saveEdit = (id: number) => {
        setStudents(studentsantd.map(u => u.id === id ? editFormData : u));
        setEditingId(null);
    };

    const cancelEdit = () => setEditingId(null);

    return (
        <div className='py-8 px-6'>
            {/* Header sử dụng Flexbox của Tailwind */}
            <div className='flex justify-between mb-6 items-start'>
                <div>
                    <h2 className='text-3xl'>Quản lý học viên</h2>
                    <p className='text-black text-2xl'>Danh sách học viên đang theo học</p>
                </div>
                <Button
                    type="primary"
                    icon={<PlusOutlined />}
                    size="large"
                    onClick={() => setShowAddForm(true)}
                >
                    Thêm khóa học
                </Button>
            </div>

            {/* Khung tìm kiếm */}
                <SearchStudent
                    search={search}
                    setSearch={setSearch}
                    onSearch={handleSearch}
                    onCancel={handleCancelSearch}
                />

            {/* Khung hiển thị bảng danh sách */}
                <StudentList
                    studentsantd={filterStudent}
                    onDelete={deleteStudent}
                    onStartEdit={startEdit}
                    editingId={editingId}
                />

            {/* Các Form Modal */}
            {showAddForm && (
                <AddStudent
                    newStudent={newStudent}
                    onAddChange={handleAddChange}
                    onAdd={addStudent}
                    onCancel={() => { setShowAddForm(false); setNewStudent(emptyStudent); }}
                />
            )}

            {editingId !== null && (
                <EditStudentForm
                    editFormData={editFormData}
                    onEditChange={handleEditChange}
                    onSave={() => saveEdit(editingId as number)}
                    onCancel={cancelEdit}
                />
            )}
        </div>
    )
}

export default Student