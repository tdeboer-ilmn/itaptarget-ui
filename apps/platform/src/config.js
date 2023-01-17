// Configuration Object
const config = {
  urlApi:
    window.configUrlApi ??
    'http://10.112.80.52:16780/api/v4/graphql',
  googleTagManagerID: window.configGoogleTagManagerID ?? null,
  efoURL: window.configEFOURL ?? '/itaptargets/data/ontology/efo_json/diseases_efo.jsonl',

  profile: window.configProfile ?? {},
  downloadsURL: window.configDownloadsURL ?? '/itaptargets/data/downloads.json',
  geneticsPortalUrl:
    window.configGeneticsPortalUrl ?? 'https://genetics.opentargets.org',
  iTAPUrl:
    window.configiTAPUrl ?? 'http://10.112.80.52:16888/itaptargets',
  iTAPbassUrl:
    window.configiTAPbassUrl ?? 'http://10.112.80.52:16888/itapbass',
  iTAPgeneticsUrl:
    window.configiTAPgeneticsUrl ?? 'http://10.112.80.43:16888/itapgenetics',
};

export default config;
