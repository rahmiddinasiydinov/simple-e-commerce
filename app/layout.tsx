"use client"
import localFont from "next/font/local";
import "../styles/style.scss";
import { ModalStatusProvider } from "../context/modal";
import { CategoriesProvider } from "../context/categories";
import { ProductsProvider } from "../context/product";
import { CartProvider } from "../context/cart";
import { EditDataProvider } from "../context/editData";
import { MenuStatusProvider } from "../context/menu";
// import Navbar from "@/components/Navbar/Navbar";
// import Modal from "@/components/Modal/Modal";
// import Header from "@/components/Header/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});



export default function RootLayout({ children }:Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        
        <ModalStatusProvider>
          <CategoriesProvider>
            <ProductsProvider>
              <CartProvider>
                <EditDataProvider>
                <MenuStatusProvider>
                  {/* <Modal /> */}
                  {/* <Header /> */}
                  <main>
                    <nav className="navbar">
                      {/* <Navbar /> */}
                    </nav>
                    <div className="contents">
                      {children}
                    </div>
                  </main>
                  </MenuStatusProvider>
                </EditDataProvider>
              </CartProvider>
            </ProductsProvider>
          </CategoriesProvider>
        </ModalStatusProvider>
      </body>
    </html>
  );
}
