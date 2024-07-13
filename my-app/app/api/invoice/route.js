import { NextResponse } from "next/server";
import db from "../../libs/db";

export async function POST(request) {
  try {
    const { invoiceData, tableData } = await request.json();
    console.log(invoiceData, tableData);

    // Create Invoice using the invoice data
    console.log(invoiceData.userId);
    const invoice = await db.invoice.create({
      data: {
        userId: invoiceData.userId,
        companyName: invoiceData.companyName,
        invoiceAuthor: invoiceData.invoiceAuthor,
        companyAddress: invoiceData.companyAddress,
        companyCity: invoiceData.companyCity,
        companyCountry: invoiceData.companyCountry,
        clientCompany: invoiceData.clientCompany,
        clientAddress: invoiceData.clientAddress,
        clientCity: invoiceData.clientCity,
        clientCountry: invoiceData.clientCountry,
        invoiceNumber: invoiceData.invoiceNumber,
        invoiceDate: new Date(invoiceData.invoiceDate),
        invoiceDueDate: new Date(invoiceData.invoiceDueDate),
        notes: invoiceData.notes,
        terms: invoiceData.terms,
        logoUrl: invoiceData.logoUrl,
      },
    });

    // Create the table using the table data
    const rowsPromise = tableData.map(async (rowData) => {
      const row = await db.row.create({
        data: {
          invoiceId: invoice.id,
          itemDescription: rowData.itemDescription,
          qty: parseInt(rowData.qty),
          unitPrice: parseFloat(rowData.unitPrice),
          tax: parseFloat(rowData.tax),
          amount: parseFloat(rowData.amount),
        },
      });
      return row;
    });

    const rows = await Promise.all(rowsPromise);

    const data = {
      invoice,
      rows,
    };
    console.log(invoice);

    return NextResponse.json(invoiceData);
  } catch (error) {
    console.error("Error in POST request:", error);
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function GET(request, { searchParams }) {
  try {
    const userId = request.nextUrl.searchParams.get("userId");
    console.log(`The userId is ${userId}`);
    const invoices = await db.invoice.findMany({
      include: {
        tableData: true,
      },
      where: {
        userId,
      },
    });
    //console.log(invoices);

    return NextResponse.json(invoices);
  } catch (error) {
    console.error("Error in GET request:", error);
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 500 }
    );
  }
}
