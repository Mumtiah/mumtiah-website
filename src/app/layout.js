import { Providers } from "./providers";
import { Navbar } from "./components/navigation/Navbar";
import { Footer } from "./components/footer/Footer";

export const metadata = {
  title: "Mumtiah",
  description: "Mumtiah Madrasah",
  icons: {
    icon: "/images/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}