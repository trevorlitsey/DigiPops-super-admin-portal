import * as casual from 'casual';
import { Film } from './types/index';

export default function createFilm(props = {}) {
  return {
    id: casual.uuid,
    name: casual.words(2),
    ...props,
  };
}
