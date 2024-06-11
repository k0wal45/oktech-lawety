import { Outfit } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer';
import { GoogleAnalytics } from '@next/third-parties/google';

const lato = Outfit({
  subsets: ['latin'],
  style: 'normal',
});

export const metadata = {
  title: 'Wynajem Autolawety - Szybko, Bezpiecznie i Tanio | Oktech',
  description:
    'Oferujemy wynajem autolawety 24/7. Szybka, bezpieczna i przystępna usługa wynajmu autolawety. Skontaktuj się z nami już dziś!',
  keywords:
    'wynajem autolawety, autolaweta, wynajem lawety, laweta, transport pojazdów, pomoc drogowa, holowanie pojazdów',
  author: 'Lunaris Web - Strony Internetowe',
  openGraph: {
    type: 'website',
    url: 'https://autolaweta24.com.pl/',
    title: 'Wynajem Autolawety - Szybko, Bezpiecznie i Tanio | Oktech',
    description:
      'Oferujemy wynajem autolawety 24/7. Szybka, bezpieczna i przystępna usługa wynajmu autolawety. Skontaktuj się z nami już dziś!',
    images: [
      {
        url: 'https://autolaweta24.com.pl/_next/image?url=%2Fimg%2Flogo.png&w=96&q=75',
        width: 800,
        height: 600,
        alt: 'Autolaweta Katowice',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    url: 'https://autolaweta24.com.pl/',
    title: 'Wynajem Autolawety - Szybko, Bezpiecznie i Tanio | Oktech',
    description:
      'Oferujemy wynajem autolawety 24/7. Szybka, bezpieczna i przystępna usługa wynajmu autolawety. Skontaktuj się z nami już dziś!',
    image: 'https://autolaweta24.com.pl/_next/image?url=%2Fimg%2Flogo.png&w=96&q=75',
  },
  canonical: 'https://autolaweta24.com.pl/',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl-pl">
      <body className={lato.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-BDL4RL654T" />
    </html>
  );
}
