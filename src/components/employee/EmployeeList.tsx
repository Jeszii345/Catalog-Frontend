import { useState } from "react";
import { FiPlus, FiEdit, FiEye, FiTrash2 } from "react-icons/fi";
import EmployeeModal from "./EmployeeModal";
import EmployeeDetailModal from "./EmployeeDetailModal";

export type Employee = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  age: number;
  gender: string;
  phone1: string;
  phone2?: string;
  accessLevel: string;
  otherContact?: string;
  active: boolean;
};

const sampleEmployees: Employee[] = [
  {
    id: 1,
    firstName: "Somchai",
    lastName: "Sukjai",
    email: "somchai@example.com",
    address: "Bangkok",
    age: 30,
    gender: "ชาย",
    phone1: "0812345678",
    phone2: "0898765432",
    accessLevel: "User",
    otherContact: "",
    active: true,
  },
];

const EmployeeList = () => {
  const [employees, setEmployees] = useState<Employee[]>(sampleEmployees);
  const [showModal, setShowModal] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState<Employee | null>(null);
  const [showDetail, setShowDetail] = useState<Employee | null>(null);

  const handleAdd = () => {
    setEditingEmployee(null);
    setShowModal(true);
  };

  const handleEdit = (employee: Employee) => {
    setEditingEmployee(employee);
    setShowModal(true);
  };

  const handleView = (employee: Employee) => {
    setShowDetail(employee);
  };

  const handleSave = (employee: Employee) => {
    if (editingEmployee) {
      // Edit
      setEmployees((prev) =>
        prev.map((e) => (e.id === employee.id ? employee : e))
      );
    } else {
      // Add
      setEmployees((prev) => [...prev, { ...employee, id: Date.now() }]);
    }
    setShowModal(false);
  };

  const toggleActive = (id: number) => {
    setEmployees((prev) =>
      prev.map((e) => (e.id === id ? { ...e, active: !e.active } : e))
    );
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">จัดการพนักงาน</h1>
        <button
          onClick={handleAdd}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          <FiPlus /> เพิ่มพนักงาน
        </button>
      </div>

      <table className="w-full border rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">ชื่อ</th>
            <th className="p-2 border">นามสกุล</th>
            <th className="p-2 border">อีเมล</th>
            <th className="p-2 border">เบอร์โทร</th>
            <th className="p-2 border">ระดับ</th>
            <th className="p-2 border">สถานะ</th>
            <th className="p-2 border">จัดการ</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id} className="hover:bg-gray-50">
              <td className="p-2 border">{emp.firstName}</td>
              <td className="p-2 border">{emp.lastName}</td>
              <td className="p-2 border">{emp.email}</td>
              <td className="p-2 border">{emp.phone1}</td>
              <td className="p-2 border">{emp.accessLevel}</td>
              <td className="p-2 border">
                {emp.active ? "Active" : "Inactive"}
              </td>
              <td className="p-2 border flex gap-2">
                <button
                  onClick={() => handleView(emp)}
                  className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                >
                  <FiEye />
                </button>
                <button
                  onClick={() => handleEdit(emp)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                >
                  <FiEdit />
                </button>
                <button
                  onClick={() => toggleActive(emp.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                >
                  <FiTrash2 />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <EmployeeModal
          employee={editingEmployee}
          onClose={() => setShowModal(false)}
          onSave={handleSave}
        />
      )}

      {showDetail && (
        <EmployeeDetailModal
          employee={showDetail}
          onClose={() => setShowDetail(null)}
        />
      )}
    </div>
  );
};

export default EmployeeList;
