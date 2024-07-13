import { NextResponse } from "next/server";
import db from "../../../libs/db";

export async function GET(request, { params: { id } }) {
  try {
    const invoice = await prisma.invoice.findUnique({
      where: {
        id:id,
      },
      include :{
        tableData:true,
      }
    });

    console.log(invoice);

    return NextResponse.json(invoice);
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
