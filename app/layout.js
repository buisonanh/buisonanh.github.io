import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bui Son Anh | Portfolio",
  description: "Personal portfolio showcasing research, work experience, and news.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased relative w-full min-h-screen overflow-auto`}>
        
        {/* 🔹 Background Container (Fixed for All Pages) */}
        <div className="fixed top-0 left-0 w-full h-full -z-10">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/background.png')" }}
          />
        </div>



        {/* 🔹 Dark Overlay for Readability */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 -z-10"></div>

        {/* 🔹 Navbar (Fixed at Top) */}
        <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-0 text-white p-4 flex justify-center gap-10 shadow-md backdrop-blur-md z-50">
          <Link href="/" className="hover:text-gray-400"><b>About Me</b></Link>
          <Link href="/research" className="hover:text-gray-400"><b>Research</b></Link>
          <Link href="/work-experience" className="hover:text-gray-400"><b>Work Experience</b></Link>
          <Link href="/news" className="hover:text-gray-400"><b>News</b></Link>
        </nav>

        {/* 🔹 Page Content */}
        <main className="relative flex flex-col min-h-screen justify-start items-center px-8 py-20">
          {children}
        </main>

        {/* 🔹 Sticky Footer */}
        <footer className="absolute bottom-0 w-full bg-black bg-opacity-0 text-white p-4 text-center">
          <p>© {new Date().getFullYear()} Bui Son Anh</p>
        </footer>

      </body>
    </html>
  );
}
