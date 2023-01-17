import React from 'react';
import config from '../../../config';
import Link from '../../../components/Link';

function Description({ symbol, name }) {
  return (
    <>
      Results from Illumina AI model on <strong>{symbol}</strong> as
      likely causal gene for <strong>{name}</strong>.  Source:{' '}
      <Link to={config.iTAPbassUrl} external newTab>
        iTAPbass
      </Link>
      {' '}(<strong>ENSEMBLE score &gt;= 0.1 only</strong>)
      .
    </>
  );
}

export default Description;
