import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
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
                {children}
            </body>
        </html>
    );
}
