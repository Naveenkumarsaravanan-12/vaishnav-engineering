import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollProgressBar from "@/components/motion/ScrollProgressBar";
import { ThemeProvider } from "next-themes";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Vaishnav Engineering | Structural Steel & Railway Bridge Fabrication",
  description: "RDSO Approved Category-A Vendor specializing in heavy composite plate girder fabrication, railway infrastructure, and structural steel engineering.",
  icons: {
    icon: "/logo/logo.jpeg",
    shortcut: "/logo/logo.jpeg",
    apple: "/logo/logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={manrope.variable} suppressHydrationWarning>
      <body className="bg-[#F5F3EE] text-[#20262D] font-sans antialiased selection:bg-[#C6A66B] selection:text-[#101820]">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <ScrollProgressBar />
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
