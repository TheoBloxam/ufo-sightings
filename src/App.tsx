import { Stack } from "@mui/material"
import { AppHeading } from "./components/AppHeading"
import { UfoSightingsChart } from "./components/UfoSightingsChart"
import { styled } from "./styled"

export const App = () => {
  return (
    <Stack
      sx={styled.appContainer}
      spacing={4}
      padding={4}>
      <AppHeading />
      <UfoSightingsChart />
    </Stack>
  )
}
