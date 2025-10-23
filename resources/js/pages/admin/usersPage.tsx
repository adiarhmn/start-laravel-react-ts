import AdminLayout from '@/components/layouts/admin-layout';
import { Head } from '@inertiajs/react';
import User from '@/types/Model/user';
// import { DataTable } from '@/components/data-table';

export default function UsersPage({ users }: { users: User[] }) {
    console.log(users);
    return (
        <>
            <Head title="Users - Boilerplate"></Head>
            <AdminLayout>
                <div className="flex flex-col gap-4 px-4 py-4 md:gap-6 md:py-6">
                    <div>
                        <h1 className="text-2xl font-semibold">Users Page</h1>
                    </div>
                </div>
                {/* <DataTable data={users} /> */}
            </AdminLayout>
        </>
    );
}
