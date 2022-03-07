export const menuRedirect = (app, page) => {
    app.setState({
        page: page,
    })
}

export const logout = (app) => {
    app.setState({
        currUser: null,
        page: 0
    })
}