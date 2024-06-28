import classNames from 'classnames/bind';
import styles from './Video.module.scss';
import { Section } from '@/components/shared';

const cx = classNames.bind(styles);

export function Video() {
  return (
    <Section className={cx('container')}>
      <video autoPlay muted loop controls poster="/assets/poster.jpg">
        <source src="/assets/main.mp4" type="video/mp4" />
      </video>
    </Section>
  );
}
