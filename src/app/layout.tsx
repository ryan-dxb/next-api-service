import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toast";

const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn("bg-white text-slate-900 antialiased", inter.className)}
    >
      <body className="min-h-screen bg-slate-50 dark:bg-slate-900 antialiased ">
        <Providers>
          <Navbar />
          {children}

          {/* <Toaster position="bottom-right" reverseOrder={false} /> */}
        </Providers>

        {/* Allow more height for mobile devices */}
        <div className="h-49 md:hidden" />
      </body>
    </html>
  );
}
