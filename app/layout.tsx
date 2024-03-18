import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './ui/header';
import Footer from './ui/footer';

const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'Fitbod Workouts',
  description: 'Fitbod workouts app',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="min-h-full flex flex-col">
      <body className={`${inter.className} flex grow flex-col text-[14px]`}>
        <Header />

        <main className="grow bg-gradient-to-b from-fill-gradient-start to-fill-gradient-end to-[125%]">
          <div className="tablet:max-w-[722px] tablet:m-auto px-8 tablet:px-2 desktop:px-8">
            {children}
          </div>
        </main>

        <Footer />
      </body>
    </html>
  );
}
