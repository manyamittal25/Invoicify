import React from "react";
import ReactDOMServer from "react-dom/server";
import EmailTemplate from "@/components/email-template";

export function renderEmailTemplate(invoiceUrl) {
  return ReactDOMServer.renderToString(<EmailTemplate invoiceUrl={invoiceUrl} />);
}
