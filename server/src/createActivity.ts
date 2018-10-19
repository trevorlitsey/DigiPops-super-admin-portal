import * as casual from 'casual';
import phases from './phases';

export default function createActivity(props = {}) {
  return {
    id: casual.uuid,
    phaseId: phases[Math.floor(Math.random() * phases.length)].id,
    filmCount: Math.floor(Math.random() * 20),
    featuredDays: Math.floor(Math.random() * 90),
    activeFans: Math.floor(Math.random() * 1000),
    activeOwners: Math.floor(Math.random() * 5),
    activeCredits: Math.floor(Math.random() * 100),
    totalJurors: Math.floor(Math.random() * 10),
    totalUsers: Math.floor(Math.random() * 5000),
    ...props,
  };
}
