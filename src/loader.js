/* eslint-disable import/no-cycle */
import { managers } from './index';

import Template from './objects/template';
import Tester from './objects/tester';
import Box from './objects/box';

import Snake from './objects/snake';
import SnakeBox from './objects/snakeBox';

export default function load() {
  //const te = new Template();
  //const t = new Tester();
  //const tt = new Tester();
  //const ttt = new Tester();
  //t.setTranslation(-2, 0, -6);
  //tt.setTranslation(2, 0, -4);
  //ttt.setTranslation(0, 0, 4);
  //managers.obj.add(t, tt, ttt, te);

  //managers.obj.add(
  //  t,
  //);
  //////sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss

  managers.obj.addEnviroment(new SnakeBox());

  managers.obj.add(
    new Snake(),
  );
}
