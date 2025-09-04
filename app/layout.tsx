import './globals.scss';

import { clsx } from 'clsx';
import { ReactNode } from 'react';

import { AppProvider } from '@/app/_providers/AppProvider';
import { hauss, montserrat, unbounded } from '@/shared/assets/fonts';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ru">
      <AppProvider>
        <body
          className={clsx(
            montserrat.variable,
            hauss.variable,
            unbounded.variable,
          )}
        >
          {children}
          <div id="portal-app" />
        </body>
      </AppProvider>
    </html>
  );
}
