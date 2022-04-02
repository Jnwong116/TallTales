import ENV from './../../config.js';
// import errorTioa

const API_HOST = ENV.api_host;
const log = console.log

export const getUser = (page, app) => {
    const currUser = app.state.currUser;

    const url = `${API_HOST}/users/user/${currUser}`;

    fetch(url)
    .then((res) => {
        if (res.status === 200) {
            return res.json();
        }
        else {
            return res.text();
        }
    })
    .then((result) => {
        if (typeof(result) === 'object') {
            // log(page);
            page.setState({
                user: result
            });
            // log('updated')
            return;
        }
        else {
            window.alert(result);
            return;
        }
    })
    .catch(err => {
        log(err);
    })
}