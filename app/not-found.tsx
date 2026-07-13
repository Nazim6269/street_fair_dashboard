import React from 'react'
import Link from 'next/link'
import GenericButton from '@/components/common/generic-button/GenericButton'
import { SITE_NAME } from '@/lib/constants'

export default function page() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-50">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-3xl font-bold text-[#4C1D95] font-[Lora] text-center">{SITE_NAME}</h1>

          <div className="text-center">
            <h2 className="text-[#2A3542] font-[Lora] text-2xl font-bold">Ooops!</h2>
            <p className="text-[#697586] text-sm mt-2">The page you are looking for is not found.</p>
          </div>

          <Link href="/">
            <GenericButton
              type="button"
              title="Go to Home"
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
    </div>
  )
}
