export const definition = {
  id: 'iTAP',
  name: 'iTAP',
  shortName: 'IT',
  hasData: data => data.iTAP.count > 0,
};

export { default as Summary } from './Summary';
export { default as Body } from './Body';
