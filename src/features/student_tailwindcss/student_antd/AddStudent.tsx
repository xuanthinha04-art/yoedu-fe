import React from 'react';
import { Modal, Input } from 'antd';
import type { StudentType } from './StudentAntd.tsx';

interface AddStudentProps {
    newStudent: StudentType;
    onAddChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onAdd: () => void;
    onCancel: () => void;
}

const AddStudent: React.FC<AddStudentProps> = ({ newStudent, onAddChange, onAdd, onCancel }) => {
  return (
    <Modal
      title={<span className="text-xl font-bold text-slate-800">Thêm học viên mới</span>}
      open={true}
      onOk={onAdd}
      onCancel={onCancel}
      okText="Lưu"
      cancelText="Hủy"
      width={550}
      okButtonProps={{ className: "bg-emerald-500 hover:bg-emerald-600 border-none rounded-lg h-9 px-4" }}
      cancelButtonProps={{ className: "rounded-lg h-9 px-4" }}
    >
      <div className="space-y-4 my-5">
        <hr />
        <div>
          <label className="block mb-1 text-sm font-semibold text-slate-600">Tên học viên</label>
          <Input name="name" placeholder="Ví dụ: Nguyễn Văn A" value={newStudent.name} onChange={onAddChange} className="h-10 rounded-lg" />
        </div>

        <div>
          <label className="block mb-1 text-sm font-semibold text-slate-600">Phụ huynh</label>
          <Input name="phuhuynh" placeholder="Ví dụ: Nguyễn Thị B" value={newStudent.phuhuynh} onChange={onAddChange} className="h-10 rounded-lg" />
        </div>

        <div>
          <label className="block mb-1 text-sm font-semibold text-slate-600">SĐT</label>
          <Input name="sdt" type="number" placeholder="Nhập SĐT phụ huynh" value={newStudent.sdt || ''} onChange={onAddChange} className="h-10 rounded-lg" />
        </div>

        <div>
          <label className="block mb-1 text-sm font-semibold text-slate-600">Điểm số</label>
          <Input name="diem" type="number" placeholder="Nhập điểm số (0 - 10)" value={newStudent.diem || ''} onChange={onAddChange} className="h-10 rounded-lg" />
        </div>
        <hr />
      </div>
    </Modal>
  )
}

export default AddStudent