import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
      <div className="flex flex-col gap-8 w-full">
        <h1 className="text-3xl font-bold text-[#4C1D95] font-[Lora] text-center">StreetFood</h1>
        <p className="text-[#697586] text-sm -mt-4 text-center">Log in as a Admin</p>
        <LoginForm />
      </div>

      <div className="mt-8 flex w-full items-center justify-between">
        <p className="text-sm text-[#697586]">Privacy Policy</p>
        <p className="text-sm text-[#697586]">Copyright 2026</p>
      </div>
    </div>
  );
}
