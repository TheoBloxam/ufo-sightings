import axios from "axios"
import { parseSightings } from "../utils/parseSightings"

export const getUfoSightings = async () => {
  const { data } = await axios.get('https://my-json-server.typicode.com/Louis-Procode/ufo-Sightings/ufoSightings')

  const parsedData = parseSightings(data)

  return parsedData
}
