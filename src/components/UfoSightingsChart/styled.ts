import { grey } from "@mui/material/colors"

export const styled = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }, 
    pagination: {
    '& .MuiPaginationItem-root': {
      color: grey[100],
    },
  },
}

export const extendedStyled = {
    ...styled,
    tallContainer: {
        ...styled.container,
        height: 457
    }
}
