import React from 'react';

export const Container: React.SFC<{}> = (props) => {
  return (
    <div className="container">
      {props.children}
    </div>
  );
}