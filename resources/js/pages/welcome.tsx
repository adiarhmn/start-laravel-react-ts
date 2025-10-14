import { Switch } from '@/components/ui/switch';
import { Head } from '@inertiajs/react';

export default function Welcome() {
    return (
        <>
            <Head title="Boilerplate - by Adi Aulia Rahman">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <section className='min-h-screen'>
                Selamat Datang di BTS Academy
                <Switch />
                Test
            </section>
            <footer>
                &copy; 2024 - Adi Aulia Rahman
            </footer>

        </>
    );
}
