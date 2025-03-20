import Nodata from "../assets/images/NoData.png";
const NoData = () => {
  return (
    <div className="no-data">
      <img src={Nodata} alt="no-data" />
      <p>A rare day off !</p>
      <label>No matches on this Data !</label>
    </div>
  );
};
export default NoData;
