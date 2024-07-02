import classNames from 'classnames/bind';
import styles from './App.module.scss';
import { useEffect, useState } from 'react';
import { FullScreenMessage } from '@/components/shared';
import {
  Calendar,
  Heading,
  ImageGallery,
  Intro,
  Invitation,
  Map,
  Video,
} from '@/components/sections';

import { Wedding } from '@/models/wedding';

const cx = classNames.bind(styles);

function App() {
  const [wedding, setWedding] = useState<Wedding | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch('http://localhost:8888/wedding')
      .then((response) => {
        if (response.ok === false) {
          throw new Error('청첩장 정보를 불러오지 못했습니다.');
        }

        return response.json();
      })
      .then((data) => {
        console.log(data);
        setWedding(data);
      })
      .catch((e) => {
        console.log('에러발생', e);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <FullScreenMessage type="loading" />;
  }

  if (error) {
    return <FullScreenMessage type="error" />;
  }

  if (!wedding) {
    return null;
  }

  const {
    date,
    galleryImages,
    groom,
    bride,
    location,
    message: { intro, invitation },
  } = wedding;

  return (
    <div className={cx('container')}>
      <Heading date={date} />
      <Video />
      <Intro
        groomName={groom.name}
        brideName={bride.name}
        locationName={location.name}
        date={date}
        message={intro}
      />
      <Invitation message={invitation} />
      <ImageGallery images={galleryImages} />
      <Calendar date={date} />
      <Map location={location} />
      {/* {JSON.stringify(wedding)} */}
    </div>
  );
}

export default App;
