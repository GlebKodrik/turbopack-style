import { ReactNode } from 'react';

import { AppProvider } from '@/app/_providers/AppProvider';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ru">
      <AppProvider>
        <body>{children}</body>
      </AppProvider>
    </html>
  );
}
