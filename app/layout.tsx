import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("https://localhost:3000"),

	title: 'Hassaan Muhammad',
	authors: {
		name: "Hassaan Muhammad",
	},

	description:
		"Based in Karachi, I'm a Frontend Developer passionate about building a modren web application that users love.",
	openGraph: {
		title: "Hassaan's Portfolio",
		description:
			"Based in Karachi, I'm a Frontend Developer passionate about building a modren web application that users love.",
		url: "https://localhost:3000",
		siteName: "Hassaan's Portfolio",
		images: "/og.png",
		type: "website",
	},
	keywords: ["Portfolio", "Hassaan's Portfolio", "HassaanMuhammad"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
