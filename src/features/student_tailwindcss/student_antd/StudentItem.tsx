import React from "react";
import { Button, Popconfirm } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { type StudentType } from "./StudentAntd";

interface StudentItemProps {
  student: StudentType;
  onDelete: (id: number) => void;
  onStartEdit: (student: StudentType) => void;
}

const StudentItem = ({ student, onDelete, onStartEdit }: StudentItemProps) => {
  return (
    <div className="flex items-center gap-2">
      <Button 
        type="primary" 
        ghost 
        onClick={() => onStartEdit(student)}
        className="rounded-lg font-medium"
      >
        Edit
      </Button>
      
      <Popconfirm
        title="Xóa học viên"
        description={`Bạn có chắc muốn xóa học viên ${student.name}?`}
        onConfirm={() => onDelete(student.id)}
        okText="Xóa"
        cancelText="Hủy"
        okButtonProps={{ danger: true }}
      >
        <Button 
          type="primary" 
          danger 
          className="rounded-lg font-medium"
        >
          Delete
        </Button>
      </Popconfirm>
    </div>
  )
}

export default StudentItem