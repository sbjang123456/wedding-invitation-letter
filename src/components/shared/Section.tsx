import classNames from 'classnames/bind';
import styles from './Section.module.scss';

const cx = classNames.bind(styles);

type SectionProps = {
  title?: string;
  className?: string;
  children: React.ReactNode;
};

export function Section({ title, className, children }: SectionProps) {
  return (
    <section className={cx(['container', className])}>
      {title && <div className={cx('txt-title')}>{title}</div>}
      {children}
    </section>
  );
}
