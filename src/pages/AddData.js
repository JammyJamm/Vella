import { Link } from "react-router-dom";

const AddData = () => {
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
        <ul>
          <li></li>
        </ul>
      </nav>
    </div>
  );
};
export default AddData;
