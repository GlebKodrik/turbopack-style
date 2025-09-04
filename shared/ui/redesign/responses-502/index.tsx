import Attention from '../../../assets/responses/attention.png';
import { createResponses } from '../responses';
import styles from './responses-502.module.scss';

export const Responses502 = createResponses({
  image: Attention,
  title: 'Произошла ошибка',
  imageClassName: styles.image,
  description:
    'Проверьте подключение к интернету.\n' +
    'Если все хорошо, вероятно ошибка на нашей стороне и мы уже работаем над ей',
});
