import axios from "axios"

export const getUfoSightings = async () => {
  const { data } = await axios.get('https://my-json-server.typicode.com/Louis-Procode/ufo-Sightings/ufoSightings')

  return data
}
