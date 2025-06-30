'use client';

const error = ({ error }) => {
  return <div>{error.message}</div>;
};

export default error;
