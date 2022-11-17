import React from 'react';

import SummaryItem from '../../../components/Summary/SummaryItem';
import usePlatformApi from '../../../hooks/usePlatformApi';
import { dataTypesMap } from '../../../dataTypes';

import ITAP_SUMMARY_FRAGMENT from './iTAPSummary.gql';

function Summary({ definition }) {
  const request = usePlatformApi(ITAP_SUMMARY_FRAGMENT);

  return (
    <SummaryItem
      definition={definition}
      request={request}
      renderSummary={data =>
        `${data.iTAP.count} entr${
          data.iTAP.count === 1 ? 'y' : 'ies'
        }`
      }
      subText={dataTypesMap.itap_ensemble_score}
    />
  );
}

Summary.fragments = {
  iTAPSummaryFragment: ITAP_SUMMARY_FRAGMENT,
};

export default Summary;
