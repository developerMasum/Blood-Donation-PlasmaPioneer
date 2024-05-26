import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Providers from "@/Providers/Provider";
import { Toaster } from "sonner";
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Plasma Pioneers",
  description: " Pioneers of Plasma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          {/* mx-auto px-2 md:lg:px-12 */}
          <div className="px-1 mx-auto">{children}</div>
          <Toaster />
        </body>
      </html>
    </Providers>
  );
}
