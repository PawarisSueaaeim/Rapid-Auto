import type { Metadata } from "next";
import "./globals.css";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import ReduxProvider from "@/components/redux/ReduxProvider";

export const metadata: Metadata = {
	icons: {
		icon: "/icons/rapid-icon.png",
    	apple: "/icons/rapid-icon.png"
	},
    title: "Rapid Showroom",
    description: "ซื้อขายรถมือสอง",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="flex flex-col justify-between min-h-screen">
                <ReduxProvider>
                    <div className="fixed top-0 w-full z-[999]">
                        <Header/>
                    </div>
                    {children}
                    <Footer/>
                </ReduxProvider>
            </body>
        </html>
    );
}
