export default function AppPromo() {
  return (
    <section id="mobile-app" className="bg-[#F9FAFB] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="items-center gap-12 lg:grid lg:grid-cols-2">
          <div className="relative flex items-center justify-center py-10">
            <div className="relative h-[420px] w-[280px] overflow-hidden rounded-[2rem] bg-white shadow-2xl">
              <img
                src="/Device 13PM.png"
                alt="StreetFair mobile app preview"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -right-4 top-4 h-[200px] w-[140px] overflow-hidden rounded-2xl bg-white shadow-xl sm:-right-8 sm:top-8 sm:h-[240px] sm:w-[160px]">
              <img
                src="/Screen 1.png"
                alt="StreetFair screen"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -left-4 bottom-4 h-[180px] w-[130px] overflow-hidden rounded-2xl bg-white shadow-xl sm:-left-8 sm:bottom-8 sm:h-[220px] sm:w-[150px]">
              <img
                src="/Place your Design.png"
                alt="StreetFair design preview"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="mt-10 lg:mt-0">
            <h2 className="font-[Lora] text-3xl font-bold text-[#161618] sm:text-4xl">
              Take StreetFair Everywhere
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#697586]">
              Download our mobile app and never miss a fair. Browse vendors, get directions, and receive real-time updates on events near you.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#"
                className="inline-flex items-center gap-3 rounded-xl bg-[#161618] px-6 py-3.5 text-white transition-opacity hover:opacity-90"
              >
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="flex flex-col">
                  <span className="text-[10px] leading-tight opacity-80">Download on the</span>
                  <span className="text-sm font-semibold leading-tight">App Store</span>
                </div>
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-3 rounded-xl bg-[#161618] px-6 py-3.5 text-white transition-opacity hover:opacity-90"
              >
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 010 1.38l-2.302 2.302L15.394 13l2.302-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                </svg>
                <div className="flex flex-col">
                  <span className="text-[10px] leading-tight opacity-80">Get it on</span>
                  <span className="text-sm font-semibold leading-tight">Google Play</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
