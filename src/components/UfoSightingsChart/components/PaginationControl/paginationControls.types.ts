export interface PaginationControlsProps {
    currentPage: number;
    handlePageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
    sightingsCount: number;
}
