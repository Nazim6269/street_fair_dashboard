import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <div className="items-center gap-12 lg:grid lg:grid-cols-2">
          <div>
            <h1 className="font-[Lora] text-4xl font-bold text-[#161618] sm:text-5xl lg:text-6xl">
              {SITE_NAME}
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-[#697586] sm:text-xl">
              {SITE_TAGLINE}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#mobile-app"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[linear-gradient(136deg,#4C1D95_0%,#7C3AED_100%)] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:opacity-90 hover:shadow-xl"
              >
                Download the App
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/login"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#DFE1E7] px-6 py-3 text-sm font-semibold text-[#4C1D95] transition-all hover:bg-purple-50"
              >
                Login to Dashboard
              </Link>
            </div>
          </div>

          <div className="mt-12 flex justify-center lg:mt-0">
            <img
              src="/hero.png"
              alt="StreetFair preview"
              className="w-full max-w-md rounded-2xl object-cover shadow-2xl lg:max-w-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
