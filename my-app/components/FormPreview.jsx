'use client';
import React from "react";
import Image from "next/image";
import PreviewTable from "./PreviewTable";
import { CldImage } from "next-cloudinary";

function FormPreview({ data }) {
  const {
    companyName,
    invoiceAuthor,
    companyAddress,
    companyCity,
    companyCountry,
    clientCompany,
    clientAddress,
    clientCity,
    clientCountry,
    invoiceNumber,
    invoiceDate,
    invoiceDueDate,
    terms,
    notes,
    logoUrl,
    tableData,
  } = data;
  const options = { year: "numeric", month: "long", day: "numeric" };
  const newInvoiceDate = new Date(invoiceDate).toLocaleDateString(
    undefined,
    options
  );
  const newInvoiceDueDate = new Date(invoiceDueDate).toLocaleDateString(
    undefined,
    options
  );

  

  return (
    <div className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 mx-auto">
      {/* image & invoice label */}
      <div className="flex justify-between items-center">
        <div className="flex items-center justify-center">
          {logoUrl && (
            <CldImage width="120" height="120" src={logoUrl} alt="Invoice Logo" />
          )}
        </div>
        <h2 className="text-4xl uppercase font-semibold">Invoice</h2>
      </div>
      {/* company details */}
      <div className="flex flex-col w-1/2 mt-6">
        <div className="flex">
          <p className="font-bold text-base">Company Name: &nbsp;</p>
          <p className="text-base">{companyName}</p>
        </div>

        <div className="flex">
          <p className="font-bold text-base">Your Name: &nbsp;</p>
          <p className="text-base">{invoiceAuthor}</p>
        </div>

        <div className="flex">
          <p className="font-bold text-base">Company Address: &nbsp;</p>
          <p className="text-base">{companyAddress}</p>
        </div>
        <div className="flex">
          <p className="font-bold text-base">Company City: &nbsp;</p>
          <p className="text-base">{companyCity}</p>
        </div>
        <div className="flex">
          <p className="font-bold text-base">Company Country: &nbsp;</p>
          <p className="text-base">{companyCountry}</p>
        </div>
      </div>
      {/* client details */}
      <div className="flex justify-between gap-4 mb-8">
        <div className="flex flex-col w-1/2 mt-6">
          <h2 className="mb-2 font-semibold">Bill To</h2>
          <div className="flex">
            <p className="font-bold text-base">Client Company: &nbsp;</p>
            <p className="text-base">{clientCompany}</p>
          </div>
          <div className="flex">
            <p className="font-bold text-base">Client Address: &nbsp;</p>
            <p className="text-base">{clientAddress}</p>
          </div>
          <div className="flex">
            <p className="font-bold text-base">Client City: &nbsp;</p>
            <p className="text-base">{clientCity}</p>
          </div>
          <div className="flex">
            <p className="font-bold text-base">Client Country: &nbsp;</p>
            <p className="text-base">{clientCountry}</p>
          </div>
        </div>
        <div className="flex flex-col w-1/2 mt-6">
          <div className="flex gap-2">
            <p className="text-slate-500 font-bold">Invoice #</p>
            <p>{invoiceNumber}</p>
          </div>

          <div className="flex gap-2">
            <p className="text-slate-500 font-bold">Invoice Date:</p>
            <p>{newInvoiceDate}</p>
          </div>

          <div className="flex gap-2">
            <p className="text-slate-500 font-bold">Invoice Due Date:</p>
            <p>{newInvoiceDueDate}</p>
          </div>
        </div>
      </div>

      {/* table */}
      <PreviewTable tableData={tableData} />

      <div className="flex flex-col w-full my-6">
            <p 
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Notes
            </p>

            <p>
              {notes}
              </p>
          </div>

          <div className="flex flex-col w-full my-6">
            <p 
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Terms and Conditions
            </p>

            <p>
              {terms}
              </p>
          </div>
          <div className="mt-12 flex justify-end">
            <h2 className="text-sm">
              Powered by{" "}
              <a className="font-bold text-pink-600"
              href="#">
                Manya Mittal
              </a>

            </h2>

          </div>

    </div>
  );
}

export default FormPreview;