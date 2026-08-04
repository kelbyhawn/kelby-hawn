import { GoogleAnalytics } from "@next/third-parties/google";
import { Bitter } from "next/font/google";
import { Open_Sans } from "next/font/google";
import "../src/styles/reset.css";
import "../src/styles/App.sass";

const bitter = Bitter({
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const openSans = Open_Sans({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Kelby Hawn | Frontend Software Engineer",
  description: "Hi, I'm a frontend software engineer.",
  openGraph: {
    title: "Kelby Hawn | Frontend Software Engineer",
    description: "Hi, I'm a frontend software engineer.",
    url: "https://kelbyhawn.com",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${bitter.className} ${openSans.className}`}>
        <div id="root">{children}</div>
        <GoogleAnalytics gaId="G-LJJSC5D10S" />
      </body>
    </html>
  );
}
