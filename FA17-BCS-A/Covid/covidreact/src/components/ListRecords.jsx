import React, { useEffect } from "react";
import axios from "axios";
const ListRecord = () => {
  const [records, setRecords] = React.useState([]);
  useEffect(() => {
    axios
      .get("https://usman-recipes.herokuapp.com/api/recipes")
      .then((res) => {
        setRecords(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h1>List Records</h1>
      {records.map((r, index) => (
        <div key={index}>
          <h3>{r.title}</h3>
          <p>{r.body}</p>
        </div>
      ))}
    </div>
  );
};

export default ListRecord;
