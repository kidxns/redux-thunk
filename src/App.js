import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { loadPosts } from "./redux/actions/post";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const data = useSelector((state) => state.post.data);
  const loading = useSelector((state) => state.post.loading);
  const dispatch = useDispatch();
  console.log(data, loading);

  useEffect(() => {
    dispatch(loadPosts());
  },[dispatch]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
