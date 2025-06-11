import { eachDayOfInterval, endOfWeek, startOfWeek } from "date-fns";

import type { ParsedUfoSighting } from "../types/ufoSighting";

export const addMissingSightings = (
  ufoSightings: ParsedUfoSighting[]
): ParsedUfoSighting[] => {
  const allDates = eachDayOfInterval({
    start: startOfWeek(
      ufoSightings[0].date,
      { weekStartsOn: 1 }
    ),
    end: endOfWeek(
      ufoSightings[ufoSightings.length - 1].date,
      { weekStartsOn: 1 }
    ),
  });

  return allDates.map(date => {
    const matchedSighting = ufoSightings.find(
      sighting => sighting.date.getTime() === date.getTime()
    );

    return matchedSighting || { date, sightings: 0 };
  });
};
