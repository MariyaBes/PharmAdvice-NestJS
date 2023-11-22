import './assets/style/globals.css';
import React, { ReactNode } from 'react'
import { Prompt } from 'next/font/google';
import Navbar from './component/navbar/Navbar';
import Footer from './component/footer/Footer';
import { Metadata } from 'next';

const prompt = Prompt({
  weight: ['500', '600', '700'],
  subsets: ['latin'],
});

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: 'PharmAdvice',
  description: 'Онлайн-консультация',
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
    <body className={prompt.className}>
    <Navbar />
    <main>{children}</main>
    <Footer />
    </body>
    </html>
  );
}

export default RootLayout;
