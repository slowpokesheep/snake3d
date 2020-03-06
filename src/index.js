/* eslint-disable import/no-cycle */
import { gl, setup } from './setup/webgl';

import render from './render';
import Events from './events';
import load from './loader';
import Options from './options';

import SpatialManager from './managers/spatialManager';
import ObjectManager from './managers/objectManager';

export const managers = {};

export const muh = 0;

window.onload = async () => {
  const canvas = document.getElementById('gl-canvas');

  const w = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  console.log(w.width)
  console.log(w.height)
  const size = w.width < w.height ? w.width : w.height;

  canvas.width = size;
  canvas.height = size;

  const duSlider = document.getElementById('du-modifier-slider');

  Options.init();

  // Managers
  managers.spatial = new SpatialManager();
  managers.obj = new ObjectManager();

  Events.init(canvas, managers.obj.primitives[0].view); // Initalize event listeners

  await setup(canvas); // Webgl setup

  load();

  render(duSlider);
};
