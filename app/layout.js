import { Providers } from './providers';

export const metadata = {
  title: 'KK HomePage',
  description: "Let's Kook",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      {/* <body> */}
      <body suppressHydrationWarning={true}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
