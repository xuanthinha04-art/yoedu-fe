import React from 'react';
import { Input, Button } from 'antd';
import { SearchOutlined, CloseOutlined } from '@ant-design/icons';

interface SearchStudentProps {
  search: string;
  setSearch: (val: string) => void;
  onSearch: () => void;
  onCancel: () => void;
}

const SearchStudent = ({ search, setSearch, onSearch, onCancel }: SearchStudentProps) => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
      <Input
        placeholder="Tìm kiếm học viên..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onPressEnter={onSearch}
        className="w-full sm:w-80 h-10 rounded-lg text-base"
      />

      <div className="flex items-center gap-2 w-full sm:w-auto">
        {search && (
          <Button 
            type="primary" 
            onClick={onSearch}
            className="h-10 px-5 rounded-lg font-medium w-full sm:w-auto"
          >
            Search
          </Button>
        )}

        {search && (
          <Button 
            danger 
            onClick={onCancel}
            className="h-10 px-5 rounded-lg font-medium w-full sm:w-auto"
          >
            Cancel
          </Button>
        )}
      </div>
    </div>
  )
}

export default SearchStudent