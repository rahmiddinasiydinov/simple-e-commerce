import Head from "next/head";
import localFont from "next/font/local";
import "../styles/style.scss";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";

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

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Test Project</title>
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <main>
          <nav className="navbar">
            <Navbar />
          </nav>
          <div className="contents">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
