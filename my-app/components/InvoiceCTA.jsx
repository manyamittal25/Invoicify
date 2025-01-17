import InvoiceImage from "../public/images/invoice-template.jpg";
import ThemeLink from "./ThemeLink";

function InvoiceCTA() {
  return (
    <div className="invoice-cta flex items-center justify-center">
      <div className="py-24 px-16 bg-white shadow-2xl rounded-md flex flex-col items-center">
        <ThemeLink
          className="bg-rose-600 hover:bg-rose-700 focus:ring-rose-300"
          title="Create your first Invoice"
          href="/invoice/new"
        />
      </div>
    </div>
  );
}

export default InvoiceCTA;
