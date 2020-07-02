import React from "react";
// import axios from "axios";
const AddRecipie = () => {
  const [title, setTitle] = React.useState("Fajita");
  const [body, setBody] = React.useState("How to make Fajita");
  //   const addRecipe = () => {
  //     axios
  //       .post("https://usman-recipes.herokuapp.com/api/recipes", { title, body })
  //       .then((res) => {
  //         console.log(res.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };
  return (
    <div>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="body">Body</label>
        <input
          id="body"
          type="text"
          className="form-control"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>

      <button className="btn btn-info">Button</button>
    </div>
  );
};

export default AddRecipie;
