import React from 'react';

function Container({ children }) {
  return <div style={{ paddingLeft: '64px', paddingRight: '64px', display: 'block' }}>{children}</div>;
}

export default Container;
