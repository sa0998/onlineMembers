import React, { useState, useEffect } from "react";
import GithubUsers from "./membersCard";

const UseEffectAPI = () => {
  const [usersLatest, setUsersLatest] = useState([]);
  const [usersError, setUsersError] = useState("");

  const getUsers = async () => {
    try {
      const response = await fetch(
        "https://utilities.computan.com/time-reports/onlinejson.php#"
      );
      const data = await response.json();
      var finalData = data.data;
      const uniqueList = [
        ...new Set(
          data.data.map((curElem) => {
            return curElem.team;
          })
        ),
      ];

      var teamUsers = [];
      for (var i = 0; i < uniqueList.length; i++) {
        var team = uniqueList[i];
        var newUsers = finalData.filter((x) => x.team == team);
        teamUsers.push(newUsers);
      }
      setUsersLatest(teamUsers);
    }
    catch (error) {
      var newError;
      newError = error
      console.log("my error is " + error);
    }
    setUsersError(newError);
  };

  const MINUTE_MS = 5000;

  useEffect(() => {
    getUsers();
    const interval = setInterval(() => {
      getUsers();
      console.log("Logs every minute");
    }, MINUTE_MS);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
    <GithubUsers newUsersLatest={usersLatest} usersNewError = {usersError} />
    </div>
  );
};

export default UseEffectAPI;
