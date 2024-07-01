import classNames from 'classnames/bind';
import styles from './ImageGallery.module.scss';
import { Section } from '@/components/shared';
import { ImageViewer } from '@/components/ImageViewer';
import { useState } from 'react';

const cx = classNames.bind(styles);

type ImageGalleryProps = {
  images: string[];
};

export function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedIdx, setSelectedIdx] = useState(-1);

  const open = selectedIdx > -1;

  const handleSelectedImage = (idx: number) => () => {
    setSelectedIdx(idx);
  };

  const handleClose = () => {
    setSelectedIdx(-1);
  };

  return (
    <Section title="사진첩">
      <ul className={cx('wrap-images')}>
        {images.map((src, idx) => (
          <li
            key={idx}
            className={cx('wrap-image')}
            onClick={handleSelectedImage(idx)}
          >
            <img src={src} alt="사진첩 이미지" />
          </li>
        ))}
      </ul>
      <ImageViewer
        images={images}
        open={open}
        selectedIdx={selectedIdx}
        onClose={handleClose}
      />
    </Section>
  );
}
