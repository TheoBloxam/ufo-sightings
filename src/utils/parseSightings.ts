import { parse } from "date-fns";
import type { ParsedUfoSighting, UfoSighting } from "../types/ufoSighting";

export const parseSightings = (
    ufoSightings: UfoSighting[]
): ParsedUfoSighting[] => {
    return (
        ufoSightings.map(sighting => ({
            ...sighting,
            date: parse(sighting.date, "dd/MM/yyyy", new Date())
        })
    ))
}
