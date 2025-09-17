import ChangePasswordForm from "@/components/UserProfile/ChangePasswordForm";

const ChangePasswordPage = () => {
  const handlePasswordChange = (oldPassword: string, newPassword: string) => {
    // TODO: เรียก API backend สำหรับเปลี่ยนรหัสผ่าน
    console.log("Old:", oldPassword, "New:", newPassword);

  };

  return (
    <div className="p-6">
      <ChangePasswordForm onSubmit={handlePasswordChange} />
    </div>
  );
};

export default ChangePasswordPage;
