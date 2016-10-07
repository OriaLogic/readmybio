export const SCALED_100_75 = 'c_scale,h_75,q_60,w_100';
export const SCALED_280_210 = 'c_scale,g_center,h_210,q_60,w_280';
export const BASE_URL = 'http://res.cloudinary.com/dquolcg0e/image/upload';
export const VERSION = 'v1475847184';
export const buildCloudinaryUrl = (imageId, additionalFormat) => `${BASE_URL}/${(additionalFormat ? (additionalFormat + '/') : '')}${VERSION}/${imageId}`;
