import React, { useEffect, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import db from "./FirbaseConfig";
import back from "../assets/images/back.svg";
import background from "../assets/images/Background.png";
import { Link } from "react-router-dom";
const AddData = () => {
  // const colRef = collection(db, "player");
  const [IsSucess, setIsSucess] = useState(false);
  const handleLadduAddMatch = (e) => {
    e.preventDefault();

    const addForm = document.querySelector("#addLadduData");

    const colRef = collection(db, "Laddu");
    addDoc(colRef, {
      player1Name: addForm.player1Name.value,
      player1Role: addForm.player1Role.value,
      player1Score: addForm.player1Score.value,
      player2Name: addForm.player2Name.value,
      player2Role: addForm.player2Role.value,
      player2Score: addForm.player2Score.value,
      league: addForm.league.value,
      result: addForm.result.value,
    })
      .then((response) => {
        setIsSucess(false);
        setTimeout(() => {
          setIsSucess(true);
        }, [3000]);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleChange = (e) => {
    return e.target.value;
  };

  return (
    <div className="ui-addLadduMatch" id="addWapper">
      <div className="cover" style={{ backgroundImage: `url(${background})` }}>
        <h2 className="title">Add Laddu Match</h2>
        <div className="close">
          <Link to={"/"}>
            <img src={back} alt="back" />
          </Link>
        </div>
      </div>
      <div className="content">
        <div className="card">
          <div className="ui-add-data">
            <div className="form-elements">
              <form
                id="addLadduData"
                onSubmit={handleLadduAddMatch}
                className="row"
              >
                <div className="col-6 col-sm-6 col-md-4">
                  <label className="form-label">Player1 Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="player1Name"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-6 col-sm-6 col-md-4">
                  <label className="form-label">Player1 Role</label>
                  <select
                    type="text"
                    className="form-control"
                    name="player1Role"
                    onChange={handleChange}
                    required
                  >
                    <option value="wk">Wicket Keeper</option>
                    <option value="captain">Captain</option>
                    <option value="player">Player</option>
                  </select>
                </div>
                <div className="col-6 col-sm-6 col-md-4">
                  <label className="form-label">Player1 Score</label>
                  <input
                    type="text"
                    className="form-control"
                    name="player1Score"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-6 col-sm-6 col-md-4">
                  <label className="form-label">Player2 Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="player2Name"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-6 col-sm-6 col-md-4">
                  <label className="form-label">Player2 Role</label>
                  <select
                    type="text"
                    className="form-control"
                    name="player2Role"
                    onChange={handleChange}
                    required
                  >
                    <option value="wk">Wicket Keeper</option>
                    <option value="captain">Captain</option>
                    <option value="player">Player</option>
                  </select>
                </div>
                <div className="col-6 col-sm-6 col-md-4">
                  <label className="form-label">Player2 Score</label>
                  <input
                    type="text"
                    className="form-control"
                    name="player2Score"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-6 col-sm-6 col-md-4">
                  <label className="form-label">League</label>
                  <input
                    type="text"
                    className="form-control"
                    name="league"
                    required
                    // value={"BPL_W"}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-6 col-sm-6 col-md-4">
                  <label className="form-label">Result</label>
                  <input
                    type="text"
                    className="form-control"
                    name="result"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div
                  className="d-grid btn-group justify-content-center col-12 mx-auto"
                  style={{ margin: "16px" }}
                >
                  <button className="btn btn-primary blue-btn">Add Data</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className={IsSucess === true ? "sucessBlock" : "sucessBlock off"}>
        <div className="sucess">
          <p>Sucessfully added !</p>
        </div>
      </div>
    </div>
  );
};
export default AddData;
