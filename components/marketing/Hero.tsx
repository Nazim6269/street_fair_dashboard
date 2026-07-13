import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="bg-[#1A0B3D]">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <div className="items-center gap-12 lg:grid lg:grid-cols-2">
          <div>
            <h1 className="font-[Lora] text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              {SITE_NAME}
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/80 sm:text-xl">
              {SITE_TAGLINE}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#mobile-app"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#4C1D95] shadow-lg transition-all hover:bg-white/90 hover:shadow-xl"
              >
                Download the App
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/login"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
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
