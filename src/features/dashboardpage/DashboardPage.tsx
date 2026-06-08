import React from 'react';
import { Card, Empty, Typography } from 'antd';

const { Title, Text } = Typography;

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] p-6">
      {/* 1. PHẦN TIÊU ĐỀ DASHBOARD */}
      <div className="mb-6">
        <Title level={2} className="!mb-1 !text-2xl !font-bold text-gray-800">
          Dashboard
        </Title>
        <Text className="text-gray-400 text-sm">
          Tổng quan hệ thống quản lý YOEDU
        </Text>
      </div>

      {/* 2. HÀNG 4 THẺ THỐNG KÊ (GRID 4 CỘT) */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4 mb-6">
        
        {/* Thẻ 1: Tổng học viên */}
        <Card className="shadow-sm border border-gray-100 rounded-xl" hoverable>
          <div className="font-bold text-gray-700 text-base mb-4">Tổng học viên</div>
          <div className="text-gray-400 text-xs mb-1">Tổng học viên</div>
          <div className="text-2xl font-bold text-green-600 mb-1">3 người</div>
          <div className="text-gray-400 text-xs">+3</div>
        </Card>

        {/* Thẻ 2: Lớp đang hoạt động */}
        <Card className="shadow-sm border border-gray-100 rounded-xl" hoverable>
          <div className="font-bold text-gray-700 text-base mb-4">Lớp đang hoạt động</div>
          <div className="text-gray-400 text-xs mb-1">Lớp đang hoạt động</div>
          <div className="text-2xl font-bold text-blue-700 mb-1">0 lớp</div>
          <div className="text-gray-400 text-xs">+0</div>
        </Card>

        {/* Thẻ 3: Giáo viên */}
        <Card className="shadow-sm border border-gray-100 rounded-xl" hoverable>
          <div className="font-bold text-gray-700 text-base mb-4">Giáo viên</div>
          <div className="text-gray-400 text-xs mb-1">Giáo viên</div>
          <div className="text-2xl font-bold text-purple-700 mb-1">0 người</div>
          <div className="text-gray-400 text-xs">+0</div>
        </Card>

        {/* Thẻ 4: Doanh thu */}
        <Card className="shadow-sm border border-gray-100 rounded-xl" hoverable>
          <div className="font-bold text-gray-700 text-base mb-4">Doanh thu</div>
          <div className="text-gray-400 text-xs mb-1">Doanh thu</div>
          <div className="text-2xl font-bold text-red-600 mb-1">0 VND</div>
          <div className="text-gray-400 text-xs">+0</div>
        </Card>

      </div>

      {/* 3. HÀNG 2 KHỐI HOẠT ĐỘNG CHI TIẾT (GRID 2 CỘT) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Khối bên trái: Hoạt động gần đây */}
        <Card 
          title={<span className="font-bold text-gray-700">Hoạt động gần đây</span>} 
          className="shadow-sm border border-gray-100 rounded-xl"
        >
          <div className="py-8">
            <Empty description="Không có hoạt động gần đây" />
          </div>
        </Card>

        {/* Khối bên phải: Lớp học hôm nay */}
        <Card 
          title={<span className="font-bold text-gray-700">Lớp học hôm nay</span>} 
          className="shadow-sm border border-gray-100 rounded-xl"
        >
          <div className="py-8">
            <Empty description="Không có lớp học hôm nay" />
          </div>
        </Card>

      </div>
    </div>
  );
}