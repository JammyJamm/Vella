import { useEffect, useMemo, useState } from "react";

const NoteResult = (player) => {
  console.log(player);
  const [note, setNote] = useState("");
  const arrScore = player.score.split(",");
  const arrScoreMin = parseInt(arrScore[1]);
  const arrScoreMax = parseInt(arrScore[3]);
  useEffect(() => {
    if (player.dataLength !== 0) {
      switch (player.player) {
        case "PLAYER,PLAYER":
          // Min Player score 0
          if (arrScoreMin === 0 && arrScoreMax <= 39)
            return setNote(" Don't go Captain or WK // No - Player 37");
          if (arrScoreMin === 0 && arrScoreMax >= 39)
            return setNote(
              "Don't go Captain or WK // Wait 40 & N0 - Player 67"
            );
          // Min Player score Below 37
          if (arrScoreMin <= 37 && arrScoreMax <= 39)
            return setNote("Comming soon !");
          if (arrScoreMin <= 37 && arrScoreMax >= 39)
            return setNote("Comming soon !");
          // Min Player score above 37
          if (arrScoreMin >= 37 && arrScoreMax <= 100)
            return setNote("Comming soon !");
          if (arrScoreMin >= 37 && arrScoreMax >= 100)
            return setNote("Comming soon !");
          break;
        case "PLAYER,WK":
          // Min Player score 0
          if (arrScoreMin === 0 && arrScoreMax <= 39)
            return setNote(
              "Don't go Captain or WK | Wait until 40 - Bet under 70"
            );
          if (arrScoreMin === 0 && arrScoreMax >= 39)
            return setNote(
              "Don't go Captain or WK | Wait until 40 - Bet under 70"
            );
          // Min Player score Below 37
          if (arrScoreMin <= 37 && arrScoreMax <= 39)
            return setNote("Comming soon !");
          if (arrScoreMin <= 37 && arrScoreMax >= 39)
            return setNote("Comming soon !");
          // Min Player score above 37
          if (arrScoreMin >= 37 && arrScoreMax <= 100)
            return setNote("Comming soon !");
          if (arrScoreMin >= 37 && arrScoreMax >= 100)
            return setNote("Comming soon !");
          break;
        case "PLAYER,CAPTAIN":
          // Min Player score 0
          if (arrScoreMin === 0 && arrScoreMax <= 39)
            return setNote(" Don't go Captain or WK // No - Player 37");
          if (arrScoreMin === 0 && arrScoreMax >= 39)
            return setNote(
              "Don't go Captain or WK // Wait 40 & N0 - Player 67"
            );
          // Min Player score Below 37
          if (arrScoreMin <= 37 && arrScoreMax <= 39)
            return setNote("Comming soon !");
          if (arrScoreMin <= 37 && arrScoreMax >= 39)
            return setNote("Comming soon !");
          // Min Player score above 37
          if (arrScoreMin >= 37 && arrScoreMax <= 100)
            return setNote("Comming soon !");
          if (arrScoreMin >= 37 && arrScoreMax >= 100)
            return setNote("Comming soon !");
          break;

        case "WK,CAPTAIN":
          // Min Player score 0
          if (arrScoreMin === 0 && arrScoreMax <= 39)
            return setNote(" Don't go Captain or WK // No - Player 37");
          if (arrScoreMin === 0 && arrScoreMax >= 39)
            return setNote(
              "Don't go Captain or WK // Wait 40 & N0 - Player 67"
            );
          // Min Player score Below 37
          if (arrScoreMin <= 37 && arrScoreMax <= 39)
            return setNote("Comming soon !");
          if (arrScoreMin <= 37 && arrScoreMax >= 39)
            return setNote("Comming soon !");
          // Min Player score above 37
          if (arrScoreMin >= 37 && arrScoreMax <= 100)
            return setNote("Comming soon !");
          if (arrScoreMin >= 37 && arrScoreMax >= 100)
            return setNote("Comming soon !");
          break;
        default:
          return setNote("No Data !");
          break;
      }
    } else {
      return setNote("No Luck Today !");
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
      <p className="typing">{player.sendmessage}</p>
    </div>
  );
};
const resultNoteFunc = (player) => {
  if (player === "player1") {
    return "Player 1 is playing";
  }
};
export default NoteResult;
