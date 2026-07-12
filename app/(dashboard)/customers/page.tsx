import PageTitle from "@/components/reusable/PageTitle";
import GenericButton from "@/components/common/generic-button/GenericButton";
import CustomerStats from "./_components/CustomerStats";
import CustomerManagementTable from "./_components/CustomerManagementTable";
import Link from "next/link";

export default function customersPage() {
  return (
    <div>
      <div className='space-y-6'>
        <div className="flex justify-between items-center">
          <PageTitle title="Customer Management" description="Monitor and manage the global customer base" />


          <Link href="/customers/report">
            <GenericButton title="Reported Customer Queue" variant="violet" size="mlarge" />
          </Link>
        </div>

        <CustomerStats />
        <CustomerManagementTable />

      </div>
    </div>
  )
}
