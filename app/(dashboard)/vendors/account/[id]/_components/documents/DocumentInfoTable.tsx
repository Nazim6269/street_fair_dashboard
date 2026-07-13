"use client";
import ActionIcons from "@/components/icons/ActionIcons";
import CustomModal from "@/components/reusable/CustomModal";
import DataTable, { Column } from "@/components/reusable/table/DataTable";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ViewDoc from "@/app/(dashboard)/vendors/verification/[rid]/_components/ViewDoc";
import GenericDropDown from "@/components/common/generic-dropdown/GenericDropdown";
import { DocumentItem } from "@/types/vendor.types";



// 2. Define the columns configuration
const getColumns = (handleView: (document: DocumentItem) => void): Column<DocumentItem>[] => [
    {
        header: "Serial #", accessor: "serial",
        cell: (row) => (
            <div className="self-stretch text-[#697586] text-sm font-medium leading-[150%] tracking-[-0.28px]">{row.serial}</div>
        )
    },
    {
        header: "Document Type", accessor: "label",
        cell: (row) => (
            <div className="self-stretch text-[#161618] text-sm font-medium leading-[150%] tracking-[-0.28px]">{row.label}</div>
        )
    },
    {
        header: "Status",
        cell: (row) => (
            <div className="flex ">
                    <span className={`flex justify-center items-center gap-2.5 ${row.status === "ACTIVE" ? "bg-[#1A9844]" : "bg-[#D92D20]"} px-4 py-2 rounded-lg text-white text-sm font-medium leading-[120%]`}>
                        {row.status === "ACTIVE" ? "ACTIVE" : "INACTIVE"}
                    </span>
            </div>
        ),
    },
    { header: "Type", accessor: "type" },
    { header: "File Name", accessor: "fileName" },
    {
        header: "Action",
        cell: (row) => (


            <Button onClick={() => handleView(row)} size="icon" className="flex  justify-center items-center gap-2 border border-[#DFE1E7] [background:#F6F8FA] px-4 py-2  border-solid">
                <ActionIcons.View className="w-6 h-6 text-[#697586]" />

            </Button>
        ),
    },
];


// Dummy data
const data: DocumentItem[] = [
    {
        serial: "834759",
        type: "BUSINESS_LICENSE",
        label: "Business License",
        fileName: "business_license.pdf",
        fileUrl: "",
        status: "ACTIVE",
    },
    {
        serial: "834758",
        type: "BUSINESS_LICENSE",
        label: "Business License",
        fileName: "business_license_2.pdf",
        fileUrl: "",
        status: "INACTIVE",
    },
];


// badge




// 3. Usage in your Page
export default function DocumentInfoTable() {
    const [view, setView] = useState<DocumentItem | null>(null);
    const [sortBy, setSortBy] = useState("newest");

    const handleView = (document: DocumentItem) => {
        setView(document);
    };

    return (
        <div className="">
            <div className="border-x border-t rounded-t-2xl rounded-b-none bg-white p-6">
                <div className="flex justify-between items-center self-stretch w-full">
                    <h2 className="section-title">Document Information</h2>
                    <div className="flex items-center gap-2">
                        <label className="text-[#697586] text-sm font-normal leading-[160%]">Sort by:</label>
                        <GenericDropDown
                            options={[
                                { label: "Newest First", value: "newest" },
                                { label: "Oldest First", value: "oldest" },
                            ]}
                            value={sortBy}
                            onValueChange={(value) => setSortBy(value.toString())}
                            variant="light"
                            size="sm"
                            radius="sm"
                        />
                    </div>
                </div>
            </div>
            <DataTable columns={getColumns(handleView)} data={data} emptyMessage="No documents found." />


            <CustomModal
                open={view !== null}
                onOpenChange={() => setView(null)}
                size="lg"
                // title="Document View"
                closeButtonType="shadcn"
                closeButtonProps={{
                    onClick: () => {
                        setView(null);
                        console.log("close button clicked");
                    },

                }}
                className="p-0"
                showCloseButton={false}
            >
                <ViewDoc document={view!} onClose={() => setView(null)} />
            </CustomModal>
        </div >
    );
}



