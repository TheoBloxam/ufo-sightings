import { Box, CircularProgress, Stack } from "@mui/material"
import { useQuery } from "@tanstack/react-query"
import { getUfoSightings } from "../../lib/api"
import { SightingsBarChart } from "./components/BarChart"
import { extendedStyled, styled } from "./styled"

export const UfoSightingsChart = () => {
  const { data: ufoSightings, isLoading } = useQuery({
    queryKey: ['ufoSightings'],
    queryFn: getUfoSightings 
  }) 

  if (isLoading || !ufoSightings) {
    return (
      <Box
      sx={extendedStyled.tallContainer}>
        <CircularProgress />
      </Box>
    )
  }

  return (
    <Stack
      sx={styled.container}
      spacing={2}>
        <SightingsBarChart currentWeekData={ufoSightings} />
    </Stack>
  )
}
