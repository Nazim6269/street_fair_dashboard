import type { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-50">
      {children}
    </div>
  );
}
