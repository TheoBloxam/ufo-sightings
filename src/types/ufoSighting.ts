export interface UfoSighting {
    date: string,
    sightings: number
}

export interface ParsedUfoSighting extends Omit<UfoSighting, 'date'> {
    date: Date;
}
