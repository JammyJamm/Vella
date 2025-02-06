import { Link } from "react-router-dom";
import "./style.css";
const Layout = () => {
  return (
    <div className="layout">
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
          <li>
            <span>0,0</span>
            <span>0,1</span>
            <span>0,10</span>
            <span>0,20</span>
            <span>0,30</span>
            <span>1,1</span>
            <span>1,10</span>
            <span>1,20</span>
            <span>1,30</span>
          </li>
        </ul>
      </nav>

      {/* Bottom Menu Starts */}
      <div className="bottom-menu">
        <button className="add-btn">
          <img
            src="https://raw.githubusercontent.com/JammyJamm/JSON_Data/50d06ea24cee13c48b1d841f654a63427a205969/keeperBat.svg"
            alt="keeper&Bat"
          />
        </button>
        <button className="add-btn">
          <img
            src="https://raw.githubusercontent.com/JammyJamm/JSON_Data/363a4623ccb014c36ace59c04e6cb6979ad0d708/add.svg"
            alt="add"
          />
        </button>
      </div>
      <div className="main">
        <div className="main-content">
          <table className="striped-table">
            <thead>
              <tr>
                <th>Index</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0</td>
                <td>0,0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Layout;
