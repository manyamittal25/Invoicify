import React from "react";
import ThemeLink from "@/components/ThemeLink";
import { getInvoices } from "./../libs/getInvoices";
import { authOptions } from "../libs/authOptions";
import { getServerSession } from "next-auth";

async function Page() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return (
      <div className="gap-8 flex items-center h-screen justify-center flex-col">
        <h2 className="md:text-4xl text-2xl">
          Please Login first to be able to create an Invoice
        </h2>
        <ThemeLink
          className="bg-rose-600 hover:bg-rose-700 focus:ring-rose-300"
          title="Click here to Login to your Account"
          href="/login"
        />
      </div>
    );
  }

  const userId = session?.user?.email;
  const invoices = await getInvoices(userId);
  //console.log(invoices);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded- container mx-auto max-w-5xl mt-16">
      <div className="flex px-8 py-8 justify-between items-center">
        <h2 className="text-3xl text-purple-700">
          Your Invoices ({Array.isArray(invoices) ? invoices.length : 0})
        </h2>
        <ThemeLink
          className="bg-rose-600 hover:bg-rose-700 focus:ring-rose-300"
          title="Create Invoice"
          href="/invoice/new"
        />
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Invoice Id
            </th>
            <th scope="col" className="px-6 py-3">
              Invoice Name
            </th>
            <th scope="col" className="px-6 py-3">
              Invoice Date
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">View Invoice</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(invoices) && invoices.length > 0 ? (
            invoices.map((invoice) => {
              const options = {
                year: "numeric",
                month: "long",
                day: "numeric",
              };
              const invoiceDate = new Date(
                invoice.invoiceDate
              ).toLocaleDateString(undefined, options);
              return (
                <tr
                  key={invoice.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {invoice.id}
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {invoice.userId}
                  </th>
                  <td className="px-6 py-4">{invoice.clientCompany}</td>
                  <td className="px-6 py-4">{invoiceDate}</td>
                  <td className="px-6 py-4 text-right">
                    <a
                      href={`/invoice/${invoice.id}`}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      View Invoice
                    </a>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="4" className="px-6 py-4 text-center">
                No invoices found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Page;
