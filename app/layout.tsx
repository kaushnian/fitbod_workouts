import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './ui/header';
import Footer from './ui/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Fitbod Workouts',
  description: 'Fitbod workouts app',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="min-h-full flex flex-col">
      <body className={`${inter.className} grow flex flex-col`}>
        <Header />

        <main className="flex-1 bg-gradient-to-b from-fill-gradient-start to-fill-gradient-end to-[125%]">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
