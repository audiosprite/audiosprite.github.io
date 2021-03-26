export const getSoundcloudArt = (url = '', dim = 500) => {
  const index = url.lastIndexOf('large');
  const dot = url.lastIndexOf('.');
  const url500 = `${url.substr(0, index)}t${dim}x${dim}${url.substr(dot)}`;
  return url500 && url500.includes('.') ? url500 : url;
};
