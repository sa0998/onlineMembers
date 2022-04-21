import React, { useState, useEffect } from "react";
import GithubUsers from "./membersCard";

const UseEffectAPI = () => {
  const [users, setUsers] = useState([]);
  const [menuList, setMenuList] = useState([]);
  const [newUserList, setUserList] = useState([]);

  //   console.log(users)
  const filterItemNew = (category, users) => {
    const updatedList = users.filter((curElem) => {
      return curElem.team === category;
    });
    setUserList(updatedList);
  };
  const getUsers = async () => {
    try {
      const response = await fetch(
        "https://utilities.computan.com/time-reports/onlinejson.php#"
      );
      const data = await response.json();
      setUsers(data.data);
      const uniqueList = [
        ...new Set(
          data.data.map((curElem) => {
              console.log(curElem)
            return curElem.team;
          })
        ),
      ];
      setMenuList(uniqueList);
    //   console.log(users);
    } catch (error) {
      console.log("my error is " + error);
    }
  };

  const MINUTE_MS = 5000;

  useEffect(() => {
    // getUsers();
    const interval = setInterval(() => {
    getUsers();
      console.log("Logs every minute");
    }, MINUTE_MS);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <GithubUsers
        users={users}
        newUsers={newUserList}
        menuList={menuList}
        filterItem={filterItemNew}
      />
      {/* {console.log(menuList)} */}
      {/* {console.log(setUserList)}  */}
    </>
  );
};

export default UseEffectAPI;
