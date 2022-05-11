import { errorToast } from "../toastify/toastify.js";
import { startGame } from "../sockets/startGame.js";
import ENV from "../../config.js";

const API_HOST = ENV.api_host;
const log = console.log;

export const redirect = (app, start, prompts) => {
  // Checks if lobby has at least 3 people in it
  if (app.state.users.length >= 3) {
    startGame(app, start, prompts);
  } 
  
  else {
    errorToast("Need at least 3 people to play.")
  }
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
          genres: result,
          starts: result[0].starts,
          prompt: {
            backstory: result[0].prompts[0].backstory,
            conflict: result[0].prompts[0].conflict,
            resolution: result[0].prompts[0].resolution
          },
          start: result[0].starts[0].start
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

export const selectGenre = (page, genre) => {
  let starts = null;
  let prompts = null;
  for (let i = 0; i < page.state.genres.length; i++) {
    if (page.state.genres[i].genre === genre) {
      starts = page.state.genres[i].starts;
      prompts = page.state.genres[i].prompts;
    }
  }

  let prompt = prompts[(Math.floor(Math.random() * (prompts.length)))];
  prompt = {
    backstory: prompt.backstory,
    conflict: prompt.conflict,
    resolution: prompt.resolution
  }

  page.setState({
    starts: starts,
    prompt: prompt,
    start: starts[0]
  })
}

export const selectStart = (page, start) => {
  page.setState({
    start: page.state.starts[start].start
  });
}

export const togglePrivacy = (page) => {
  
}
