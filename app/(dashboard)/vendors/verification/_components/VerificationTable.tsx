"use client";

import EmptyState from "@/components/reusable/EmptyState";
import DataTable, { Column } from "@/components/reusable/table/DataTable";
import GenericButton from "@/components/common/generic-button/GenericButton";
import GenericDropDown from "@/components/common/generic-dropdown/GenericDropdown";
import Link from "next/link";
import { VendorVerification } from "@/types/vendor.types";
import { VendorVerificationList } from "@/types/vendor.types";
import { useState } from "react";

// Tick icon
const TickIcon = (
  <svg
    width="11"
    height="8"
    viewBox="0 0 11 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.79167 7.9625L0 4.17083L1.3125 2.85833L3.79167 5.3375L9.12917 0L10.4417 1.3125L3.79167 7.9625Z"
      fill="#FFFFFF"
    />
  </svg>
);

// Document badge
function DocumentBadge({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center gap-1 pl-2.5">
      <span className="flex w-6 h-6 justify-center items-center bg-[#7C3AED] rounded-full">
        {TickIcon}
      </span>
      <span className="text-[#89A2C3] text-center text-[10px] font-medium leading-[120%]">
        {label}
      </span>
    </div>
  );
}

// Columns
const getColumns = (): Column<VendorVerification>[] => [
  {
    header: "Vendor ID",
    cell: (row) => (
      <div className="text-[#697586] text-sm font-medium ml-2">
        {row.vendorCode}
      </div>
    ),
  },
  {
    header: "Vendor Name",
    cell: (row) => (
      <div className="text-[#161618] text-sm font-medium ml-2">
        {row.vendorName}
      </div>
    ),
  },
  {
    header: "Document Provided",
    cell: (row) => (
      <div className="flex gap-4">
        {row.documents.businessLicense && (
          <DocumentBadge label="Business License" />
        )}
        {row.documents.healthPermit && (
          <DocumentBadge label="Health Permit" />
        )}
        {row.documents.insuranceProof && (
          <DocumentBadge label="Insurance Proof" />
        )}
      </div>
    ),
  },
  {
    header: "Submission Date",
    cell: (row) => (
      <div className="text-sm text-[#697586]">
        {row.submissionDateLabel}
      </div>
    ),
  },
  {
    header: "Action",
    cell: (row) => (
      <Link
        href={`/vendors/verification/${row.verificationId}`}
      >
        <GenericButton
          title="Review"
          variant="violet"
          size="small"
          align="center"
          className="px-6"
        />
      </Link>
    ),
  },
];

interface Props {
  data: VendorVerificationList | undefined;
}

export default function PendingApplicationsPage({
  data,
}: Props) {
  const [sortBy, setSortBy] = useState("newest");
  const hasData = data?.items && data.items.length > 0;

  return (
    <div>
      <div className="border-x border-t rounded-t-2xl bg-white p-6">
        <div className="flex justify-between items-center w-full">
          <h2 className="section-title">
            Pending Vendor Applications
          </h2>

          <div className="flex items-center gap-2">
            <label
              className="text-[#697586] text-sm"
            >
              Sort by:
            </label>
            <GenericDropDown
              options={[
                { label: "Newest First", value: "newest" },
                { label: "Oldest First", value: "oldest" },
              ]}
              value={sortBy}
              onValueChange={(value) => setSortBy(value.toString())}
              placeholder="Sort by"
              variant="light"
              size="sm"
              radius="sm"
            />
          </div>
        </div>
      </div>

      <DataTable
        columns={getColumns()}
        data={data?.items ?? []}
        emptyMessage="No vendor applications found. Please try again later."
      />
    </div>
  );
}