import { Box, useTheme } from "@mui/material"
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import type { BarChartProps } from "./barChart.types"
import { grey } from "@mui/material/colors"
import { styled } from "./style"
import { formatDateToLocale } from "../../../../utils/formatDateToLocale"

export const SightingsBarChart = ({
    currentWeekData,
}: BarChartProps) => {
    const theme = useTheme()

  return (
    <Box
    sx={styled.chartContainer}>
        <ResponsiveContainer width="100%" height="100%">
            <BarChart data={currentWeekData}>
                <CartesianGrid stroke={grey[700]}/>
                <XAxis dataKey="date" stroke={grey[100]} tickFormatter={(date: Date) => formatDateToLocale(date, 'short')}/>
                <YAxis stroke={grey[100]}/>
                <Tooltip 
                contentStyle={styled.chartTooltip}
                labelFormatter={(date: Date) => formatDateToLocale(date, 'long')}/>
                <Bar dataKey="sightings" fill={theme.palette.primary.main}/>
            </BarChart>
        </ResponsiveContainer>
    </Box>
  )
}
