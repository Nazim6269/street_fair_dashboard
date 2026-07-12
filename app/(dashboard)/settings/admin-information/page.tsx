"use client";

import React, { useState, useRef } from 'react';
import { Upload, Trash2, Pencil, User, Mail, Shield } from 'lucide-react';

export default function AdminInformationPage() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "Nazim uddin",
    email: "admin.atliss@gmail.com",
    accountType: "ADMINISTRATOR"
  });
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSave = () => {
    console.log("Saving data:", { ...formData, image });
    setIsEditing(false);
  };

  return (
    <div className='space-y-6'>
      <div className='flex justify-between items-center'>
        <h3 className='text-[#2A3542] font-[Lora] text-xl font-bold'>Profile Details</h3>
        
        {!isEditing ? (
          <button 
            onClick={() => setIsEditing(true)}
            className='flex items-center gap-2 text-[#7C3AED] font-medium hover:text-[#4C1D95] transition-colors'
          >
            <Pencil size={16} /> Edit
          </button>
        ) : (
          <div className='flex gap-3'>
            <button 
              onClick={() => setIsEditing(false)} 
              className='px-5 py-2.5 rounded-xl border border-purple-200 text-[#697586] font-medium hover:bg-purple-50 transition-colors'
            >
              Cancel
            </button>
            <button 
              onClick={handleSave} 
              className='px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#4C1D95] to-[#7C3AED] text-white font-semibold hover:shadow-lg hover:shadow-purple-500/20 transition-all'
            >
              Save Changes
            </button>
          </div>
        )}
      </div>

      <div className='flex flex-col md:flex-row gap-8'>
        <div className='w-full md:w-64 shrink-0'>
          <div className='flex flex-col items-center p-6 rounded-2xl border border-purple-100 bg-purple-50/30'>
            <div className='relative mb-4'>
              <img 
                src={imagePreview || "https://randomuser.me/api/portraits/men/36.jpg"} 
                alt="Profile" 
                className='w-24 h-24 rounded-2xl object-cover ring-4 ring-white shadow-lg' 
              />
              <div className='absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-[#4C1D95] to-[#7C3AED] rounded-full flex items-center justify-center'>
                <User className='w-4 h-4 text-white' />
              </div>
            </div>
            
            <h4 className='text-[#2A3542] font-semibold'>{formData.name}</h4>
            <p className='text-[#697586] text-sm'>{formData.accountType}</p>
            
            <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageChange} />
            
            <div className='flex gap-2 w-full mt-4'>
              <button 
                onClick={() => fileInputRef.current?.click()}
                className='flex-1 flex justify-center items-center gap-2 bg-gradient-to-r from-[#4C1D95] to-[#7C3AED] text-white py-2 rounded-xl text-sm font-medium'
              >
                <Upload size={14} /> Upload
              </button>
              <button 
                onClick={() => { setImage(null); setImagePreview(null); }}
                className='px-3 py-2 rounded-xl border border-red-200 text-red-500 hover:bg-red-50 transition-colors'
              >
                <Trash2 size={14} />
              </button>
            </div>
          </div>
        </div>

        <div className='flex-1 space-y-5'>
          <div className='grid gap-5'>
            <InputField 
              icon={<User className='w-4 h-4' />}
              label="Full Name" 
              name="name" 
              value={formData.name} 
              onChange={handleInputChange} 
              disabled={!isEditing} 
            />
            <InputField 
              icon={<Mail className='w-4 h-4' />}
              label="Email Address" 
              name="email" 
              value={formData.email} 
              onChange={handleInputChange} 
              disabled={!isEditing} 
            />
            <InputField 
              icon={<Shield className='w-4 h-4' />}
              label="Account Type" 
              name="accountType" 
              value={formData.accountType} 
              onChange={handleInputChange} 
              disabled={true} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function InputField({ label, name, value, onChange, disabled, icon }: any) {
  return (
    <div>
      <label className="mb-2 flex items-center gap-2 text-[#697586] text-sm font-medium">
        {icon}
        {label}
      </label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className="h-12 w-full rounded-xl border border-purple-100 bg-purple-50/30 px-4 text-sm text-[#161618] outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-purple-100 disabled:cursor-not-allowed transition-all"
      />
    </div>
  );
}
