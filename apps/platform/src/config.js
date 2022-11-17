// Configuration Object
const config = {
  urlApi:
    window.configUrlApi ??
    'http://10.112.80.40:16780/api/v4/graphql',
  googleTagManagerID: window.configGoogleTagManagerID ?? null,
  efoURL: window.configEFOURL ?? '/data/ontology/efo_json/diseases_efo.jsonl',

  profile: window.configProfile ?? {},
  downloadsURL: window.configDownloadsURL ?? '/data/downloads.json',
  geneticsPortalUrl:
    window.configGeneticsPortalUrl ?? 'https://genetics.opentargets.org',
  iTAPUrl:
    window.configiTAPUrl ?? 'http://10.112.80.189:16888/',
  iTAPbassUrl:
    window.configiTAPbassUrl ?? 'http://10.112.80.189:16888/itapbass',
};

export default config;
