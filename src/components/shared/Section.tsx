import classNames from 'classnames/bind';
import styles from './Section.module.scss';

const cx = classNames.bind(styles);

type SectionProps = {
  className?: string;
  children: React.ReactNode;
}

export function Section({ className, children }: SectionProps) {
  return <section className={cx(['container', className])}>{children}</section>;
}
