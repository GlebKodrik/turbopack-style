'use client';

import 'dayjs/locale/ru';

import * as dayjs from 'dayjs';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';

import { reduxStore } from '@/shared/config/redux-store';

dayjs.locale('ru');

type AppProviderProps = {
  children: ReactNode;
};
export const AppProvider = ({ children }: AppProviderProps) => {
  return <Provider store={reduxStore}>{children}</Provider>;
};
