import { Inter } from "next/font/google";
import "../styles/main.scss";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {Toaster} from 'react-hot-toast';
import AuthProvider from "@/context/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"
    suppressHydrationWarning>
      <body className={inter.className}>
        <AuthProvider>
        <Toaster
        position="top-right"
        reverseOrder={false}
         />
        <Navbar />
        <div className="mt-16">{children}</div>

        <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}