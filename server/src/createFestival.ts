import * as casual from 'casual';
import { Festival } from './types/index';
import phases from './phases';

export default function createFestival(props = {}): Festival {
  const startYear = getYear();
  const startMonth = getMonth();
  const endYear = startMonth < 9 ? startYear : startYear + 1;
  const endDay = startMonth === 9 ? 31 : 30;
  const startDate = new Date(startYear, startMonth, 1);
  const endDate = new Date(endYear, startMonth + 2, endDay);

  return {
    id: casual.uuid,
    name: casual.words(3),
    year: startYear,
    season: Math.floor(Math.random() * 4 + 1),
    phaseId: phases[Math.floor(Math.random() * phases.length)].id,
    startDate,
    endDate, // 90 days from start. is this needed?
    theme: casual.words(2),
    totalFilmCount: Math.floor(Math.random() * 10), // TODO
    totalJurors: Math.floor(Math.random() * 10), // TODO
    totalUsers: Math.floor(Math.random() * 100), // TODO
    winnersWeek: Math.random() > 0.5,
    ...props,
  };

  function getYear() {
    return Math.floor(Math.random() * 8 + 2018);
  }

  function getMonth() {
    return [0, 3, 6, 9][Math.floor(Math.random() * 4)];
  }
}
