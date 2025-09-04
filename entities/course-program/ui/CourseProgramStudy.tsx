import Image from 'next/image';

import styles from './CourseProgramStudy.module.scss';

type CourseProgramStudyProps = {
  image: string;
  title: string;
  description: string;
};

export const CourseProgramStudy = ({
  image,
  title,
  description,
}: CourseProgramStudyProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <div className={styles.info}>
          <p className={styles.title}>{title}</p>
          {description && <p className={styles.description}>{description}</p>}
        </div>
        {image && (
          <div className={styles.image}>
            <Image
              src={image}
              alt="Картинка курса"
              fill
            />
          </div>
        )}
      </div>
    </div>
  );
};
