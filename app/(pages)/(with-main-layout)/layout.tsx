import '../../globals.scss';

import { ReactNode } from 'react';

export default async function MainLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <>{children}</>;
}
