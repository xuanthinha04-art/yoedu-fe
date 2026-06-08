import React from 'react';
import { Modal, Input } from 'antd';
import { type StudentType } from './StudentAntd';

interface EditStudentFormProps {
  editFormData: StudentType;
  onEditChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSave: () => void;
  onCancel: () => void;
}

const EditStudentForm = ({ editFormData, onEditChange, onSave, onCancel }: EditStudentFormProps) => {
  return (
    <Modal
      title={<span className="text-xl font-bold text-slate-800">Chỉnh sửa thông tin</span>}
      open={true}
      onOk={onSave}
      onCancel={onCancel}
      okText="Save"
      cancelText="Cancel"
      width={550}
      okButtonProps={{ className: "bg-blue-600 hover:bg-blue-700 border-none rounded-lg h-9 px-4" }}
      cancelButtonProps={{ className: "rounded-lg h-9 px-4" }}
    >
      <div className="space-y-4 my-5">
        <hr />
        <div>
          <label className="block mb-1 text-sm font-semibold text-slate-600">Tên học viên</label>
          <Input name="name" value={editFormData.name} onChange={onEditChange} placeholder="Tên học viên" className="h-10 rounded-lg" />
        </div>

        <div>
          <label className="block mb-1 text-sm font-semibold text-slate-600">Phụ huynh</label>
          <Input name="phuhuynh" value={editFormData.phuhuynh} onChange={onEditChange} placeholder="Phụ huynh" className="h-10 rounded-lg" />
        </div>

        <div>
          <label className="block mb-1 text-sm font-semibold text-slate-600">SĐT</label>
          <Input name="sdt" type="number" value={editFormData.sdt || ''} onChange={onEditChange} placeholder="SĐT" className="h-10 rounded-lg" />
        </div>

        <div>
          <label className="block mb-1 text-sm font-semibold text-slate-600">Điểm</label>
          <Input name="diem" type="number" value={editFormData.diem || ''} onChange={onEditChange} placeholder="Điểm" className="h-10 rounded-lg" />
        </div>
        <hr />
      </div>
    </Modal>
  )
}

export default EditStudentForm