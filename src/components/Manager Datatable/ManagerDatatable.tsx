// src/components/ManagerDatatable.tsx
import { useState } from "react";
import jsPDF from "jspdf";
// @ts-ignore
import autoTable from "jspdf-autotable";
import { sampleProducts } from "../../Data/products";
import THSarabunNewBase64 from "../../assets/fonts/THSarabunNew";

const ManagerDatatable = () => {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  // ฟังก์ชันเช็ค/เลือก checkbox
  const handleCheckboxChange = (id: number) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((i) => i !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedIds([]);
      setSelectAll(false);
    } else {
      setSelectedIds(sampleProducts.map((item) => item.id));
      setSelectAll(true);
    }
  };

  // ฟังก์ชัน Export PDF
  const handleExportPDF = () => {
    const dataToExport = sampleProducts.filter((item) =>
      selectedIds.includes(item.id)
    );

    if (dataToExport.length === 0) {
      alert("กรุณาเลือกอย่างน้อย 1 แถว");
      return;
    }

    const doc = new jsPDF();

    // เพิ่มฟอนต์ไทย
    doc.addFileToVFS("THSarabunNew.ttf", THSarabunNewBase64);
    doc.addFont("THSarabunNew.ttf", "THSarabun", "normal");
    doc.setFont("THSarabun");

    // สร้างตาราง PDF
    autoTable(doc, {
      head: [["ID", "Title", "Description"]],
      body: dataToExport.map((item) => [item.id, item.title, item.description]),
      styles: { font: "THSarabun", fontSize: 14 },
      headStyles: { fillColor: [41, 128, 185], textColor: 255 },
      startY: 20,
    });

    doc.save("products.pdf");
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Product DataTable</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 border-b">
                <input type="checkbox" checked={selectAll} onChange={handleSelectAll} />
              </th>
              <th className="p-3 border-b text-left whitespace-nowrap">ID</th>
              <th className="p-3 border-b text-left whitespace-nowrap">Title</th>
              <th className="p-3 border-b text-left whitespace-nowrap">Description</th>
            </tr>
          </thead>
          <tbody>
            {sampleProducts.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="p-3 border-b">
                  <input
                    type="checkbox"
                    checked={selectedIds.includes(item.id)}
                    onChange={() => handleCheckboxChange(item.id)}
                  />
                </td>
                <td className="p-3 border-b">{item.id}</td>
                <td className="p-3 border-b">{item.title}</td>
                <td className="p-3 border-b">{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={handleExportPDF}
      >
        Export PDF
      </button>
    </div>
  );
};

export default ManagerDatatable;
