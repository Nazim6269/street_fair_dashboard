

"use client";

import { useFormContext, Controller } from "react-hook-form";
import {
    REGEXP_ONLY_DIGITS,
} from "input-otp";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp";

interface OTPFieldProps {
    name: string;
    maxLength?: number;
}

export function OTPField({ name, maxLength = 6 }: OTPFieldProps) {
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState }) => (
                <div className="flex flex-col items-center gap-2">
                    <InputOTP
                        maxLength={maxLength}
                        pattern={REGEXP_ONLY_DIGITS}
                        {...field}
                    >
                        <InputOTPGroup className="gap-3 md:gap-5">
                            {Array.from({ length: maxLength }).map((_, index) => (
                                <InputOTPSlot
                                    key={index}
                                    index={index}
                                    className="
                    w-10 h-14 md:w-12 md:h-16 
                    text-3xl md:text-4xl font-semibold 
                    text-[#7C3AED] border border-purple-200
                    rounded-xl focus-visible:ring-0 focus-visible:border-[#7C3AED]
                  "
                                />
                            ))}
                        </InputOTPGroup>
                    </InputOTP>
                    {fieldState.error && (
                        <p className="text-sm text-red-600">{fieldState.error.message}</p>
                    )}
                </div>
            )}
        />
    );
}



import { z } from "zod";
import { Form } from "@/components/form/Form";
import { useRouter } from "next/navigation";
import GenericButton from "@/components/common/generic-button/GenericButton";
import { SITE_NAME } from "@/lib/constants";

const otpSchema = z.object({
    code: z.string().min(1, "OTP is required"),
});

export default function VerifyOTPForm() {

    const router = useRouter();
    const handleVerify = (data: { code: string }) => {
        router.push("/set-password");
    };

    return (
        <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
            <div className="flex flex-col gap-8 w-full">
                <h1 className="text-3xl font-bold text-[#4C1D95] font-[Lora] text-center">{SITE_NAME}</h1>
                <p className="text-[#697586] text-sm -mt-4 text-center">Enter the 6-digit code sent to your email</p>

                <Form
                    schema={otpSchema}
                    onSubmit={handleVerify}
                    defaultValues={{ code: "" }}
                >
                        <OTPField name="code" maxLength={6} />

                        <GenericButton
                            type="submit"
                            title="Verify Account"
                            variant="violet"
                            size="large"
                            align="center"
                            className="w-full mt-6"
                        />
                </Form>
            </div>

            <div className="mt-8 flex w-full items-center justify-between">
                <p className="text-sm text-[#697586]">Privacy Policy</p>
                <p className="text-sm text-[#697586]">Copyright 2026</p>
            </div>
        </div>
    );
}