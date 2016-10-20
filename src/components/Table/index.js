import React from 'react';

export default ({data, Row, Head}) => {
  return (
      <table>
        <thead>
          <Head />
        </thead>
        <tbody>
          {
            data.map((obj, index)=>(
              <Row {...obj} />
            ))
          }
        </tbody>
      </table>
  );
}
