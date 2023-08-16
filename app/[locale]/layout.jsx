import { useLocale } from 'next-intl';

import '@/styles/global.css';

export const metadata = {
  title: 'Astrobale Expeditions - Data platform',
  description: 'Platform from the Astrobale Expeditions sensor',
};

function RootLayout({ children }) {
  const locale = useLocale();

  return (
    <html lang={locale}>
      <body className="flex">
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
