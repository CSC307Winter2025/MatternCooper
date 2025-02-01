import HomeButton from "@/components/homeButton";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Cooper Mattern's Resume",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex justify-center w-full bg-gray-500 p-4">
          <span className="text-2xl font-bold">Cooper Mattern</span>
        </div>

        <div className="flex bg-gray-100 p-2">
          <div className="flex-1 flex justify-start pl-5">cnamatten@gmail.com</div>
          <div className="flex-1 flex justify-center">github.com/bobjoe400</div>
          <div className="flex-1 flex justify-end pr-5">425-419-6866</div>
        </div>
        <HomeButton/>
        {children}
      </body>
    </html>
  );
}
