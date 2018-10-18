import * as casual from 'casual';
import { Festival } from './types/index';

export default (length: number) => {
  return Array.from({ length }, (i, k) => createFestival(k));
};

function createFestival(id): Festival {
  return {
    id,
    name: casual.name,
    year: Math.floor(Math.random() * 8 + 2018),
    season: Math.floor(Math.random() * 4 + 1),
    startDate: new Date(),
    endDate: new Date(), // 90 days from start. is this needed?
    totalFilmCount: 0, // TODO
    totalJurors: 0, // TODO
    totalUsers: 0, // TODO
    winnersWeek: Math.random() > 0.5,
  };
}
