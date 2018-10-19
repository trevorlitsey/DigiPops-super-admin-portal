export type Film = {
  id: string;
  name: string;
  festivalId?: string;
};

export type Festival = {
  id: string;
  name: string;
  year: number;
  season: number; // 1-4
  phaseId: string;
  startDate: Date;
  endDate: Date; // 90 days from start. is this needed?
  theme?: string;
  totalFilmCount: number;
  totalJurors: number;
  totalUsers: number;
  winnersWeek: boolean;
};

export type Activity = {
  id: string;
  festivalId: string;
  phaseId: string;
  filmCount: number;
  featuredDays: number;
  activeFans: number;
  activeOwners: number;
  activeCredits: number;
  totalJurors: number;
  totalUsers: number;
};

export type Phase = {
  id: string;
  name: string;
};
