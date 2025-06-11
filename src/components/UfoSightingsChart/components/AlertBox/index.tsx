import { Alert, AlertTitle, Box } from "@mui/material"
import { styled } from "../BarChart/style"
import { extendedStyled } from "../../styled"

export const AlertBox = () => {
    return (
        <Box
        sx={extendedStyled.tallContainer}>
            <Alert
            sx={styled.alert}
            severity="error"
            variant="filled">
                <AlertTitle>
                    Danger, do not read.
                </AlertTitle>
                If you read this, you will die in 12 minutes.
            </Alert>
        </ Box>
    )
}
