import React from 'react';

const Contact = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
        <div className="container contact_div">
          <div className="row">
            <div className="col-md-6 col-10 mx-auto">
              <form>
                <div className="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter Name"
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Phone No
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="phone"
                    placeholder="Enter Phone No"
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3" cols="5"
                  ></textarea>
                </div>
                <div class="col-12">
                  <button class="btn btn-outline-info" type="submit">
                    Submit form
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
