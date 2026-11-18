import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';

// Brand fonts, self-hosted from the same files the static site uses.
const oswald = localFont({
  src: '../public/assets/fonts/oswald.woff2',
  weight: '200 700',
  variable: '--font-oswald',
  display: 'swap',
});

const publicSans = localFont({
  src: '../public/assets/fonts/public-sans.woff2',
  weight: '100 900',
  variable: '--font-public-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

const description =
  "The app for BJJ gyms: confirmed check-ins, the class schedule, belt and stripe tracking, promotions and waivers, branded with your gym's name, logo and colors.";

export const metadata: Metadata = {
  metadataBase: new URL('https://bjj-us.com'),
  title: 'BJJ Gym App and Jiu-Jitsu Gym Software | BJJ-US',
  description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'BJJ-US',
    url: '/',
    title: 'BJJ-US — The app for your jiu-jitsu gym',
    description:
      'Confirmed check-ins, schedule, belt progress, promotions and waivers, branded for your gym.',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export const viewport: Viewport = {
  themeColor: '#0E0E11',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`dark ${oswald.variable} ${publicSans.variable} ${jetbrainsMono.variable}`}
    >
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[#0E0E11] text-zinc-100 antialiased selection:bg-[#E63946]/30 selection:text-white"
      >
        {children}
      </body>
    </html>
  );
}
