const steps = [
  {
    number: "1",
    title: "Sign Up",
    description: "Create your free account in seconds. Choose whether you're a vendor or customer.",
  },
  {
    number: "2",
    title: "Set Up or Explore",
    description: "Vendors: configure your stall and subscription. Customers: discover fairs near you.",
  },
  {
    number: "3",
    title: "Start Selling or Discovering",
    description: "Vendors: manage orders and grow your business. Customers: enjoy local street fairs.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-[Lora] text-3xl font-bold text-[#161618] sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-3 text-lg text-[#697586]">
            Get started in three simple steps.
          </p>
        </div>

        <div className="relative mt-16">
          <div className="hidden h-px bg-[#EAECF0] lg:block" style={{ top: "2rem", left: "16.67%", right: "16.67%" }} />

          <div className="grid gap-12 lg:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number} className="relative flex flex-col items-center text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[linear-gradient(136deg,#4C1D95_0%,#7C3AED_100%)] text-2xl font-bold text-white shadow-lg">
                  {step.number}
                </div>
                <h3 className="font-[Lora] text-xl font-semibold text-[#2A3542]">{step.title}</h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#697586]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
