import React from 'react'
import Link from 'next/link'
import GenericButton from '@/components/common/generic-button/GenericButton'
import { SITE_NAME } from '@/lib/constants'

export default function SuccessPage() {
  return (
    <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-3xl font-bold text-[#4C1D95] font-[Lora] text-center">{SITE_NAME}</h1>

        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#4C1D95] to-[#7C3AED] flex items-center justify-center">
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <div className="text-center">
          <h2 className="text-[#2A3542] font-[Lora] text-2xl font-bold">Password Reset Successful!</h2>
          <p className="text-[#697586] text-sm mt-2">Password updated! You're all set to continue.</p>
        </div>

        <Link className="w-full" href="/login">
          <GenericButton
            type="button"
            title="Go to Login"
            variant="violet"
            size="large"
            align="center"
            className="w-full"
          />
        </Link>
      </div>

      <div className="mt-8 flex w-full items-center justify-between">
        <p className="text-sm text-[#697586]">Privacy Policy</p>
        <p className="text-sm text-[#697586]">Copyright 2026</p>
      </div>
    </div>
  )
}
