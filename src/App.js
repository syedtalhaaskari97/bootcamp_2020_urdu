import { useEffect, useState } from "react";
// import "./App.css";

const App = () => {

  const [repos, setRepos] = useState(() => []);

  useEffect(() => {
    async function getRepos() {
      const response = await fetch("https://api.github.com/users/muhammadmohsin/repos")
      const data = await response.json();
      console.log("data", data);
      setRepos(data);
    }
    getRepos()
  }, [])

  return (
      <div className="App">
        <ul>
          {repos.map((repo, ind) => (
            <li key={ind}>{repo.name}</li>
          ))}
        </ul>
      </div>
  )
}

export default App;