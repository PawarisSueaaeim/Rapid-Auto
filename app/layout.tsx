import type { Metadata } from "next";
import "./globals.css";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";

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
				<Header/>
				{children}
				<Footer/>
            </body>
        </html>
    );
}
