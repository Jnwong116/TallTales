const { REACT_APP_MY_ENV } = process.env;

const port = REACT_APP_MY_ENV.PORT;

const prod = {
    env: 'production',
    api_host: 'https://talltales.herokuapp.com'
};

const dev = {
    env: 'development',
    api_host: `http://localhost:${port}`
};

export default dev; // Change to prod for final build