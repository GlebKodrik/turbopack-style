import { ReactNode } from 'react';

type BasePageLayoutProps = {
  children: ReactNode;
};

export const PageLayout = ({ children }: BasePageLayoutProps) => {
  return <>{children}</>;
};
