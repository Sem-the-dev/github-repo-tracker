import React from "react";
import { useDispatch } from "react-redux";

const RepoCard = ({ repo }) => {
  const dispatch = useDispatch();
  // console.log(repo);

  let GitUrl = repo.git_url;

  // let languages = repo.languages
  // console.log(languages)

  return (
    <div className="card">
      {/* Username: {repo.user} */}
      <h3 id="git-repo">
        <a href={`${GitUrl}`} target="_blank">
          {" "}
          Repo: {repo.repo}{" "}
        </a>
      </h3>
      <p>
        <span>&#9888;</span>Issue Count: {repo.open_issues}{" "}
      </p>
      <p>
        <span>&#9903;</span>Forks: {repo.forks}
      </p>
      <p>
        <span>&#9734;</span>Stargazers: {repo.stargazers}
      </p>
      <p>
        <span>&#9781;</span>{repo.languages}
      </p>
    </div>
  );
};

export default RepoCard;
