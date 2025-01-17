import pkg from '../package.json';

const defaults = {
  REACT_APP_GRAPHQL_API_URL: 'http://10.112.80.43:16780',
  REACT_APP_PLATFORM_URL: 'http://10.112.80.52:16888/itaptargets/',
  REACT_APP_GIT_REVISION: '2222ccc',
  REACT_APP_CONTACT_URL: 'mailto:tdeboer@illumina.com',
};

const envVarOrDefault = envVarName =>
  process.env[envVarName] ? process.env[envVarName] : defaults[envVarName];

export const packageVersion = pkg.version;
export const graphqlApiUrl = envVarOrDefault('REACT_APP_GRAPHQL_API_URL');
export const platformUrl = envVarOrDefault('REACT_APP_PLATFORM_URL');
export const gitRevision = envVarOrDefault('REACT_APP_GIT_REVISION');
export const contactUrl = envVarOrDefault('REACT_APP_CONTACT_URL');
