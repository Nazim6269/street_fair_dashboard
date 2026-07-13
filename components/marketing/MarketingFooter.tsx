import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";

export default function MarketingFooter() {
  return (
    <footer className="border-t border-[#EAECF0] bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="font-[Lora] text-xl font-bold text-[#4C1D95]">
              {SITE_NAME}
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#697586]">
              The all-in-one platform connecting vendors and customers at street fairs and markets.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[#2A3542]">Product</h4>
            <ul className="mt-3 space-y-2">
              <li>
                <a href="#features" className="text-sm text-[#697586] transition-colors hover:text-[#4C1D95]">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-sm text-[#697586] transition-colors hover:text-[#4C1D95]">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#mobile-app" className="text-sm text-[#697586] transition-colors hover:text-[#4C1D95]">
                  Mobile App
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[#2A3542]">Account</h4>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/login" className="text-sm text-[#697586] transition-colors hover:text-[#4C1D95]">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-sm text-[#697586] transition-colors hover:text-[#4C1D95]">
                  Register
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[#2A3542]">Legal</h4>
            <ul className="mt-3 space-y-2">
              <li>
                <a href="#" className="text-sm text-[#697586] transition-colors hover:text-[#4C1D95]">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#697586] transition-colors hover:text-[#4C1D95]">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-[#EAECF0]">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-center text-xs text-[#98A2B3]">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
