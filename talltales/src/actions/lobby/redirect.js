export const redirect = (app) => {
    app.setState({
        page: 0,
        prompt: 0,
        stage: 0
    })
}