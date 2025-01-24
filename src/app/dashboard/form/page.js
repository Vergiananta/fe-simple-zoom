import { useState } from "react";

export default function Form() {
  const [form, setForm] = useState();

  const handleOnChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <main>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            onChange={(e) => handleOnChange(e.target.name, e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email To</label>
          <input
            type="text"
            className="form-control"
            id="emailTo"
            name="emailTo"
            onChange={(e) => handleOnChange(e.target.name, e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email Cc</label>
          <input
            type="text"
            className="form-control"
            id="emailCc"
            name="emailCc"
            onChange={(e) => handleOnChange(e.target.name, e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            onChange={(e) => handleOnChange(e.target.name, e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </main>
  );
}
