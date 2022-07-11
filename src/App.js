import Button from "./Button";
import styles from "./App.module.css";
import {useState, useEffect} from "react";

function Hello(){
  useEffect(() => {
    console.log("created :)");
    return () => console.log("destroyed : (");
  }, []);
  return <h1>Hello</h1>;
}


function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev+1);
  const onChange = (event) => setKeyword(event.target.value);
  const iRunOnlyOnce = () => {
    console.log("I run when counter changes");
  };
  useEffect(iRunOnlyOnce, [counter]);
  useEffect(() => {
    if (keyword !== "" && keyword.length >= 5){
      console.log("SEARCH FOR", keyword);
    }
  }, [keyword]);
  const [showing, setShowing] = useState(false);
  const onChoose = () => setShowing((prev) => !prev);
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..."/>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
      <button onClick={onChoose}>{showing ? "Hide" : "Show"}</button>
      {showing ? <Hello/> : null}
    </div>
  );
}

export default App;
