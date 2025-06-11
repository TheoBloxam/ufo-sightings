import type { Theme } from "@mui/material";
import { grey } from "@mui/material/colors";

export const styled = {
    chartContainer: {
        width: '100%',
        height: 400,
        maxWidth: 1000,
        fontFamily: (theme: Theme) => theme.typography.fontFamily
    }, 
    chartTooltip: {
        backgroundColor: grey[900],
        color: grey[100],
        border: `1px solid ${grey[700]}`
    }
}
