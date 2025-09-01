import React from "react";
import EmployeeList from "@/components/employee/EmployeeList";

const EmployeesPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">จัดการพนักงาน</h1>
      <EmployeeList />
    </div>
  );
};

export default EmployeesPage;
