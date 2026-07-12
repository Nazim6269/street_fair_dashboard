"use client";

import React, { useState } from "react";
import { Eye, EyeOff, Lock, Shield } from "lucide-react";

export default function SecurityPage() {
    const [isEditing, setIsEditing] = useState(false);

    const [showPassword, setShowPassword] = useState({
        currentPassword: false,
        newPassword: false,
        confirmPassword: false,
    });

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
        setIsEditing(false);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setFormData({
            currentPassword: "",
            newPassword: "",
            confirmPassword: "",
        });
    };

    const togglePassword = (field: keyof typeof showPassword) => {
        setShowPassword((prev) => ({
            ...prev,
            [field]: !prev[field],
        }));
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h3 className="text-[#2A3542] font-[Lora] text-xl font-bold">Security Settings</h3>

                {!isEditing ? (
                    <button
                        onClick={() => setIsEditing(true)}
                        className="flex items-center gap-2 text-[#7C3AED] font-medium hover:text-[#4C1D95] transition-colors"
                    >
                        <Lock size={16} /> Change Password
                    </button>
                ) : (
                    <div className="flex gap-3">
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
                )}
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
                    <InputField
                        placeholder="Enter your current password"
                        label="Current Password"
                        name="currentPassword"
                        value={formData.currentPassword}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        showPassword={showPassword.currentPassword}
                        onToggle={() => togglePassword("currentPassword")}
                    />

                    <InputField
                        placeholder="Enter your new password"
                        label="New Password"
                        name="newPassword"
                        value={formData.newPassword}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        showPassword={showPassword.newPassword}
                        onToggle={() => togglePassword("newPassword")}
                    />

                    <InputField
                        placeholder="Confirm your new password"
                        label="Confirm Password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        showPassword={showPassword.confirmPassword}
                        onToggle={() => togglePassword("confirmPassword")}
                    />
                </div>
            </div>
        </div>
    );
}

function InputField({
    label,
    name,
    value,
    onChange,
    disabled,
    showPassword,
    onToggle,
    placeholder,
}: {
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled: boolean;
    showPassword: boolean;
    onToggle: () => void;
    placeholder: string;
}) {
    return (
        <div>
            <label className="mb-2 block text-[#697586] text-sm font-medium">
                {label}
            </label>

            <div className="relative">
                <input
                    placeholder={placeholder}
                    type={showPassword ? "text" : "password"}
                    name={name}
                    value={value}
                    onChange={onChange}
                    disabled={disabled}
                    className="h-12 w-full rounded-xl border border-purple-100 bg-purple-50/30 px-4 pr-12 text-sm text-[#161618] outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-purple-100 disabled:cursor-not-allowed transition-all"
                />

                <button
                    type="button"
                    onClick={onToggle}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#697586] hover:text-[#4C1D95] transition-colors"
                >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
            </div>
        </div>
    );
}
