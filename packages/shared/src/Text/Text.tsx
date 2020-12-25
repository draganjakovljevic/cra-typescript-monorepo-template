import React, { FunctionComponent } from 'react';

type Props = {
  children: React.ReactNode,
};

const Text: FunctionComponent<Props> = ({ children }) => {
  return <h1>{children}</h1>;
};

export default Text;
