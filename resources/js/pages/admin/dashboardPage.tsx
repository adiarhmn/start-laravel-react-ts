import AdminLayout from '@/components/layouts/admin-layout';
import { SectionCards } from '@/components/section-cards';
import { Head } from '@inertiajs/react';

// import data from './data-dummy/dashboard.json';

export default function DashboardPage() {
    return (
        <>
            <Head title="Dashboard - Boilerplate"></Head>
            <AdminLayout>
                <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                    <SectionCards />
                    <div className="px-4 lg:px-6">{/* <ChartAreaInteractive /> */}</div>
                    {/* <DataTable data={data} /> */}
                </div>
            </AdminLayout>
        </>
    );
}
