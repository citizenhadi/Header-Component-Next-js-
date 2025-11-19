import "./globals.css";
export const metadata = {
  title: "Header Component",
  description: "The header component is now ready for use.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
