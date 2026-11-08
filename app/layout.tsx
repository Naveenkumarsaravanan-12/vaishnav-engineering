import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollProgressBar from "@/components/motion/ScrollProgressBar";
import { ThemeProvider } from "next-themes";

export const metadata = {
  metadataBase: new URL("https://www.vaishnavengineering2009.com"),
  title: "Vaishnav Engineering | Structural Steel & Railway Bridge Fabrication",
  description: "RDSO Approved Category-A Vendor specializing in heavy composite plate girder fabrication, railway infrastructure, and structural steel engineering.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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
