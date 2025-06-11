import { Box, Pagination } from "@mui/material"
import { styled } from "../../styled"
import type { PaginationControlsProps } from "./paginationControls.types"

export const PaginationControls = ({
    sightingsCount, 
    currentPage,
    handlePageChange
}: PaginationControlsProps) => {
    return (
        <Box sx={styled.container}>
            <Pagination 
            color="primary"
            size="large"
            count={sightingsCount}
            page={currentPage} 
            onChange={handlePageChange}
            sx={styled.pagination} />
        </Box>
    )
}
