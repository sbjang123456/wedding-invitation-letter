import { parseISO, format, getDay } from 'date-fns';
import classNames from 'classnames/bind';
import styles from './Heading.module.scss';
import { Section } from '@/components/shared';

const cx = classNames.bind(styles);

const DAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
] as const;

type HeadingProps = {
  date: string;
};
export function Heading({ date }: HeadingProps) {
  const weddingDate = parseISO(date);

  return (
    <Section className={cx('container')}>
      <div className={cx('tx-date')}>{format(weddingDate, 'yy.MM.dd')}</div>
      <div className={cx('tx-day')}>{DAYS[getDay(weddingDate)]}</div>
    </Section>
  );
}
