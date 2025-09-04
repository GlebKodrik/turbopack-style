import { Metadata } from 'next';

import { META_DEFAULT_VALUE } from '@/shared/lib/constants/meta-default-values';

import { icons } from './icons';

export const META_DATA_OTHER: Metadata = {
  icons: {
    icon: icons,
  },
  title: {
    default: META_DEFAULT_VALUE.TITLE,
    template: 'PRO Wildberries — %s',
  },
  description: META_DEFAULT_VALUE.DESCRIPTION,
  keywords: [
    'центр развития бизнеса',
    'курсы wb',
    'курс быстрый старт с wildberries',
    'поддержка предпринимателей',
    'развитие бизнеса',
    'бизнес курс',
    'бизнес тренинги',
    'обучение бизнесу',
    'онлайн курс вайлдберриз',
    'консультации для предпринимателей',
    'финансирование бизнеса',
    'маркетинг для предпринимателей',
    'управление бизнесом',
    'открытие бизнеса',
    'бизнес семинары',
    'бизнес-консультант',
    'бизнес-помощь',
    'бизнес наставник',
    'как продавать на wildberries',
    'курс по маркетплейсам wildberries',
    'обучение маркетплейс wildberries',
  ],
  verification: {
    yandex: '61b95d33285e2612',
    google: 'guMau7oNvBifqUhZGuuGVtiGD0HkKe8v6uwYpvj2ZIg',
  },
  alternates: {
    canonical: '/',
    languages: {
      'ru-RU': '/',
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
};
