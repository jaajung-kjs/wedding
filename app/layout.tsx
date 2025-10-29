import type { Metadata, Viewport } from 'next';
import './globals.css';
import { WEDDING_INFO } from '@/lib/constants';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://wedding-xi-ruby.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${WEDDING_INFO.groom.name} ♥ ${WEDDING_INFO.bride.name} 결혼합니다`,
  description: '2026년 2월 1일 일요일 오후 12시 30분 | 브라이드밸리 | 저희 두 사람의 소중한 날에 초대합니다',
  openGraph: {
    title: `${WEDDING_INFO.groom.name} ♥ ${WEDDING_INFO.bride.name} 결혼합니다`,
    description: '2026년 2월 1일 일요일 오후 12시 30분 | 브라이드밸리',
    images: [
      {
        url: `${siteUrl}/images/og-image.jpg?v=3`,
        width: 1200,
        height: 630,
        alt: '김준성 ♥ 김여진 결혼합니다',
        type: 'image/jpeg',
      }
    ],
    locale: 'ko_KR',
    type: 'website',
    url: siteUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${WEDDING_INFO.groom.name} ♥ ${WEDDING_INFO.bride.name} 결혼합니다`,
    description: '2026년 2월 1일 일요일 오후 12시 30분 | 브라이드밸리',
    images: [`${siteUrl}/images/og-image.jpg?v=3`],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&family=Great+Vibes&family=Nanum+Pen+Script&family=Playfair+Display:wght@400;500;600;700&family=Nanum+Myeongjo:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
