import * as fs from 'fs';
import createFestival from './createFestival';
import createFilm from './createFilm';
import createActivity from './createActivity';
import phases from './phases';

const festivals = Array.from({ length: 15 }, createFestival);

const films = Array.from({ length: 40 }, () => {
  const festivalId = festivals[Math.floor(Math.random() * festivals.length)].id;
  return createFilm({ festivalId });
});

const activity = Array.from({ length: 60 }, () => {
  return createActivity({
    festivalId: festivals[Math.floor(Math.random() * festivals.length)].id,
  });
});

const data = {
  festivals,
  films,
  phases,
  activity,
};

fs.writeFileSync('db.json', JSON.stringify(data), 'utf-8');
