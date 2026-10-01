import { Plus_Jakarta_Sans, Space_Mono } from 'next/font/google';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: 'ITZFIZZ — Creative Digital Experience',
  description: 'Where creative engineering meets emotional storytelling.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${jakarta.variable} ${spaceMono.variable} antialiased selection:bg-[#E65D3F] selection:text-white font-sans bg-[#FBF9F5]`}>
        {children}
      </body>
    </html>
  );
}
