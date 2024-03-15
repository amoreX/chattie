import Providers from "./providers";

export const metadata = {
  title: "Chattie",
  description: "A better chat app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
				<Providers>{children}</Providers>
			</body>
    </html>
  );
}
