import { Inter } from "next/font/google";
import { Toaster } from 'react-hot-toast';
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "QuizzMaster",
  description: "Battle with your friends to boast your knowledge, quizzes related to all topics",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-[110rem] mx-auto">
          <Navbar />
        {children}
        <Toaster
        position="bottom-right"
        />
        </div>
        </body>
    </html>
  );
}
