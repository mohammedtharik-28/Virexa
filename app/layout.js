import {
    Baumans,
    Poppins,
    Inter,
    Figtree
} from "next/font/google";

import "./globals.css";

const baumans = Baumans({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-baumans",
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-poppins",
});

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-inter",
});

const figtree = Figtree({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-figtree",
});

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`
                    ${baumans.variable}
                    ${poppins.variable}
                    ${inter.variable}
                    ${figtree.variable}
                `}
            >
                {children}
            </body>
        </html>
    );
}