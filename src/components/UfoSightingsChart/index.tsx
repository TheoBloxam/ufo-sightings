import { Box, CircularProgress, Stack } from "@mui/material"
import { useQuery } from "@tanstack/react-query"
import { getUfoSightings } from "../../lib/api"
import { SightingsBarChart } from "./components/BarChart"
import { extendedStyled, styled } from "./styled"
import { AlertBox } from "./components/AlertBox"

export const UfoSightingsChart = () => {
  const { data: ufoSightings, isLoading, isError, error } = useQuery({
    queryKey: ['ufoSightings'],
    queryFn: getUfoSightings 
  }) 

  if (isError) {
    console.error('DUUUUDDDDEEEEEE, how did you break it?', error)

    return <AlertBox />
  }

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
