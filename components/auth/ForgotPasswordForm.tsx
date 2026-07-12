"use client";

import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { z } from "zod";
import useAuth from "@/hooks/useAuth";
import AuthIcons from "../icons/AuthIcons";
import { Loader2 } from "lucide-react";
import { Form } from "@/components/form/Form";
import { useRouter } from "next/navigation";
import GenericInput from "@/components/common/generic-input/GenericInput";
import GenericButton from "@/components/common/generic-button/GenericButton";



const forgotPasswordSchema = z.object({
    email: z.string().min(1, "Email is required"),
});

type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;

function ForgotPasswordFormFields({
    isLoading,
    submitError,
}: {
    isLoading: boolean;
    submitError: string;
}) {

    // Get form state from context
    const {
        register,
        formState: { errors },
    } = useFormContext<ForgotPasswordFormValues>();

    return (
        <>

            <div>
                <p className="text-[color:var(--Stroke,#2A3542)] [font-family:Lora] text-2xl font-bold leading-[130%] tracking-[0.48px]">Forgot Password?</p>
                <p className="self-stretch text-[color:var(--Secondary-Text,#697586)] [font-family:Inter] text-base font-normal leading-[160%]">To reset your password, first enter your email. A verification code will be sent to ad*****n@gmail.com.</p>
            </div>

            <div className="relative">
                <GenericInput
                    {...register("email")}
                    error={errors.email?.message}
                    type="email"
                    placeholder="Email"
                    prefix={<AuthIcons.EmailIcon className="h-5 w-5 text-slate-900" />}
                    size="sm"
                />
            </div>

            {submitError && (
                <div className="rounded-md border border-red-200 bg-red-50 p-3">
                    <p className="text-center text-sm text-red-600">{submitError}</p>
                </div>
            )}

            <GenericButton
                type="submit"
                title={isLoading ? "Logging in..." : "Send Verification Code"}
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

export default function ForgotPasswordForm() {
    const { forgotPassword, isLoading } = useAuth();
    const [submitError, setSubmitError] = useState("");
    const router = useRouter();
    const onSubmit = async (data: ForgotPasswordFormValues) => {
        setSubmitError("");
        try {
            await forgotPassword(data);
            router.push("/verify-otp");
        } catch (err) {
            console.log(err);
            setSubmitError(err instanceof Error ? err.message : "Login failed");
        }
    };

    return (
        <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
            <div className="flex flex-col gap-8 w-full">
                <h1 className="text-3xl font-bold text-[#4C1D95] font-[Lora] text-center">StreetFood</h1>
                <p className="text-[#697586] text-sm -mt-4 text-center">Reset your password</p>

                <Form<ForgotPasswordFormValues>
                    schema={forgotPasswordSchema}
                    defaultValues={{ email: "" }}
                    onSubmit={onSubmit}
                    className="w-full space-y-4"
                >
                    <ForgotPasswordFormFields isLoading={isLoading} submitError={submitError} />
                </Form>
            </div>

            <div className="mt-8 flex w-full items-center justify-between">
                <p className="text-sm text-[#697586]">Privacy Policy</p>
                <p className="text-sm text-[#697586]">Copyright 2026</p>
            </div>
        </div>
    );
}
