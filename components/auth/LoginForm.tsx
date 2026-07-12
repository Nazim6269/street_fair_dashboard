"use client";

import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { z } from "zod";
import useAuth from "@/hooks/useAuth";
import Image from "next/image";
import AuthIcons from "../icons/AuthIcons";
import { EyeIcon, EyeOffIcon, Loader2 } from "lucide-react";
import Checkbox from "../form/Checkbox";
import { Form } from "@/components/form/Form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IS_DEV } from "@/lib/constants";



const defaultValues: LoginFormValues = IS_DEV ? {
  email: "admin@gmail.com",
  password: "Admin@123456",
} : {
  email: "",
  password: "",
};


const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address.").min(1, "Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),

});

type LoginFormValues = z.infer<typeof loginSchema>;

function LoginFormFields({
  isLoading,
  submitError,
  
}: {
  isLoading: boolean;
  submitError: string;
}) {
  const [showPassword, setShowPassword] = useState(false);
  // Get form state from context
  const {
    register,
    formState: { errors },
    
  } = useFormContext<LoginFormValues>();

  return (
    <>
      <p className="self-stretch text-lg font-bold leading-[130%] text-(--Stroke,#2A3542) opacity-70 font-[Lora]">
        Log in as a Admin
      </p>

      <div className="relative">
        <input
          type="email"
          autoComplete="email"
          placeholder="Email"
          className="auth-input pl-12"
          {...register("email")}
        />
        <AuthIcons.EmailIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-900" />

      </div>
      {errors.email && (
        <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
      )}

      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          autoComplete="current-password"
          placeholder="Password"
          className="auth-input pl-12"
          {...register("password")}
        />
        <AuthIcons.PasswordIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-900" />

        {
          showPassword ? (
            <EyeIcon onClick={() => setShowPassword(false)} className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-800 cursor-pointer" />
          ) : (
            <EyeOffIcon onClick={() => setShowPassword(true)} className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-800 cursor-pointer" />
          )
        }

      </div>
      {errors.password && (
        <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
      )}

      <Link href="/forgot-password" className="mb-2 text-right text-sm font-normal leading-[120%] text-[#697586] [font:Inter] block">
        Forgot password?
      </Link>

      <div className="flex items-center gap-2">
        <Checkbox />
        <p className="text-base font-medium leading-[160%] text-[#697586] opacity-70 [font:Inter]">
          Remember me
        </p>
      </div>

      {submitError && (
        <div className="rounded-md border border-red-200 bg-red-50 p-3">
          <p className="text-center text-sm text-red-600">{submitError}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="btn-primary disabled:cursor-not-allowed bg-[linear-gradient(136deg,#4C1D95_0%,#7C3AED_100%)] hover:shadow-purple-600/30"
      >
        {isLoading ? (
          <div className="flex items-center gap-2 text-gray-800">
            <Loader2 className="h-4 w-4 animate-spin md:h-5 md:w-5" />
            Logging in...
          </div>
        ) : (
          "Sign In"
        )}
      </button>
    </>
  );
}

export default function LoginForm() {
  const { login, isLoading } = useAuth();
  const [submitError, setSubmitError] = useState("");
  const router = useRouter();
  const onSubmit = async (data: LoginFormValues) => {
    setSubmitError("");
    try {
      await login(data);
      // cookie.set("access-token", "1234567890");
      // router.push("/dashboard");
    } catch (err) {
      console.log(err);
      setSubmitError(err instanceof Error ? err.message : "Login failed");
    }
  };

  return (
    <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-3xl font-bold text-[#4C1D95] font-[Lora]">StreetFood</h1>

        <Form<LoginFormValues>
          schema={loginSchema}
          defaultValues={defaultValues}
          onSubmit={onSubmit}
          className="w-full space-y-4"
        >
          <LoginFormFields isLoading={isLoading} submitError={submitError} />
        </Form>
      </div>

      <div className="mt-8 flex w-full items-center justify-between">
        <p className="text-sm text-[#697586]">Privacy Policy</p>
        <p className="text-sm text-[#697586]">Copyright 2026</p>
      </div>
    </div>
  );
}
