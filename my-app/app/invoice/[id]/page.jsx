
import React from 'react'
import FormPreview from '@/components/FormPreview';
import { getInvoiceById } from '@/app/libs/getInvoiceById';
import ActionsButtons from '@/components/ActionsButtons';


async function Invoicepage({params:{id}}) {

  const invoice = await getInvoiceById(id); 
  //console.log(invoice);
  return (
    <div className='my-8'>
        <div className=''>
          <ActionsButtons invoiceId={invoice.id}/>
        </div>

        <FormPreview  data={invoice} />
    </div>
  )
}

export default Invoicepage;