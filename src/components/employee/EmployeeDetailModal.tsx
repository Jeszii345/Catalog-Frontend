import { Employee } from "./EmployeeList";

type Props = {
  employee: Employee;
  onClose: () => void;
};

const EmployeeDetailModal = ({ employee, onClose }: Props) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-md w-full p-6 max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">รายละเอียดพนักงาน</h2>
        <div className="space-y-2">
          <div><strong>ชื่อ:</strong> {employee.firstName}</div>
          <div><strong>นามสกุล:</strong> {employee.lastName}</div>
          <div><strong>Email:</strong> {employee.email}</div>
          <div><strong>ที่อยู่:</strong> {employee.address}</div>
          <div><strong>อายุ:</strong> {employee.age}</div>
          <div><strong>เพศ:</strong> {employee.gender}</div>
          <div><strong>เบอร์โทร 1:</strong> {employee.phone1}</div>
          <div><strong>เบอร์โทร 2:</strong> {employee.phone2}</div>
          <div><strong>ระดับการเข้าถึง:</strong> {employee.accessLevel}</div>
          <div><strong>ข้อมูลการติดต่ออื่นๆ:</strong> {employee.otherContact}</div>
          <div><strong>สถานะ:</strong> {employee.active ? "Active" : "Inactive"}</div>
        </div>
        <div className="flex justify-end mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
          >
            ปิด
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetailModal;
