import axios from "axios"
import { parseSightings } from "../utils/parseSightings"
import { groupSightingsByWeek } from "../utils/groupSightingsByWeek"

export const getUfoSightings = async () => {
  const { data } = await axios.get('https://my-json-server.typicode.com/Louis-Procode/ufo-Sightings/ufoSightings')

  const parsedData = parseSightings(data)
  const groupedData = groupSightingsByWeek(parsedData)

  return groupedData
}
