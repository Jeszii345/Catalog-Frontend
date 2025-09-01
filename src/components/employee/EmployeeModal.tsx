import React, { useState, useEffect } from "react";
import { Employee } from "./EmployeeList";

type Props = {
  employee: Employee | null;
  onClose: () => void;
  onSave: (employee: Employee) => void;
};

const EmployeeModal = ({ employee, onClose, onSave }: Props) => {
  const [form, setForm] = useState<Employee>({
    id: employee?.id || 0,
    firstName: employee?.firstName || "",
    lastName: employee?.lastName || "",
    email: employee?.email || "",
    address: employee?.address || "",
    age: employee?.age || 0,
    gender: employee?.gender || "ชาย",
    phone1: employee?.phone1 || "",
    phone2: employee?.phone2 || "",
    accessLevel: employee?.accessLevel || "User",
    otherContact: employee?.otherContact || "",
    active: employee?.active ?? true,
  });

  useEffect(() => {
    if (employee) setForm(employee);
  }, [employee]);

  const handleChange = (key: keyof Employee, value: any) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // รีเซ็ต password เป็น Default ถ้าแก้ไข
    if (employee) {
      console.log("Password reset to Default");
    }
    onSave(form);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-xl w-full p-6 overflow-y-auto max-h-[90vh]">
        <h2 className="text-xl font-bold mb-4">
          {employee ? "แก้ไขพนักงาน" : "เพิ่มพนักงาน"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label>ชื่อ</label>
            <input
              type="text"
              value={form.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
              className="border px-3 py-2 rounded"
              required
            />
          </div>
          <div className="flex flex-col">
            <label>นามสกุล</label>
            <input
              type="text"
              value={form.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
              className="border px-3 py-2 rounded"
              required
            />
          </div>
          {employee === null && (
            <div className="flex flex-col">
              <label>Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="border px-3 py-2 rounded"
                required
              />
            </div>
          )}
          <div className="flex flex-col">
            <label>ที่อยู่</label>
            <input
              type="text"
              value={form.address}
              onChange={(e) => handleChange("address", e.target.value)}
              className="border px-3 py-2 rounded"
            />
          </div>
          <div className="flex flex-col">
            <label>อายุ</label>
            <input
              type="number"
              value={form.age}
              onChange={(e) => handleChange("age", Number(e.target.value))}
              className="border px-3 py-2 rounded"
            />
          </div>
          <div className="flex flex-col">
            <label>เพศ</label>
            <select
              value={form.gender}
              onChange={(e) => handleChange("gender", e.target.value)}
              className="border px-3 py-2 rounded"
            >
              <option value="ชาย">ชาย</option>
              <option value="หญิง">หญิง</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label>เบอร์โทรศัพท์ 1</label>
            <input
              type="text"
              value={form.phone1}
              onChange={(e) => handleChange("phone1", e.target.value)}
              className="border px-3 py-2 rounded"
            />
          </div>
          <div className="flex flex-col">
            <label>เบอร์โทรศัพท์ 2</label>
            <input
              type="text"
              value={form.phone2}
              onChange={(e) => handleChange("phone2", e.target.value)}
              className="border px-3 py-2 rounded"
            />
          </div>
          <div className="flex flex-col">
            <label>ระดับการเข้าถึง</label>
            <select
              value={form.accessLevel}
              onChange={(e) => handleChange("accessLevel", e.target.value)}
              className="border px-3 py-2 rounded"
            >
              <option value="User">User</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label>ข้อมูลการติดต่ออื่นๆ</label>
            <input
              type="text"
              value={form.otherContact}
              onChange={(e) => handleChange("otherContact", e.target.value)}
              className="border px-3 py-2 rounded"
            />
          </div>
          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
            >
              ยกเลิก
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
            >
              บันทึก
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeModal;
