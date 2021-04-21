import React from "react";
import { useDispatch } from "react-redux";

const RepoCard = ({ repo }) => {
  const dispatch = useDispatch();
  // console.log(repo);
  return (
    <div className="card">
      {/* Username: {repo.user} */}
      <h3>Repo: {repo.repo} </h3>
      <p>Issue Count: {repo.open_issues} </p>
      <p>Forks: {repo.forks}</p>
      <p>Stargazers: {repo.stargazers}</p>
    </div>
  );
};

export default RepoCard;
