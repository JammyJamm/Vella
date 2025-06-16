import { useEffect, useState } from "react";
import { ReactComponent as NoteIcon } from "../assets/images/noteIcon.svg";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
} from "firebase/firestore";
import db from "./FirbaseConfig";
const Prediction = (props) => {
  const [clicking, setClicking] = useState(false);
  const [predictionData, setPredictionData] = useState("");
  const [predictionOBJ, setPredictionOBJ] = useState("");
  const handleClick = () => {
    setClicking(!clicking);
  };
  // Submit code
  const predictionDataFunc = async () => {
    const q = query(collection(db, "Prediction"));
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
      ...doc.data(),
    }));
    //setDetail(data);
    setPredictionData(data);
    // console.log(data);
    filterID(data);
  };
  function filterID(data) {
    setPredictionOBJ(
      data.filter((item) => {
        if (
          item.player.includes(props.player) &&
          item.score.includes(props.score)
        ) {
          setVal(item.prediction);
          props.onSendData(item.prediction);
          return item.id;
        }
      })
    );
    console.log(
      data.filter((item) => {
        if (
          item.player.includes(props.player) &&
          item.score.includes(props.score)
        ) {
          setVal(item.prediction);

          return item.id;
        }
      })
    );
  }
  useEffect(() => {
    predictionDataFunc();
  }, [props.player, props.score]);

  // Handle Prediction
  const handlePrediction = async (e) => {
    e.preventDefault();
    setClicking(!clicking);
    if (predictionOBJ[0] !== undefined) {
      // Update Prediction code
      const docRef = doc(db, "Prediction", predictionOBJ[0].id);
      await updateDoc(docRef, {
        prediction: val,
      });
      props.onSendData(val);
    } else {
      await addDoc(collection(db, "Prediction"), {
        score: props.score,
        player: props.player,
        prediction: val,
      });
      props.onSendData(val);
    }
  };
  // OnType
  const [val, setVal] = useState("");
  const handleChange = (e) => {
    setVal(e.target.value);
  };
  return (
    <div className="noteSection">
      {clicking == true ? (
        <div className="popup-note">
          <div className="textFiled">
            <h2>
              {props.player} - {props.score}
            </h2>
            <textarea
              value={val}
              onChange={handleChange}
              placeholder="Wanna add the prediction..."
            />
            <div className="btn-group">
              <button onClick={handleClick}>Cancel</button>
              <button onClick={handlePrediction} className="red">
                Submit
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="noteImg" onClick={handleClick}>
        <NoteIcon style={{ width: "18px", height: "auto" }} />
      </div>
    </div>
  );
};
export default Prediction;
