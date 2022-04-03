import { errorToast } from "../toastify/toastify.js";
import { startGame } from "../sockets/joinRoom.js";
import ENV from "../../config.js";

const API_HOST = ENV.api_host;
const log = console.log;

export const redirect = (app, start, prompts) => {
  startGame(app, start, prompts);
};

export const getGenres = page => {
  const url = `${API_HOST}/stories`;

  fetch(url)
    .then(res => {
      if (res.status === 200) {
        return res.json();
      } else {
        return res.text();
      }
    })
    .then(result => {
      if (typeof result === "object") {
        page.setState({
          genres: result
        });
      } else {
        errorToast(result);
        return;
      }
    })
    .catch(err => {
      log(err);
    });
};
