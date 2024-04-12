import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UIC - Место, чтобы объедениться во Христе",
  description: "Место, чтобы объедениться во Христе",
  authors: [{ name: "UIC-Team", url: "" }],
};

interface IProps {
  children: Readonly<React.ReactNode>
}

export default function RootLayout({ children }: IProps) {
  return (
    <html lang="ru">
      <body>
        
        <main>{children}</main>
      </body>
    </html>
  );
}
