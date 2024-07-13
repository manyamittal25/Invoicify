import React from "react";
import { BsCurrencyDollar, BsFillGrid1X2Fill } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import { IoDiamondSharp } from "react-icons/io5";
import { MdMarkEmailUnread } from "react-icons/md";
import { IoReloadCircle } from "react-icons/io5";
import { GoGraph } from "react-icons/go";
import { SiTicktick } from "react-icons/si";
import ThemeLink from "./ThemeLink";
function Features() {
  const features = [
    {
      icons: BsCurrencyDollar,
      title: " Easy Tax Invoice",
      description: "Create,manage,send and track tax invoices without hassle.",
    },
    {
      icons: BsFillGrid1X2Fill,
      title: " Customization of Columns",
      description:
        "Customizable invoice format to add more relevant information and columns.",
    },
    {
      icons: FaRegStar,
      title: " Brand Your Invoice",
      description:
        "Easily add the business logo and change the color of the invoice with one click. No Watermark. No Ads.",
    },
    {
      icons: IoDiamondSharp,
      title: " Invoice Templates",
      description:
        "Beautiful invoice templates to choose from. Create professional invoices in minutes.",
    },
    {
      icons: MdMarkEmailUnread,
      title: " Email & Track Invoices",
      description:
        "Send invoice via email and get to know when the invoice was opened",
    },
    {
      icons: IoReloadCircle,
      title: " Recurring Invoices",
      description:
        "Create recurring invoices and send them automatically at the specified time interval.",
    },

    {
      icons: GoGraph,
      title: "Insightful Reports",
      description:
        "Get insights on your business with reports like sales, tax, and customer reports.",
    },
    {
      icons: SiTicktick,
      title: " Easy Access Anywhere",
      description:
        "Easy to use dashboard for mobile and desktop.Get email alerts in real-time ",
    },
  ];
  return (
    <div className="bg-slate-950 py-8 md:py-16 md:px-16 px-4 text-slate-50 flex flex-col items-center gap-8">
      <h2 className="text-center text-2xl md:text-5xl font-semibold mb-12">
        {" "}
        Features of Invoice Generator
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-2 gap-8">
        {features.map((feature, i) => {
          const Icon = feature.icons;
          return (
            <div className="mb-3" key={i}>
              <div className="border-2 border-purple-400 rounded-lg py-4 w-14 h-14 flex items-center justify-center mb-3">
                <Icon className="text-3xl" />
              </div>
              <p className="mb-3 text-xl">{feature.title}</p>
              <p className="text-slate-400 text-sm">{feature.description}</p>
            </div>
          );
        })}
      </div>
      <ThemeLink
        className="bg-purple-600 hover:bg-purple-700 focus:ring-purple-300"
        title="Create Invoice for Free"
        href="/invoice/new"
      />
    </div>
  );
}

export default Features;
