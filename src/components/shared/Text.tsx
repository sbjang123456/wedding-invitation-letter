import { Fragment } from 'react';

type TextProps = {
  children: string;
};

export function Text({ children }: TextProps) {
  const message = children.split('\n').map((str, idx, array) => {
    return (
      <Fragment key={idx}>
        {str}
        {idx !== array.length - 1 && <br />}
      </Fragment>
    );
  });

  return <div>{message}</div>;
}
