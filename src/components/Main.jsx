import React, { useRef, useState } from "react";
import "../scss/Main.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Col ,Row } from "reactstrap";

const Main = () => {
  // eslint-disable-next-line no-unused-vars
  /* eslint-disable camelcase */
  const [listItem, setListItem] = useState([
    {
      createInput: false,
      listItem: [
        {
          name_item: "item 1",
          hiden_item: false,
        },
        {
          name_item: "item 2",
          hiden_item: false,
        },
        {
          name_item: "item 3",
          hiden_item: true,
        },
      ],
    },
  ]);

  const createTicket = () => {
    const tempList = [...listItem];
    tempList.push({
      createInput: false,
      listItem: [],
    });
    setListItem(tempList);
  };

  const activeInputCreate = (index) => {
    const tempList = [...listItem];
    tempList[index].createInput = true;
    setListItem(tempList);
  };

  const refPreValue = useRef({
    name_item: "",
    hiden_item: false,
  });

  const handleCreateItem = (e, index) => {
    const tempList = [...listItem];
    if (e.keyCode === 13) {
      tempList[index].listItem.push(refPreValue.current);
    } else if (e.keyCode === 27) {
      tempList[index].createInput = false;
      refPreValue.current = "";
    }

    setListItem(tempList);
  };

  const handleHidenItem = (e, indexGroup, index) => {
    const tempList = [...listItem];
    tempList[indexGroup].listItem[index].hiden_item = e.target.checked;
    setListItem(tempList);
  };

  const handleRemoveItem = (indexGroup, index) => {
    const tempList = [...listItem];
    tempList[indexGroup].listItem.splice(index, 1);
    setListItem(tempList);
  };

  const handleOnChange = (e) => {
    const { value } = e.target;
    refPreValue.current.name_item = value;
  };

  const renderItem = (e, indexGroup) => {
    return (
      e.length > 0 &&
      e.map((item, index) => {
        return (
          <div className="item-box">
            <input
              type="checkbox"
              checked={item.hiden_item}
              onChange={(event) => handleHidenItem(event, indexGroup, index)}
            />
            <span
              className={item.hiden_item == false ? "mx-2" : "mx-2 hidden-item"}
            >
              {item.name_item}
            </span>

            <div className="ml-auto">
              <FontAwesomeIcon
                icon={faXmark}
                onClick={() => handleRemoveItem(indexGroup, index)}
              />
            </div>
          </div>
        );
      })
    );
  };

  const renderList = () => {
    return (
      listItem.length > 0 &&
      listItem.map((e, indexGroup) => {
        return (
          <Col xs="3" className="mb-2">
            <div className="card ticket-box">
              <div className="header-ticket">
                <span>Ticket {indexGroup + 1}</span>
                <FontAwesomeIcon
                  icon={faPlus}
                  onClick={() => activeInputCreate(indexGroup)}
                />
              </div>
              <div>
                <div className="content-ticket">
                  {e.createInput == true ? (
                    <div className="input-box">
                      <input
                        onChange={(event) => handleOnChange(event)}
                        onKeyDown={(event) =>
                          handleCreateItem(event, indexGroup)
                        }
                        className="form-control"
                      />
                    </div>
                  ) : null}
                  {renderItem(e.listItem, indexGroup)}
                </div>
              </div>
            </div>
          </Col>
        );
      })
    );
  };

  return (
    <div className="main-container container-fluid">
      <div className="main-title">
        <span>dashboard</span>

        <div className="ticket-box">
          <input className="form-control"></input>
          <button
            type="button"
            className="btn-ticket"
            onClick={() => createTicket()}
          >
            Create
          </button>
        </div>
      </div>
      <div className="list-container">
        <Row>{renderList()}</Row>
      </div>
    </div>
  );
};

export default Main;
