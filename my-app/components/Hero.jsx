import React from "react";
import ThemeLink from "./ThemeLink";
import invoiceImage from "../public/images/demo.webp";
import Image from "next/image";
import { AiOutlineArrowDown } from 'react-icons/ai';

function Hero() {
  return (
    <div className=" bg-violet-700 grid grid-cols-1 md:grid-cols-2 md:py-16 px-4 md:px-16 text-slate-50 items-center gap-3">
      <div className="flex flex-col space-y-8 items-start">
        <h2 className="text-3xl md:text-4xl font-bold">
          Free Invoice Generator-Invoice Maker
        </h2>
        <p className="md:text-xl">
          Create, Manage, and Track, Recurring Invoices. Download as <br /> PDF,
          Email and Print Invoices.
        </p>
        <ThemeLink
  className="bg-rose-600 hover:bg-rose-700 focus:ring-rose-300"
  title="Create your first Invoice"
  href="/invoice/new"
  icon={AiOutlineArrowDown}
/>
      </div>
      <div className="">
        <Image src={invoiceImage} alt="Invoice Image" />
      </div>
    </div>
  );
}

export default Hero;
