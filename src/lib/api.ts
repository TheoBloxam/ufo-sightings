import axios from "axios"
import { parseSightings } from "../utils/parseSightings"
import { groupSightingsByWeek } from "../utils/groupSightingsByWeek"
import { addMissingSightings } from "../utils/addMissingSightings"

export const getUfoSightings = async () => {
  const { data } = await axios.get('https://my-json-server.typicode.com/Louis-Procode/ufo-Sightings/ufoSightings')

  const parsedData = parseSightings(data)
  const filledData = addMissingSightings(parsedData);
  const groupedData = groupSightingsByWeek(filledData)

  return groupedData
}
