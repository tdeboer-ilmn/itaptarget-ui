import React from 'react';
import Link from '../../../components/Link';

function Description({ symbol, diseaseName }) {
  return (
    <>
      Gene burden analysis prioritising <strong>{symbol}</strong> as likely
      causal gene for <strong>{diseaseName}</strong>. Source:{' '}
      <Link external to="https://www.ebi.ac.uk/gwas/">
        GWAS Catalog
      </Link>
      ,{' '}
      <Link external to="https://azphewas.com">
        AstraZeneca PheWAS Portal
      </Link>
      ,{' '}
      <Link external to="https://app.genebass.org">
        Genebass
      </Link>
      (<strong>ENSEMBLE score >= 0.1 only</strong>)
      .
    </>
  );
}

export default Description;
