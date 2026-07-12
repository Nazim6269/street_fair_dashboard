"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";
import GenericInput from "../common/generic-input/GenericInput";
import GenericButton from "../common/generic-button/GenericButton";
import useAuth from "@/hooks/useAuth";

const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email Address is required")
    .email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
  rememberMe: z.boolean(),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const { login, isLoading } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    setIsSubmitting(true);
    setSubmitError("");
    try {
      await login({ email: data.email, password: data.password });
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">
        <GenericInput
          {...register("email")}
          error={errors.email?.message}
          prefix={<Mail className="w-5 h-5 text-slate-500" />}
          label="Email Address"
          placeholder="you@example.com"
          type="email"
          size="sm"
          fullWidth
        />

        <GenericInput
          {...register("password")}
          error={errors.password?.message}
          label="Password"
          type="password"
          placeholder="••••••••"
          size="sm"
          passwordToggle={true}
          fullWidth
        />

        <div className="flex items-center justify-between gap-2 mt-2">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="rememberMe"
              {...register("rememberMe")}
              className="w-4 h-4 text-purple-600 rounded border-gray-300 focus:ring-purple-500 cursor-pointer"
            />
            <label htmlFor="rememberMe" className="text-sm text-[#697586]">
              Keep me signed in
            </label>
          </div>
          <Link
            href="/forgot-password"
            className="text-sm font-bold text-[#4C1D95] underline"
          >
            Forgot password?
          </Link>
        </div>

        {submitError && (
          <div className="rounded-xl border border-red-200 bg-red-50 p-3">
            <p className="text-center text-sm text-red-600">{submitError}</p>
          </div>
        )}

        <GenericButton
          type="submit"
          title={isSubmitting || isLoading ? "Signing in..." : "Sign in to workspace"}
          icon={isSubmitting || isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <ArrowRight className="h-5 w-5" />}
          iconPosition="right"
          variant="violet"
          size="large"
          align="center"
          disabled={isSubmitting || isLoading}
          className="w-full disabled:opacity-50 disabled:cursor-not-allowed"
        />
      </form>
    </div>
  );
};

export default LoginForm;
