import { clsx } from 'clsx';

import { transformUrl } from '@/shared/lib/transformUrl';
import { Card } from '@/shared/ui/card';
import { CustomImage } from '@/shared/ui/custom-image';
import { Heading, Paragraph } from '@/shared/ui/redesign';

import styles from './ExpertCard.module.scss';

type ExpertCardProps = {
  name: string;
  description: string;
  image: string;
  className?: string;
};

export const ExpertCard = ({
  name,
  description,
  image,
  className,
}: ExpertCardProps) => {
  const [lastName, firstName] = name.split(' ');

  return (
    <Card className={clsx(styles.card, className)}>
      <div className={styles.imageContainer}>
        <CustomImage
          src={transformUrl(image)}
          alt={name}
          fill
          className={styles.image}
        />
      </div>

      <div className={styles.about}>
        <div className={styles.infoHiddenMobile}>
          <Heading
            variant="h5"
            className={styles.name}
          >
            {lastName}
          </Heading>
          <Heading
            variant="h5"
            className={styles.name}
          >
            {firstName}
          </Heading>
        </div>
        <Heading
          variant="h5"
          className={clsx(styles.name, styles.infoHiddenDesktop)}
        >
          {name}
        </Heading>
        <Paragraph
          variant="medium"
          color="secondary"
          className={styles.description}
        >
          {description}
        </Paragraph>
      </div>
    </Card>
  );
};
