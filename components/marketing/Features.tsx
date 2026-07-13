import { Store, BarChart3, CreditCard, Users, MapPin, Calendar, Bell, Navigation } from "lucide-react";

const vendorFeatures = [
  {
    icon: Store,
    title: "Stall Management",
    description: "Set up and manage your stall with ease. Track inventory, sales, and customer interactions in one place.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Get real-time insights into your sales performance, customer trends, and revenue growth.",
  },
  {
    icon: CreditCard,
    title: "Subscription Plans",
    description: "Choose a plan that fits your business. Scale up as your vendor operations grow.",
  },
  {
    icon: Users,
    title: "Customer Insights",
    description: "Understand your customers better with detailed profiles and purchase history.",
  },
];

const customerFeatures = [
  {
    icon: MapPin,
    title: "Discover Fairs",
    description: "Find street fairs, markets, and events happening near you with our location-based discovery.",
  },
  {
    icon: Calendar,
    title: "Event Calendar",
    description: "Never miss a fair. Get notifications for upcoming events and save your favorites.",
  },
  {
    icon: Navigation,
    title: "Easy Navigation",
    description: "Get directions to fairs and navigate through vendor stalls with our intuitive map.",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Receive personalized alerts for fairs, vendors, and deals that match your interests.",
  },
];

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-[#EAECF0] bg-white p-6 shadow-sm transition-all hover:shadow-md">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-50">
        <Icon className="h-6 w-6 text-[#7C3AED]" />
      </div>
      <h3 className="font-[Lora] text-lg font-semibold text-[#2A3542]">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[#697586]">{description}</p>
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="bg-[#F9FAFB] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-[Lora] text-3xl font-bold text-[#161618] sm:text-4xl">
            Everything You Need
          </h2>
          <p className="mt-3 text-lg text-[#697586]">
            Whether you&apos;re a vendor or a customer, StreetFair has you covered.
          </p>
        </div>

        <div className="mt-14">
          <h3 className="mb-6 text-center text-sm font-semibold uppercase tracking-wider text-[#7C3AED]">
            For Vendors
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {vendorFeatures.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="mb-6 text-center text-sm font-semibold uppercase tracking-wider text-[#7C3AED]">
            For Customers
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {customerFeatures.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
