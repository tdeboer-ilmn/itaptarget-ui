import React from 'react';
import { Button } from '@material-ui/core';
import { faDna } from '@fortawesome/free-solid-svg-icons';
import config from '../../config';

import {
  CrisprDepmapLink,
  ExternalLink,
  TepLink,
  XRefLinks,
} from '../../components/ExternalLink';
import HeaderBase from '../../components/Header';

function Header({ loading, ensgId, uniprotIds, symbol, name, crisprId }) {
  const ensemblUrl = `https://identifiers.org/ensembl:${ensgId}`;
  const genecardsUrl = `https://identifiers.org/genecards:${symbol}`;
  const hgncUrl = `https://identifiers.org/hgnc.symbol:${symbol}`;
  const geneticsUrl = `${config.geneticsPortalUrl}/gene/${ensgId}`;
  const iTAPUrl = `${config.iTAPbassUrl}/gene?q=${symbol}`;

  return (
    <HeaderBase
      loading={loading}
      title={symbol}
      subtitle={name}
      Icon={faDna}
      externalLinks={
        <>
          <ExternalLink title="iTAPbass" id={symbol} url={iTAPUrl} />
          <ExternalLink title="Ensembl" id={ensgId} url={ensemblUrl} />
          <XRefLinks
            label="UniProt"
            urlStem="https://identifiers.org/uniprot:"
            ids={uniprotIds}
            limit="3"
          />
          <ExternalLink title="GeneCards" id={symbol} url={genecardsUrl}/>
          <ExternalLink title="HGNC" id={symbol} url={hgncUrl} />
          <CrisprDepmapLink id={crisprId} />
          <TepLink ensgId={ensgId} symbol={symbol} />
        </>
      }
      centerContent={
        <Button
          href={iTAPUrl}
          target="_blank"
          rel="noopener noreferrer"
          color="secondary"
          variant="contained"
          disableElevation
        >
          View {symbol} in iTAPbass
        </Button>
      }
      rightContent={
        <Button
          href={geneticsUrl}
          target="_blank"
          rel="noopener noreferrer"
          color="primary"
          variant="contained"
          disableElevation
        >
          View {symbol} in Open Targets Genetics
        </Button>
      }
    />
  );
}

export default Header;
