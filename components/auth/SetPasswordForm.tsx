"use client";

import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { z } from "zod";
import useAuth from "@/hooks/useAuth";
import { Loader2, Lock } from "lucide-react";
import { Form } from "@/components/form/Form";
import { useRouter } from "next/navigation";
import GenericInput from "@/components/common/generic-input/GenericInput";
import GenericButton from "@/components/common/generic-button/GenericButton";


const setPasswordSchema = z.object({
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Password must be at least 6 characters"),
}).refine((values) => values.password === values.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});

type SetPasswordFormValues = z.infer<typeof setPasswordSchema>;

function SetPasswordFormFields({
    isLoading,
    submitError,
}: {
    isLoading: boolean;
    submitError: string;
}) {
    const {
        register,
        formState: { errors },
    } = useFormContext<SetPasswordFormValues>();

    return (
        <>
            <div>
                <p className="text-[color:var(--Stroke,#2A3542)] [font-family:Lora] text-2xl font-bold leading-[130%] tracking-[0.48px]">Set New Password</p>
                <p className="self-stretch text-[color:var(--Secondary-Text,#697586)] [font-family:Inter] text-base font-normal leading-[160%]">Must be at least 8 characters..</p>
            </div>

            <GenericInput
                {...register("password")}
                error={errors.password?.message}
                type="password"
                placeholder="Enter new password"
                prefix={<Lock className="w-4 h-4 text-slate-500" />}
                passwordToggle={true}
                size="sm"
            />

            <GenericInput
                {...register("confirmPassword")}
                error={errors.confirmPassword?.message}
                type="password"
                placeholder="Confirm new password"
                prefix={<Lock className="w-4 h-4 text-slate-500" />}
                passwordToggle={true}
                size="sm"
            />

            {submitError && (
                <div className="rounded-md border border-red-200 bg-red-50 p-3">
                    <p className="text-center text-sm text-red-600">{submitError}</p>
                </div>
            )}

            <GenericButton
                type="submit"
                title={isLoading ? "Resetting..." : "Reset Password"}
                variant="violet"
                size="large"
                align="center"
                disabled={isLoading}
                className="w-full"
                icon={isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : undefined}
            />
        </>
    );
}

export default function SetPasswordForm() {
    // const { setPassword, isLoading } = useAuth();
    const {  isLoading } = useAuth();
    const [submitError, setSubmitError] = useState("");
    const router = useRouter();
    const onSubmit = async (data: SetPasswordFormValues) => {
        setSubmitError("");
        try {
            // await setPassword(data);
            router.push("/success");
            console.log("Password set successfully");
        } catch (err) {
            console.log(err);
            setSubmitError(err instanceof Error ? err.message : "Password reset failed");
        }
    };

    return (
        <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
            <div className="flex flex-col gap-8 w-full">
                <h1 className="text-3xl font-bold text-[#4C1D95] font-[Lora] text-center">StreetFood</h1>
                <p className="text-[#697586] text-sm -mt-4 text-center">Create a new password for your account</p>

                <Form<SetPasswordFormValues>
                    schema={setPasswordSchema}
                    defaultValues={{ password: "", confirmPassword: "" }}
                    onSubmit={onSubmit}
                    className="w-full space-y-4"
                >
                    <SetPasswordFormFields isLoading={isLoading} submitError={submitError} />
                </Form>
            </div>

            <div className="mt-8 flex w-full items-center justify-between">
                <p className="text-sm text-[#697586]">Privacy Policy</p>
                <p className="text-sm text-[#697586]">Copyright 2026</p>
            </div>
        </div>
    );
}
