"use client"; // Ensure this is at the top

import React from "react";
import { Accordion } from "flowbite-react";

function AccordionFAQ() {
  const faqs = [
    {
      title: "How can I make an invoice for free?",
      description:
        "You can make an invoice for free by using our online invoice generator. It's free to use and you can create unlimited invoices without any hidden fees.",
    },
    {
      title: " Which is the best invoice generator for free?",
      description:
        "Invoicify is the best free invoice generator. It's free to use and you can create unlimited invoices without any hidden fees.You can customize your fields and columns,download your invoices as PDF, and send them to your clients via email or share it via WhatsApp or SMS.Within one click you can convert your estimates to invoices and send them to your clients. You can also track your payments and send reminders to your clients for pending payments.",
    },
    {
      title: "Is this invoice generator really free?",
      description:
        "Yes!! It is free for freelancers,agencies,small businesses and entrepreneurs.You can generate 50 documents every year.Also manage invoices and access free templates.",
    },
    {
      title: "Can I generatea PDF invoice using this invoice generator?",
      description:
        "Yes!! You can generate a PDF invoice using this invoice generator. You can download your invoices as PDF and send them to your clients via email or share it via WhatsApp or SMS.",
    }
  ];
  return (
    <Accordion>
     {
      faqs.map((faq,i)=>{
        return (
          <Accordion.Panel key={i}
          className="mb-6">
          <Accordion.Title>{faq.title}

          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-6 text-gray-500 dark:text-gray-400 ">
            {faq.description}
            </p>

          
          </Accordion.Content>
        </Accordion.Panel>
        )
      })
     }
     
    </Accordion>
  );
}

export default AccordionFAQ;
