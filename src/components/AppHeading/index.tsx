import { Box, Typography } from "@mui/material"
import { styled } from "./styled"

export const AppHeading = () => {
  return (
    <Box>
        <Typography
            sx={styled.headingContainer}
            variant="h4"
            component="h1"
            fontWeight="bold">
            UFO Sightings
        </Typography>
    </Box>
  )
}
