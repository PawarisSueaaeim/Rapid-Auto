import type { Metadata } from "next";
import "./globals.css";
import Header from "@/layout/Header";

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
            <body>
				<Header/>
                {children}
            </body>
        </html>
    );
}
