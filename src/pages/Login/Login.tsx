import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // ดึงค่าจาก input ถ้าจำเป็น (ตัวอย่างแบบเร็ว)
    const email = e.target.email.value;
    const password = e.target.password.value;

    // TODO: ทำการตรวจสอบ login จริง ๆ ที่นี่ (เช่น เรียก API)

    // ถ้าสำเร็จ:
    navigate('/'); // กลับหน้าแรก
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-sm rounded-lg bg-white p-8 shadow-lg">
        <h2 className="mb-6 text-center text-lg font-semibold text-gray-800">
          Login
        </h2>

        <div className="flex justify-center mb-6">
          <img
            src="/path-to-your-logo.png"
            alt="Company Logo"
            className="h-20 w-auto"
          />
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="w-full rounded border border-indigo-600 px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-1 block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="w-full rounded border border-indigo-600 px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded bg-indigo-900 py-3 text-white shadow hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            เข้าสู่ระบบ
          </button>

          <div className="mt-4 text-right text-sm text-gray-600">
            <a href="/forgot-password" className="text-indigo-600 hover:underline">
              ลืมรหัสผ่าน?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
