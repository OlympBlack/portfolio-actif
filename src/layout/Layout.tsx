import { type ReactNode } from 'react';
import { Navbar } from '../components/Navbar';
import { MobileNav } from '../components/MobileNav';
import { Footer } from '../components/Footer';

interface LayoutProps {
    children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="min-h-screen text-foreground relative">
            <div className="fixed inset-0 z-0 bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] hidden dark:block"></div>
            <div className="fixed inset-0 z-0 bg-white dark:hidden block">
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
            </div>

            <div className="relative z-10 flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow pt-[80px]">
                    {children}
                </main>
                <Footer />
                <MobileNav />
            </div>
        </div>
    );
};
