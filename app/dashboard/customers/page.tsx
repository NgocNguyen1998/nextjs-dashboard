import { Metadata } from "next";
import Table from '../../ui/customers/table'
import { Suspense } from 'react';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';

export const metadata: Metadata = {
    title: 'Customer',
};
export default async function Page({
    searchParams,
}: {
    searchParams?: {
        query?: string;
        page?: string;
    };
}) {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    
    return <div className="w-full">
        <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
            <Table query={query} currentPage={currentPage} />
        </Suspense>

    </div>
}