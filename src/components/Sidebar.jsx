import React, { useState } from "react";
import "../scss/Sidebar.scss";
import imgUpArrow from "../img/up-arrow.svg";
import imgDownArrow from "../img/down-arrow.svg";

const Sidebar = () => {
  const [indexGroup, setIndexGruop] = useState();

  const handleItem = (index) => {
    if (index === indexGroup) setIndexGruop(-1);
    else setIndexGruop(index);
  };

  const renderItem = (compareIndex) => {
    const listItem = [];
    for (let index = 0; index < 3; index += 1) {
      listItem.push(
        <li
          className={
            compareIndex === indexGroup ? "item-child d-block" : "d-none"
          }
        >
          <span>Item {index + 1}</span>
        </li>
      );
    }
    return listItem;
  };

  const renderGroup = () => {
    const listGroup = [];
    for (let index = 0; index < 3; index += 1) {
      listGroup.push(
        <div
          role="presentation"
          className="item-parent-box"
          onClick={() => handleItem(index)}
          onKeyDown={() => setIndexGruop(index)}
        >
          <div className="title-parent-box">
            <span> Item Parent {index + 1}</span>
            <div className="up-arrow">
              <img
                src={indexGroup === index ? imgDownArrow : imgUpArrow}
                alt=""
              />
            </div>
          </div>
          <ul className="list-item">{renderItem(index)}</ul>
        </div>
      );
    }
    return listGroup;
  };

  return <div className="sidebar-container">{renderGroup()}</div>;
};

export default Sidebar;
