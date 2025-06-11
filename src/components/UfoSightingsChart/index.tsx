import { Box, CircularProgress, Stack } from "@mui/material"
import { useQuery } from "@tanstack/react-query"
import { getUfoSightings } from "../../lib/api"
import { SightingsBarChart } from "./components/BarChart"
import { extendedStyled, styled } from "./styled"
import { AlertBox } from "./components/AlertBox"
import type { ParsedUfoSighting } from "../../types/ufoSighting"
import { PaginationControls } from "./components/PaginationControl"
import { useState } from "react"

export const UfoSightingsChart = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  const { data: ufoSightings, isLoading, isError, error } = useQuery<ParsedUfoSighting[][]>({
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

  const currentWeekData = ufoSightings[currentPage - 1] 
  
  return (
    <Stack
      sx={styled.container}
      spacing={2}>
        <SightingsBarChart currentWeekData={currentWeekData} />
        <PaginationControls 
        sightingsCount={ufoSightings.length}
        currentPage={1}
        handlePageChange={handlePageChange}/>
    </Stack>
  )
}
