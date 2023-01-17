const config = {
  apiUrl:
    window.configApiUrl ?? 'http://10.112.80.43:16780/graphql',
  googleTagManagerID: window.configGoogleTagManagerID ?? null,
  helpdeskEmail: window.configHelpdeskEmail ?? 'tdeboer@illumina.com',
  profile: window.configProfile ?? {},
  platformUrl: window.configPlatformUrl
    ? window.configPlatformUrl.replace(/\/$/, '')
    : 'http://10.112.80.52:16888/itaptargets',
  iTAPUrl:
    window.configiTAPUrl ?? 'http://10.112.80.52:16888/itaptargets',
  iTAPbassUrl:
    window.configiTAPbassUrl ?? 'http://10.112.80.52:16888/itapbass',
  iTAPgeneticsUrl:
    window.configiTAPgeneticsUrl ?? 'http://10.112.80.43:16888/itapgenetics',
};

export default config;
