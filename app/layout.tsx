import "./globals.css";
import Head from "next/head";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log("rendering RootLayout");
  return (
    <html lang='en'>
      <Head>
        <title>Learn Nested Layouts</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <body>{children}</body>
    </html>
  );
}
