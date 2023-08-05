import "./globals.css";
import { Roboto_Condensed } from "next/font/google";
import Navbar from "./components/Navbar";

const roboto_condensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata = {
  title: "Roarables",
  description: "A cookie company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto_condensed.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
