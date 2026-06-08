export const getRank = (diem: number) => {
    const diemNumbe = Number(diem);
    if (diemNumbe >= 9) return "Xuất sắc";
    if (diemNumbe >= 8) return "Giỏi";
    if (diemNumbe >= 6) return "Khá";
    if (diemNumbe >= 5) return "Trung bình";
    return "Yếu";
};
export const getRandomId = () => {
    return Math.floor(Math.random() * 1000);
}