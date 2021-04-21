// API
import axios from "axios";

//fetch
export const fetchRepos = (username) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `https://api.github.com/users/${username}/repos`
      );
      let repoData = data.map((el) => ({
        user: el.owner.login,
        repo: el.name,
        open_issues: el.open_issues,
        forks: el.forks,
        stargazers: el.stargazers_count,
        avatar: el.owner.avatar_url,
        git_url: el.html_url,
        languages: el.languages_url,
      }));
      console.log(repoData);
      dispatch({
        type: "LOAD_REPOS",
        payload: repoData,
      });
    } catch (err) {
      dispatch({
        type: "SET_ERROR",
        payload: err,
      });
    }
  };
};
