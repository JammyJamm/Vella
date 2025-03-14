import { useEffect, useMemo, useState } from "react";

const NoteResult = (player) => {
  //console.log(player);
  const [note, setNote] = useState("");

  useEffect(() => {
    switch (player.player) {
      case "PLAYER,PLAYER":
        return setNote("Yes - Player sholud cross 27");
      case "PLAYER,WK":
        setNote("N0 -  Wicketkeeper Score Or 70");
        break;
      case "PLAYER,CAPTAIN":
        return setNote("PLAYER,CAPTAIN");

      case "WK,CAPTAIN":
        setNote("WK,CAPTAIN");
        break;

      default:
        break;
    }
  }, [player]);
  //   switch (player.player) {
  //     case "PLAYER,PLAYER":
  //       return setNote("PLAYER,PLAYER");

  //     case "PLAYER,CAPTAIN":
  //       return setNote("PLAYER,CAPTAIN");

  //     case "PLAYER,WK":
  //       setNote("PLAYER,WK");
  //       break;
  //     case "WK,CAPTAIN":
  //       setNote("WK,CAPTAIN");
  //       break;

  //     default:
  //       break;
  //   }
  return (
    <div className="note-result">
      <p>{note}</p>
    </div>
  );
};
const resultNoteFunc = (player) => {
  if (player === "player1") {
    return "Player 1 is playing";
  }
};
export default NoteResult;
