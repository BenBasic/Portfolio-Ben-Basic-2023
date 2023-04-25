import './globals.css'
import { Dosis, Lato, Pacifico } from 'next/font/google'

export const metadata = {
  title: 'Ben Basic',
  description: 'Web Developer, Designer, Animator',
  url: 'https://benbasic.com',
  siteName: 'Ben Basic',
  alternates: {
    canonical: 'https://benbasic.com',
  },
  openGraph: {
    title: 'Ben Basic',
    description: 'Web Developer, Designer, Animator',
    url: 'https://benbasic.com',
    siteName: 'Ben Basic',
    alternates: {
      canonical: 'https://benbasic.com',
    },
    images: [
      {
        url: 'https://i.imgur.com/TKGRRjA.jpeg',
        width: 1200,
        height: 630,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    other: {
      rel: 'mask-icon',
      url: '/safari-pinned-tab.svg',
    },
  },
}

const fontHeading = Dosis({
  weight: ["800"],
  subsets: ["latin"],
  variable: "--font-heading",
});

const fontCursive = Pacifico({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-cursive",
});

const fontDescription = Lato({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-description",
});

const fontDescriptionBold = Lato({
  weight: ["900"],
  subsets: ["latin"],
  variable: "--font-description-bold",
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${fontHeading.variable} ${fontCursive.variable} ${fontDescription.variable} ${fontDescriptionBold.variable} bg-retroradcool-150 overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}
