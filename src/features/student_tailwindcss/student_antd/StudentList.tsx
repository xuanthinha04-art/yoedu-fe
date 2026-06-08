import React from "react";
import { Table } from "antd";
import { getRank } from '@/features/student_tailwindcss/utils/SetDiem';
import { type StudentType } from "./StudentAntd";
import StudentItem from "./StudentItem";

interface StudentListProps {
  studentsantd: StudentType[];
  onDelete: (id: number) => void;
  onStartEdit: (student: StudentType) => void;
  editingId: number | null;
}

const StudentList = ({ studentsantd, onDelete, onStartEdit }: StudentListProps) => {
  
  const columns = [
    {
      title: "Họ tên học viên",
      dataIndex: "name",
      key: "name",
      render: (text: string) => <span className="font-semibold text-slate-800">{text}</span>,
    },
    { title: "Phụ huynh", dataIndex: "phuhuynh", key: "phuhuynh" },
    { title: "SĐT", dataIndex: "sdt", key: "sdt" },
    {
      title: "Học lực",
      dataIndex: "hocluc",
      key: "hocluc",
      render: (_: any, record: StudentType) => {
        const hocluc = record.hocluc || getRank(record.diem);
        return <span className={`px-2.5 py-1 rounded-full text-xs font-bold`}>{hocluc}</span>;
      },
    },
    { 
      title: "Điểm", 
      dataIndex: "diem", 
      key: "diem",
      render: (diem: number) => <span className="font-mono font-medium">{diem}</span>
    },
    {
      title: "Thao tác",
      key: "action",
      render: (_: any, record: StudentType) => (
        <StudentItem student={record} onDelete={onDelete} onStartEdit={onStartEdit} />
      ),
    },
  ];

  return (
    <Table
      dataSource={studentsantd}
      columns={columns}
      rowKey="id"
      pagination={{ pageSize: 10 }}
      className="w-full border-collapse my-5 text-base 
        font-['Segoe_UI',Tahoma,Geneva,Verdana,sans-serif] 
        shadow-[0_0_20px_rgba(0,0,0,0.1)]"
    />
  )
}

export default StudentList