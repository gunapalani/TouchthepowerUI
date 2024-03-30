import { useState } from "react";
import { useForm } from "react-hook-form";
import "./prayer-request.css";

const PrayerRequest = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [showSucessPopup, setShowSucessPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = () => {
    setLoading(true);

    fetch(
      "https://script.google.com/macros/s/AKfycbyFEzO451eFZ84Z4D1cTU-AlQzmI7o3ydiTabTLUVImzsRE1KIBksBPHhdCXJRcOpyoDA/exec",
      {
        method: "POST",
        body: new FormData(
          document.getElementById("form-data") as HTMLFormElement
        ),
      }
    )
      .then((response) => response.json())
      .then((responseData) => {
        setLoading(false);
        setShowSucessPopup(true);
        reset();
      })
      .catch((error) => {
        console.error("Submission failed:", error);
      });
  };

  const toggleSubmissionForm = () => {
    setShowSucessPopup(false);
  };

  return (
    <div>
      {loading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <div>
          {showSucessPopup ? (
            <div className="modal-wrap">
              <div className="modal-content">
                <div className="flex flex-col justify-center items-center gap-4 bg-white">
                  <img
                    alt="sucess-image"
                    className="w-14 h-14 "
                    src="/assets/success-icon.svg"
                  />
                  <div className="text-center">
                    Your form has been submitted successfully
                  </div>
                  <button
                    onClick={toggleSubmissionForm}
                    className=" border-[#0b89f7] border-2 px-4  py-1 rounded-sm text-[#0b89f7] font-bold"
                  >
                    Ok
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      )}
      <div id="prayer" className="bg-white p-10" >
        <div className="mt-6 mb-2 text-[#045a94] text-center text-3xl font-medium" >
          Prayer Request
        </div>

        <div className="flex justify-center">
          <div className="text-center mb-6 border-[3px] mt-2 rounded-md w-24 border-[#045a94]"></div>
        </div>
        <form id="form-data" onSubmit={handleSubmit(onSubmit)} >
          <div className="md:flex md:h-96">
            <div className="md:w-1/2 p-4 flex justify-center items-start mt-5 border-b-2 md:border-b-0 md:border-r-2">
              <div className="">
                <div className="checkbox">
                  <input
                    type="checkbox"
                    id="relationship"
                    name="Problem"
                    value="Problems in Relationship"
                  />
                  <label htmlFor="relationship">Problems in Relationship</label>
                  <br />
                </div>
                <div className="checkbox">
                  <input
                    type="checkbox"
                    id="health"
                    name="Problem"
                    value="Problems in Health"
                  />
                  <label htmlFor="health"> Problems in Health</label>
                  <br />
                </div>
                <div className="checkbox">
                  <input
                    type="checkbox"
                    id="finance"
                    name="Problem"
                    value="Problems in Finance"
                  />
                  <label htmlFor="finance"> Problems in Finance</label>
                  <br />
                </div>
                <div className="checkbox">
                  <input
                    type="checkbox"
                    id="social"
                    name="Problem"
                    value="bicycle"
                  />
                  <label htmlFor="social"> Social Problems</label>
                  <br />
                  <br />
                </div>
              </div>
            </div>
            <div className="md:w-1/2 py-2 md:px-20">
              <input
                type="text"
                className="my-4 w-full py-2 border-b-2 border-[#0b89f7] focus:outline-none"
                placeholder="Name"
                id="name"
                name="Name"
                {...register("Name", { required: true })}
              />
              {errors.Name && (
                <small className="text-red-600">Name is required.</small>
              )}
              <br />
              <input
                type="text"
                className="my-3  w-full py-2 border-b-2 border-[#0b89f7] focus:outline-none"
                placeholder="Email"
                id="email"
                name="Email"
                {...register("Email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value:
                      /^[a-zA-Z0-9]{0,61}@[a-zA-Z0-9]{0,255}.[a-zA-Z0-9]{0,24}$/,
                    message: "Invalid Email",
                  },
                })}
              />
              {errors.Email?.message ? (
                <small className="text-red-600">
                  {errors?.Email?.message.toString()}
                </small>
              ) : (
                <></>
              )}
              <br />
              <textarea
                rows={4}
                className="my-4 w-full py-2 border-[1.8px] border-gray-400 focus:outline-none"
                id="message"
                placeholder="Type your message here"
                name="Message"
                {...register("Message", { required: true })}
              ></textarea>
              {errors.Message && (
                <small className="text-red-600">Message is required.</small>
              )}
              <div className="flex justify-center md:justify-end items-center">
                <button className="mt-4 px-10 py-1 bg-[#0b89f7] text-white font-semibold text-sm rounded-sm">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PrayerRequest;
