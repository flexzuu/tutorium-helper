import React from 'react';

export default ({ data, Row, Head }) => {
  return (
    <table>
      <thead>
        <Head />
      </thead>
      <tbody>
        {data.map((obj, index) => <Row {...obj} index={index} id={obj.key} />)}
      </tbody>
    </table>
  );
};
