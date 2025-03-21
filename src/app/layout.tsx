import localFont from 'next/font/local';
import './globals.css';
import Providers from './providers';

const pretendard = localFont({
  src: '../fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '100 900',
  variable: '--font-pretendard'
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${pretendard.variable} font-pretendard`}>
        <Providers>
          <main className="max-w-3xl p-10 m-auto">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
