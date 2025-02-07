import { addDoc, collection } from "firebase/firestore";
import { Link } from "react-router-dom";
import db from "./FirbaseConfig";

const AddData = () => {
  const handleLadduAddMatch = (e) => {
    e.preventDefault();
    const addForm = document.querySelector("#addLadduData");

    const colRef = collection(db, "Laddu");
    addDoc(colRef, {
      league: addForm.league.value,
      player1Score: addForm.player1Score.value,
      player2Score: addForm.player2Score.value,
      player1Name: addForm.player1Name.value,
      player2Name: addForm.player2Name.value,
      player1Role: addForm.player1Role.value,
      player2Role: addForm.player2Role.value,
      totalScore: addForm.totalScore.value,
    })
      .then((response) => {
        alert("Added");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleChange = (e) => {
    return e.target.value;
  };
  return (
    <div className="Add-layout">
      {/* Nav Bar Starts */}

      <nav className="top-nav">
        <div className="title">
          <Link to={"/"}>
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
          </div>
        </div>
        <div className="main">
          <div className="main-content">
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
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default AddData;
