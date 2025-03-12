import { Link } from "react-router-dom";
import "./style.css";
import { useEffect, useState } from "react";
import { collection, getDocs, query } from "firebase/firestore";
import db from "./FirbaseConfig";
import { ReactComponent as Run } from "../assets/images/run.svg";
import { ReactComponent as Back } from "../assets/images/close.svg";
import { ReactComponent as Captain } from "../assets/images/crown.svg";
import { ReactComponent as Keeper } from "../assets/images/keeper.svg";
import { ReactComponent as Player } from "../assets/images/player.svg";
import { ReactComponent as CaptainKeeper } from "../assets/images/CaptainKeeper.svg";
import logoImage from "../assets/images/logo_senthamil.png";
import NoData from "./NoData";
const Layout = () => {
  const [data, setData] = useState([]);
  const [player, setPlayer] = useState("PLAYER,PLAYER");
  const [score, setScore] = useState("0,0,0,0");
  const [filterData, setFilterData] = useState([]);

  const userData = async () => {
    const q = query(collection(db, "Laddu"));
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
      //
      ...doc.data(),
    }));
    //setDetail(data);
    setData(data);
    console.log(data);
  };
  useEffect(() => {
    userData();
  }, []);
  useEffect(() => {
    const arrScore = score.split(",");
    const arrPLayer = player.split(",");
    const arrScore1 = parseInt(arrScore[0]);
    const arrScore2 = parseInt(arrScore[1]);
    const arrScore3 = parseInt(arrScore[2]);
    const arrScore4 = parseInt(arrScore[3]);
    const player1 = arrPLayer[0].toUpperCase();
    const player2 = arrPLayer[1].toUpperCase();
    setFilterData(
      data?.filter((item) => {
        return (
          (parseInt(item.player1Score) >= arrScore1 &&
            parseInt(item.player1Score) <= arrScore2 &&
            parseInt(item.player2Score) >= arrScore3 &&
            parseInt(item.player2Score) <= arrScore4 &&
            item.player1Role.toUpperCase() == player1 &&
            item.player2Role.toUpperCase() == player2) ||
          (item.player1Role.toUpperCase() == player2 &&
            item.player2Role.toUpperCase() == player1 &&
            parseInt(item.player1Score) >= arrScore1 &&
            parseInt(item.player1Score) <= arrScore2 &&
            parseInt(item.player2Score) >= arrScore3 &&
            parseInt(item.player2Score) <= arrScore4) ||
          (parseInt(item.player2Score) >= arrScore1 &&
            parseInt(item.player2Score) <= arrScore2 &&
            parseInt(item.player1Score) >= arrScore3 &&
            parseInt(item.player1Score) <= arrScore4 &&
            item.player1Role.toUpperCase() == player1 &&
            item.player2Role.toUpperCase() == player2) ||
          (item.player1Role.toUpperCase() == player2 &&
            item.player2Role.toUpperCase() == player1 &&
            parseInt(item.player2Score) >= arrScore1 &&
            parseInt(item.player2Score) <= arrScore2 &&
            parseInt(item.player1Score) >= arrScore3 &&
            parseInt(item.player1Score) <= arrScore4)
        );
      })
    );
  }, [data, score, player]);
  // Handle Score
  const handleScore = (prop) => {
    setScore(prop);
    handleRun();
  };
  const handlePlayer = (prop) => {
    setPlayer(prop);
  };
  const [run, setRun] = useState(true);
  const [animationbottom, setAnimateBottom] = useState(false);
  const handleRun = () => {
    setRun((pre) => !pre);
    setAnimateBottom(true);
    setTimeout(() => {
      setAnimateBottom(false);
    }, 6000);
  };
  return (
    <div className="layout">
      {/* Nav Bar Starts */}
      <div className="ui-topNav ui-match-nav">
        <div className="title">
          {/* <Link to={"/"}>
            <img
              src="https://github.com/JammyJamm/JSON_Data/blob/main/logo_senthamil.png?raw=true"
              alt="logo"
            />
          </Link>
          <div className="add">
            <Link to={"/add"}>
              <button className="add-btn">
                <img
                  src="https://raw.githubusercontent.com/JammyJamm/JSON_Data/363a4623ccb014c36ace59c04e6cb6979ad0d708/add.svg"
                  alt="add"
                />
              </button>
            </Link>
          </div> */}
          <div className="image">
            <div className="profile">
              <div className="image">
                <Link to={"/"}>
                  <img src={logoImage} alt="logo" />
                </Link>
              </div>
            </div>
            <div className="more">
              <Link to={"/add"}>
                <img src="https://raw.githubusercontent.com/JammyJamm/JSON_Data/363a4623ccb014c36ace59c04e6cb6979ad0d708/add.svg" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="ui-nav">
        <div className="ui-block">
          <button
            className={player == "PLAYER,PLAYER" ? "selected" : ""}
            onClick={() => handlePlayer("PLAYER,PLAYER")}
          >
            <Player />
            <span>Player</span>
          </button>
          <button
            className={player == "PLAYER,WK" ? "selected" : ""}
            onClick={() => handlePlayer("PLAYER,WK")}
          >
            <Keeper />
            <span>Keeper</span>
          </button>
          <button
            className="run"
            onClick={handleRun}
            style={{ visibility: "hidden" }}
          >
            {run ? <Run /> : <Back />}
          </button>
          <button
            className={player == "PLAYER,CAPTAIN" ? "selected" : ""}
            onClick={() => handlePlayer("PLAYER,CAPTAIN")}
          >
            <Captain />
            <span>Captain</span>
          </button>
          <button
            className={player == "WK,CAPTAIN" ? "selected" : ""}
            onClick={() => handlePlayer("WK,CAPTAIN")}
          >
            <CaptainKeeper />
            <span>Cap/Wk</span>
          </button>
        </div>
      </div>{" "}
      <div className={animationbottom ? "gameBlock on" : "gameBlock"}>
        <div className="buttonSection">
          <button className="run" onClick={handleRun}>
            {run ? <Run /> : <Back />}
          </button>
        </div>

        <div className={run === false ? "game selected" : "game"}>
          <div className="card" style={{ animationDelay: "0s" }}>
            <h2>0 | Upto 150</h2>
            <button
              onClick={() => handleScore("0,0,0,0")}
              className={score == "0,0,0,0" ? "selected" : ""}
            >
              0-0 | 0-0
            </button>
            <button
              onClick={() => handleScore("0,0,1,9")}
              className={score == "0,0,1,9" ? "selected" : ""}
            >
              0-0 | 1-9
            </button>
            <button
              onClick={() => handleScore("0,0,10,19")}
              className={score == "0,0,10,19" ? "selected" : ""}
            >
              0-0 | 10-19
            </button>
            <button
              onClick={() => handleScore("0,0,20,29")}
              className={score == "0,0,20,29" ? "selected" : ""}
            >
              0-0 | 20-29
            </button>
            <button
              onClick={() => handleScore("0,0,30,39")}
              className={score == "0,0,30,39" ? "selected" : ""}
            >
              0-0 | 30-39
            </button>
            <button
              onClick={() => handleScore("0,0,40,49")}
              className={score == "0,0,40,49" ? "selected" : ""}
            >
              0-0 | 40-49
            </button>
            <button
              onClick={() => handleScore("0,0,50,59")}
              className={score == "0,0,50,59" ? "selected" : ""}
            >
              0-0 | 50-59
            </button>
            <button
              onClick={() => handleScore("0,0,60,69")}
              className={score == "0,0,60,69" ? "selected" : ""}
            >
              0-0 | 60-69
            </button>
            <button
              onClick={() => handleScore("0,0,50,59")}
              className={score == "0,0,70,79" ? "selected" : ""}
            >
              0-0 | 70-79
            </button>
            <button
              onClick={() => handleScore("0,0,80,89")}
              className={score == "0,0,80,89" ? "selected" : ""}
            >
              0-0 | 80-89
            </button>
            <button
              onClick={() => handleScore("0,0,90,99")}
              className={score == "0,0,90,99" ? "selected" : ""}
            >
              0-0 | 90-99
            </button>
            <button
              onClick={() => handleScore("0,0,50,59")}
              className={score == "0,0,50,59" ? "selected" : ""}
            >
              0-0 | 100-150
            </button>
          </div>
          {/* 1 to 9 someting */}
          <div className="card" style={{ animationDelay: "0.5s" }}>
            <h2>1 - 9 | Upto 150</h2>
            <button
              onClick={() => handleScore("1,9,1,9")}
              className={score == "1,9,1,9" ? "selected" : ""}
            >
              1-9 | 1-9
            </button>
            <button
              onClick={() => handleScore("1,9,11,19")}
              className={score == "1,9,11,19" ? "selected" : ""}
            >
              1-9 | 10-19
            </button>
            <button
              onClick={() => handleScore("1,9,21,29")}
              className={score == "1,9,21,29" ? "selected" : ""}
            >
              1-9 | 20-29
            </button>
            <button
              onClick={() => handleScore("1,9,30,39")}
              className={score == "1,9,30,39" ? "selected" : ""}
            >
              1-9 | 30-39
            </button>
            <button
              onClick={() => handleScore("1,9,40,49")}
              className={score == "1,9,40,49" ? "selected" : ""}
            >
              1-9 | 40-49
            </button>
            <button
              onClick={() => handleScore("1,9,50,59")}
              className={score == "1,9,50,59" ? "selected" : ""}
            >
              1-9 | 50-59
            </button>
            <button
              onClick={() => handleScore("1,9,60,69")}
              className={score == "1,9,60,69" ? "selected" : ""}
            >
              1-9 | 60-69
            </button>
            <button
              onClick={() => handleScore("1,9,70,79")}
              className={score == "1,9,70,79" ? "selected" : ""}
            >
              1-9 | 70-79
            </button>
            <button
              onClick={() => handleScore("1,9,80,89")}
              className={score == "1,9,80,89" ? "selected" : ""}
            >
              1-9 | 80-89
            </button>
            <button
              onClick={() => handleScore("1,9,90,99")}
              className={score == "1,9,90,99" ? "selected" : ""}
            >
              1-9 | 90-99
            </button>
            <button
              onClick={() => handleScore("1,9,100,150")}
              className={score == "1,9,100,150" ? "selected" : ""}
            >
              1-9 | 100-150
            </button>
          </div>
          {/* 10 to someting */}
          <div className="card" style={{ animationDelay: "1s" }}>
            <h2>10 - 19 | Upto 150</h2>
            <button
              onClick={() => handleScore("10,19,10,19")}
              className={score == "10,19,10,19" ? "selected" : ""}
            >
              10-19 | 10-19
            </button>
            <button
              onClick={() => handleScore("10,19,20,29")}
              className={score == "10,19,20,29" ? "selected" : ""}
            >
              10-19 | 20-29
            </button>
            <button
              onClick={() => handleScore("10,19,30,39")}
              className={score == "10,19,30,39" ? "selected" : ""}
            >
              10-19 | 30-39
            </button>
            <button
              onClick={() => handleScore("10,19,40,49")}
              className={score == "10,19,40,49" ? "selected" : ""}
            >
              10-19 | 40-49
            </button>
            <button
              onClick={() => handleScore("10,19,50,59")}
              className={score == "10,19,50,59" ? "selected" : ""}
            >
              10-19 | 50-59
            </button>
            <button
              onClick={() => handleScore("10,19,60,69")}
              className={score == "10,19,60,69" ? "selected" : ""}
            >
              10-19 | 60-69
            </button>
            <button
              onClick={() => handleScore("10,19,70,79")}
              className={score == "10,19,70,79" ? "selected" : ""}
            >
              10-19 | 70-79
            </button>
            <button
              onClick={() => handleScore("10,19,80,89")}
              className={score == "10,19,80,89" ? "selected" : ""}
            >
              10-19 | 80-89
            </button>
            <button
              onClick={() => handleScore("10,19,90,99")}
              className={score == "10,19,90,99" ? "selected" : ""}
            >
              10-19 | 90-99
            </button>
            <button
              onClick={() => handleScore("10,19,100,150")}
              className={score == "10,19,100,150" ? "selected" : ""}
            >
              10-19 | 100-150
            </button>
          </div>
          {/* Consdition 20 to 29 */}
          <div className="card" style={{ animationDelay: "1.5s" }}>
            <h2>20 - 29 | Upto 150</h2>
            <button
              onClick={() => handleScore("20,29,20,29")}
              className={score == "20,29,20,29" ? "selected" : ""}
            >
              20-29 | 20-29
            </button>
            <button
              onClick={() => handleScore("20,29,30,39")}
              className={score == "20,29,30,39" ? "selected" : ""}
            >
              20-29 | 30-39
            </button>
            <button
              onClick={() => handleScore("20,29,40,49")}
              className={score == "20,29,40,49" ? "selected" : ""}
            >
              20-29 | 40-49
            </button>
            <button
              onClick={() => handleScore("20,29,50,59")}
              className={score == "20,29,50,59" ? "selected" : ""}
            >
              20-29 | 50-59
            </button>
            <button
              onClick={() => handleScore("20,29,60,69")}
              className={score == "20,29,60,69" ? "selected" : ""}
            >
              20-29 | 60-69
            </button>
            <button
              onClick={() => handleScore("20,29,70,79")}
              className={score == "20,29,70,79" ? "selected" : ""}
            >
              20-29 | 70-79
            </button>
            <button
              onClick={() => handleScore("20,29,80,89")}
              className={score == "20,29,80,89" ? "selected" : ""}
            >
              20-29 | 80-89
            </button>
            <button
              onClick={() => handleScore("20,29,90,99")}
              className={score == "20,29,90,99" ? "selected" : ""}
            >
              20-29 | 90-99
            </button>
            <button
              onClick={() => handleScore("20,29,100,150")}
              className={score == "20,29,100,150" ? "selected" : ""}
            >
              20-29 | 100-150
            </button>
          </div>
          {/* 30 t0 40  */}
          <div className="card" style={{ animationDelay: "2s" }}>
            <h2>30 - 39 | Upto 150</h2>
            <button
              onClick={() => handleScore("30,39,30,39")}
              className={score == "30,39,30,39" ? "selected" : ""}
            >
              30-39 | 30-39
            </button>
            <button
              onClick={() => handleScore("30,39,40,49")}
              className={score == "30,39,40,49" ? "selected" : ""}
            >
              30-39 | 40-49
            </button>
            <button
              onClick={() => handleScore("30,39,50,59")}
              className={score == "30,39,50,59" ? "selected" : ""}
            >
              30-39 | 50-59
            </button>
            <button
              onClick={() => handleScore("30,39,60,69")}
              className={score == "30,39,60,69" ? "selected" : ""}
            >
              30-39 | 60-69
            </button>
            <button
              onClick={() => handleScore("30,39,70,79")}
              className={score == "30,39,70,79" ? "selected" : ""}
            >
              30-39 | 70-79
            </button>{" "}
            <button
              onClick={() => handleScore("30,39,80,89")}
              className={score == "30,39,80,89" ? "selected" : ""}
            >
              30-39 | 80-89
            </button>
            <button
              onClick={() => handleScore("30,39,90,99")}
              className={score == "30,39,90,99" ? "selected" : ""}
            >
              30-39 | 90-99
            </button>
            <button
              onClick={() => handleScore("30,39,100,150")}
              className={score == "30,39,100,150" ? "selected" : ""}
            >
              30-39 | 100-150
            </button>
          </div>
          <div className="card" style={{ animationDelay: "2.5s" }}>
            <h2>30 - 39 | Upto 150</h2>
            <button
              onClick={() => handleScore("40,49,40,49")}
              className={score == "40,49,40,49" ? "selected" : ""}
            >
              40-49 | 40-49
            </button>
            <button
              onClick={() => handleScore("40,49,50,59")}
              className={score == "40,49,50,59" ? "selected" : ""}
            >
              40-49 | 50-59
            </button>
            <button
              onClick={() => handleScore("40,49,60,69")}
              className={score == "40,49,60,69" ? "selected" : ""}
            >
              40-49 | 60-69
            </button>
            <button
              onClick={() => handleScore("40,49,70,79")}
              className={score == "40,49,70,79" ? "selected" : ""}
            >
              40-49 | 70-79
            </button>
            <button
              onClick={() => handleScore("40,49,80,89")}
              className={score == "40,49,80,89" ? "selected" : ""}
            >
              40-49 | 80-89
            </button>
            <button
              onClick={() => handleScore("40,49,90,99")}
              className={score == "40,49,90,99" ? "selected" : ""}
            >
              40-49 | 90-99
            </button>
            <button
              onClick={() => handleScore("40,49,100,150")}
              className={score == "40,49,100,150" ? "selected" : ""}
            >
              40-49 | 100-150
            </button>
          </div>
        </div>
      </div>
      <div className="main">
        <div
          className="main-content"
          style={{
            marginTop: "42px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            className="card col-12 ui-note"
            style={{ margin: "5px 0px", display: "flex", width: "100%" }}
          >
            <div className="note" style={{ width: "100%" }}>
              <i>
                <b>
                  <i>{player} </i>
                </b>
              </i>

              <span>
                {/* 1<sup>No</sup> (0,23) - 2<sup>Yes</sup> (24,43) */}
                {score}
              </span>
            </div>
          </div>
          {/* Main Card Starts */}
          <div className="main-card col-12 ui-player-table">
            {filterData?.map((list) => {
              return (
                <div className="card">
                  <div className="middle">
                    <label style={{ display: "flex", flexDirection: "column" }}>
                      <span>{list.player1Score}</span>
                      <b
                        style={{
                          fontWeight: "500",
                          color: " rgba(65, 65, 65, 0.6)",
                        }}
                      >
                        {list.player1Name}
                      </b>
                    </label>
                    <label className="result">
                      {list.result
                        .trim()
                        .split(",")
                        .map((score) => {
                          return (
                            <span
                              className="blue"
                              style={{ margin: "0px 2px 2px 0px" }}
                            >
                              {score}
                            </span>
                          );
                        })}

                      {/* <span className="green">First</span> */}
                    </label>
                    <label
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "right",
                      }}
                    >
                      <span>{list.player2Score}</span>
                      <b
                        style={{
                          fontWeight: "500",
                          color: " rgba(65, 65, 65, 0.6)",
                        }}
                      >
                        {list.player2Name}
                      </b>
                    </label>
                  </div>
                  {/* <div className="bottom">
                    <label className="state">
                      <i className="note">{list.player1Score}</i>
                    </label>
                    <label>{list.result}</label>
                    <label className="state">
                      <i className="note">{list.player2Score}</i>
                    </label>
                  </div> */}
                </div>
              );
            })}
          </div>
        </div>
        {filterData.length <= 0 ? <NoData /> : ""}
      </div>
    </div>
  );
};
export default Layout;
