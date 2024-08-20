import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./style.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Wave note",
    description: "Wave note",
};

/**
 * root layout
 * @returns
 */
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
            <body className={inter.className}>
                <div className="relative w-full max-w-[768px] min-h-screen bg-background">{children}</div>
            </body>
        </html>
    );
}
