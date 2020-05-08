import React from "react";
import "./index.css";
import Axios from "axios";

export default function TodoGenerator(props) {
  const handleSubmit = async (event) => {
    event.preventDefault();    
    const title = event.target.title.value;
    const description = event.target.description.value;

    await Axios.post("http://192.168.0.53:3001/tasks", { title, description });
    props.refreshCallback();
    const form = document.querySelector('#todogenerator');
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} id="todogenerator" className="todogenerator mt-5">
      <label>Title</label>
      <input type="text" name="title" required />
      <label>Description</label>
      <input type="text" name="description" />
      <button type="submit" className="btn btn-primary mt-2">
        ADD TASK
      </button>
    </form>
  );
}
