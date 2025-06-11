import type { ParsedUfoSighting } from "../types/ufoSighting";

export const groupSightingsByWeek = (
    ufoSightings: ParsedUfoSighting[]
): ParsedUfoSighting[][] => {
    const sightingsByWeek = []

    for (let i = 0; i < ufoSightings.length; i += 7) {
        sightingsByWeek.push(ufoSightings.slice(i, i + 7))
    }

    return sightingsByWeek
}
