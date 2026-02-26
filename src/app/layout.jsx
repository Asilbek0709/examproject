import { Work_Sans } from "next/font/google";
import "./globals.css";

const WorkSans = Work_Sans({
  variable: "--font-geist-sans",  
  subsets: ["latin"],
});


export const metadata = {
  title: "Oneflow",
  description: "work wonders",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${WorkSans.className}`}>
        {children}
      </body>
    </html>
  );
}
