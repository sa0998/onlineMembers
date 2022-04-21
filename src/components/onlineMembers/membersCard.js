import React from "react";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const GithubUsers = ({ users, menuList, filterItem, newUsers }) => {
  // console.log(filterItem)
  return (
    <div>
      <div className="container-fluid mt-5">
        <div className="row text-center">
          <div className="accordion">
            <div className="accordion-item">
              {menuList.map((curElem) => {
                return (
                  <>
                    <div className="accordion-title">
                      <div onClick={() => filterItem(curElem, users)}>
                        {curElem}
                      </div>
                      <div>+</div>
                    </div>
                  </>
                );
              })}
              {newUsers.map((curElem) => {
                const { name, title, team, status } = curElem;
                return (
                  <>
                    <div className="accordion-content">{name}</div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GithubUsers;
