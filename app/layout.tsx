import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { ThemeProvider } from "next-themes"; // You'll need to install this

export const metadata = {
  title: "Vaishnav Engineering Pvt Ltd",
  description: "RDSO Certified Company specializing in Electrical, Mechanical, Engineering Services",
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
    // suppressHydrationWarning is required for next-themes
    <html lang="en" suppressHydrationWarning>
      <body className="bg-slate-50 text-slate-900 dark:bg-[#111111] dark:text-white transition-colors duration-300">
        
        {/* Wrapping children in ThemeProvider enables the 'dark:' prefix in all components */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          
          <Navbar />

          {/* Offset for fixed navbar */}
          <main className="pt-[75px] min-h-screen">
            {children}
          </main>

          <Footer />
          
        </ThemeProvider>
      </body>
    </html>
  );
}
