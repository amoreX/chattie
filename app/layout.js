

export const metadata = {
  title: "Chattie",
  description: "A better chat app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
