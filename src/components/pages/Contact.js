import React from "react";

const Contact = () => {
  return (
    <div className="container">
      <div className="py-4">
        <h1>Contact Page</h1>
        <div class="mb-3">
          <label for="name1" class="form-label">
            First Name
          </label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput"
            placeholder="Name"
          />
        </div>
        <div class="mb-3">
          <label for="name2" class="form-label">
            Last Name
          </label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="Name2"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
