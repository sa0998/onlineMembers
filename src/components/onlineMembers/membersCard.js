import React, { useState } from "react";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const GithubUsers = ({ newUsersLatest,usersNewError }) => {
  const [cur_section, setCurSection] = useState("Niagara Kings");

  const activeClass = (team) =>{
    setCurSection(team[0].team);
  }

  return (
    <div>
      <div className="container-fluid mt-5">
      <h3> test</h3>
        <div className="row text-center">
          <div className="accordion">
            <div className="accordion-item">
              {(usersNewError !== '' ?
                newUsersLatest.map((curElem, index) => {
                return (
                  <>
                    <div
                      className={"teamMain "+
                          (cur_section == curElem[0].team ? "active" : "")
                        }
                      onClick={() => activeClass(curElem)}>
                      <div className="teamNameMain">
                        <div className="teamName">{curElem[0].team}</div>
                        <div className="teamIcon">+</div>
                      </div>
                      <div
                        className={
                          "teamDataMain " +
                          (cur_section == curElem[0].team ? "active" : '')
                        }>
                        {curElem.map((newLoop) => {
                          return (
                            <>
                            <div className="teamDataMain-inner">
                              <div className={`teamData ${newLoop.status}`}>
                                <div className="teamMemberName">
                                  {newLoop.name}
                                </div>
                                <div className="teamMemberTitle">
                                  {newLoop.title}
                                </div>
                              </div>
                              </div>
                            </>
                          );
                        })}
                      </div>
                    </div>
                  </>
                );
              }) :'Thier is some error in the source' )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GithubUsers;
