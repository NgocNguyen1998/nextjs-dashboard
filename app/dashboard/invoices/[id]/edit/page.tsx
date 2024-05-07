import { fetchInvoiceById, fetchCustomers } from '@/app/lib/data';
import { updateInvoice } from '@/app/lib/actions';
import { notFound } from 'next/navigation';
import { Metadata } from "next";
import EditInvoiceForm from '../../../../ui/invoices/edit-form'

export const metadata: Metadata = {
  title: 'Edit',
};
export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ]);

  if (!invoice) {
    notFound();
  }

  return (
    <div>
      <EditInvoiceForm invoice={invoice} customers={customers}/>
    </div>
  )
}