import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/sections/navbar/header";
import Footer from "@/components/sections/navbar/footer";
import UserProvider from "@/context/UserProvider";
import { ToastContainer } from "react-toastify";
import PasswordProvider from "@/components/sections/resetPass/PasswordContext";
import "react-toastify/dist/ReactToastify.css";
import ReviewProvider from "@/context/ReviewProvider";

import RestaurantProvider from "@/context/RestaurantProvider";
import FavoritesProvider from "@/context/FavoritesProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
          <FavoritesProvider>
            <ReviewProvider>
              <PasswordProvider>
                <RestaurantProvider>
                  <Header />
                  {children}
                  <ToastContainer />
                  <Footer />
                </RestaurantProvider>
              </PasswordProvider>
            </ReviewProvider>
          </FavoritesProvider>
        </UserProvider>
      </body>
    </html>
  );
}
