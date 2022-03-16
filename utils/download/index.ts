export const downloader = (csv: string) => {
  window.open(`http://tabnet.datasus.gov.br/${csv}`);
};
