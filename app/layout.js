import "./globals.css";

export const metadata = {
  title: "Car Store",
  description: "Gonna crazy great cars",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
