import { Stack } from "@mui/material"
import { useQuery } from "@tanstack/react-query"
import { getUfoSightings } from "../../lib/api"
import { SightingsBarChart } from "./components/BarChart"

export const UfoSightingsChart = () => {
  const { data: ufoSightings } = useQuery({
    queryKey: ['ufoSightings'],
    queryFn: getUfoSightings 
  }) 

  console.log('I am such a sigma!', ufoSightings)

  return (
    <Stack>
        <SightingsBarChart currentWeekData={ufoSightings} />
    </Stack>
  )
}
