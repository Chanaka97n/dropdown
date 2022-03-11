import React, { useRef } from "react";
import { useDetectOutsideClick } from "./component/useDetectOutsideClick";
import "./App.css";
import logo from './user.png'

function App() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  return (
    <div className="container">
      <div className="action">
        <button onClick={onClick} className="profile">
          <img
            src={logo}
            alt="User avatar"
          />
        </button>
        <nav
          ref={dropdownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
           <h3>
                User Account
                <div>
                    Operational Team
                </div>
            </h3>
          <ul>
            <li>
              <span class="material-icons icons-size"></span>
              <a href="#">My Profile</a>
            </li>
            <li>
              <span class="material-icons icons-size"></span>
              <a href="#">Edit Account</a>
            </li>
            <li>
              <span class="material-icons icons-size"></span>
              <a href="#">Comments</a>
            </li>
            <li>
              <span class="material-icons icons-size"></span>
              <a href="#">Budget</a>
            </li>
            <li>
              <span class="material-icons icons-size"></span>
              <a href="#">Finance</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default App;
