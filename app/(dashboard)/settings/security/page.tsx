"use client";

import React, { useState } from "react";
import { Lock, Shield } from "lucide-react";
import GenericInput from "@/components/common/generic-input/GenericInput";

export default function SecurityPage() {
    const [formData, setFormData] = useState({
        currentPassword: "12345678",
        newPassword: "123456",
        confirmPassword: "123456",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        if (formData.newPassword !== formData.confirmPassword) {
            alert("New password and confirm password do not match!");
            return;
        }

        if (!formData.currentPassword || !formData.newPassword) {
            alert("Please fill all required fields");
            return;
        }

        console.log("Saving data:", formData);
    };

    const handleCancel = () => {
        setFormData({
            currentPassword: "",
            newPassword: "",
            confirmPassword: "",
        });
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-end gap-3">
                <button
                    onClick={handleCancel}
                    className="px-5 py-2.5 rounded-xl border border-purple-200 text-[#697586] font-medium hover:bg-purple-50 transition-colors"
                >
                    Cancel
                </button>
                <button
                    onClick={handleSave}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#4C1D95] to-[#7C3AED] text-white font-semibold hover:shadow-lg hover:shadow-purple-500/20 transition-all"
                >
                    Update Password
                </button>
            </div>

            <div className="p-6 rounded-2xl border border-purple-100 bg-purple-50/30">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#4C1D95] to-[#7C3AED] flex items-center justify-center">
                        <Shield className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <h4 className="font-semibold text-[#2A3542]">Password Management</h4>
                        <p className="text-sm text-[#697586]">Update your password regularly to keep your account secure</p>
                    </div>
                </div>

                <div className="space-y-5">
                    <GenericInput
                        label="Current Password"
                        name="currentPassword"
                        type="password"
                        placeholder="Enter your current password"
                        value={formData.currentPassword}
                        onChange={handleInputChange}
                        passwordToggle={true}
                        prefix={<Lock className="w-4 h-4 text-slate-500" />}
                        size="sm"
                    />

                    <GenericInput
                        label="New Password"
                        name="newPassword"
                        type="password"
                        placeholder="Enter your new password"
                        value={formData.newPassword}
                        onChange={handleInputChange}
                        passwordToggle={true}
                        prefix={<Lock className="w-4 h-4 text-slate-500" />}
                        size="sm"
                    />

                    <GenericInput
                        label="Confirm Password"
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm your new password"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        passwordToggle={true}
                        prefix={<Lock className="w-4 h-4 text-slate-500" />}
                        size="sm"
                    />
                </div>
            </div>
        </div>
    );
}
