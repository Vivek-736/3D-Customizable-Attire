import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#EFBD48',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: '/threejs.png',  // Note the leading slash
  fullDecal: '/threejs.png',  // Note the leading slash
});

export default state;