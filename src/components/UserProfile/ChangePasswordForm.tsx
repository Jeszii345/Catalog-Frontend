import { useState, useEffect } from "react";

// Toast component
const Toast = ({
  message,
  type = "success",
  onClose,
}: {
  message: string;
  type?: "success" | "error";
  onClose: () => void;
}) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor = type === "success" ? "bg-green-600" : "bg-red-600";

  return (
    <div className="fixed top-6 right-6 z-[60]">
      <div className={`${bgColor} text-white px-6 py-3 rounded shadow-lg flex items-center gap-3`}>
        <span>{message}</span>
        <button onClick={onClose} className="ml-2 text-white font-bold">✕</button>
      </div>
    </div>
  );
};

type Props = {
  onSubmit: (oldPassword: string, newPassword: string) => void;
};

// ฟังก์ชันสุ่มรหัสผ่านปลอม
const generateRandomPassword = (length: number) => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

const ChangePasswordForm = ({ onSubmit }: Props) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [toastMsg, setToastMsg] = useState<string | null>(null);
  const [toastType, setToastType] = useState<"success" | "error">("success");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setToastMsg("รหัสผ่านไม่ตรงกัน");
      setToastType("error");
      return;
    }

    onSubmit(oldPassword, newPassword);
    setToastMsg("เปลี่ยนรหัสผ่านเรียบร้อยแล้ว");
    setToastType("success");

    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  // ฟังก์ชันป้องกัน paste
  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>, setter: (val: string) => void) => {
    e.preventDefault(); // หยุดการ paste ปกติ
    const pastedLength = e.clipboardData.getData("text").length;
    const randomStr = generateRandomPassword(pastedLength || 8);
    setter(randomStr);
  };

  return (
    <>
      {toastMsg && <Toast message={toastMsg} type={toastType} onClose={() => setToastMsg(null)} />}
      <form className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md space-y-4" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">เปลี่ยนรหัสผ่าน</h2>

        <div>
          <label className="block font-medium mb-1">รหัสผ่านเก่า</label>
          <input
            type="password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            onPaste={(e) => handlePaste(e, setOldPassword)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">รหัสผ่านใหม่</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            onPaste={(e) => handlePaste(e, setNewPassword)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">ยืนยันรหัสผ่านใหม่</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            onPaste={(e) => handlePaste(e, setConfirmPassword)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 font-semibold transition"
        >
          บันทึกรหัสผ่าน
        </button>
      </form>
    </>
  );
};

export default ChangePasswordForm;
