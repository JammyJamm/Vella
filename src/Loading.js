import { useState } from "react";
import logo from "../src/assets/images/logo.jpg";
import "./loading.css";
const Loading = () => {
  const [load, setLoad] = useState("loading");
  setTimeout(() => {
    setLoad("loading loaded");
  }, 4000);
  return (
    <>
      <div className={load}>
        <div className="imgBlock">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </>
  );
};
export default Loading;
