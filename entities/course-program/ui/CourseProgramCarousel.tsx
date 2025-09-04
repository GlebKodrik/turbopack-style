import { SwiperOptions } from 'swiper/types';

import { CarouselSwiper } from '@/shared/ui/carousel-swiper';

import { ExpertCard } from './ExpertCard';

type CourseProgramCarouselProps = {
  mentors: Array<any>;
};

const defaultBreakpoints: SwiperOptions['breakpoints'] = {
  1024: {
    slidesPerView: 2,
    spaceBetween: 16,
  },
  320: {
    slidesPerView: 1.1,
    spaceBetween: 12,
  },
};

export const CourseProgramCarousel = ({
  mentors,
}: CourseProgramCarouselProps) => {
  return (
    <CarouselSwiper
      title="Эксперты курса"
      withControls={mentors?.length > 2}
      withOverflowOnMobile
      breakpoints={defaultBreakpoints}
      slides={mentors.map((expert, index) => {
        return (
          <ExpertCard
            key={index}
            image={expert.photo_absolute || expert.photo}
            name={expert.name}
            description={expert.description}
          />
        );
      })}
    />
  );
};
