export const styled = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}

export const extendedStyled = {
    ...styled,
    tallContainer: {
        ...styled.container,
        height: 500
    }
}
