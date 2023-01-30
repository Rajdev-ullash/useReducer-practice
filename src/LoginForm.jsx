import React, { useReducer } from "react";
import { initialState, reducer } from "./state/formReducer";

const LoginForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const submit = (e) => {
    e.preventDefault();
    console.log(state);
    console.log("Form Submitted");
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content">
        <div className="card flex-shrink-0 w-full mx-6 lg:w-[720px] px-0 lg:px-7  shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="flex flex-col lg:flex-row gap-0 lg:gap-5">
              <div className="basis-1/2">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">First Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="input input-bordered"
                    name="firstName"
                    onBlur={(e) =>
                      dispatch({
                        type: "INPUT",
                        payload: { name: e.target.name, value: e.target.value },
                      })
                    }
                  />
                </div>
              </div>
              <div className="basis-1/2">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Last Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="input input-bordered"
                    name="lastName"
                    onBlur={(e) =>
                      dispatch({
                        type: "INPUT",
                        payload: { name: e.target.name, value: e.target.value },
                      })
                    }
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-0 lg:gap-5">
              <div className="basis-1/2">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="input input-bordered"
                    name="email"
                    onBlur={(e) =>
                      dispatch({
                        type: "INPUT",
                        payload: { name: e.target.name, value: e.target.value },
                      })
                    }
                  />
                </div>
              </div>
              <div className="basis-1/2">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Gender</span>
                  </label>
                  <div className="flex flex-row gap-2">
                    <div className="flex flex-row justify-center gap-1">
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        className="radio radio-primary mt-2"
                        onClick={(e) =>
                          dispatch({
                            type: "INPUT",
                            payload: {
                              name: e.target.name,
                              value: e.target.value,
                            },
                          })
                        }
                      />
                      <label className="label">Male</label>
                    </div>
                    <div className="flex flex-row justify-center gap-1">
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        className="radio radio-primary mt-2"
                        onClick={(e) =>
                          dispatch({
                            type: "INPUT",
                            payload: {
                              name: e.target.name,
                              value: e.target.value,
                            },
                          })
                        }
                      />
                      <label className="label">Female</label>
                    </div>
                    <div className="flex flex-row justify-center gap-1">
                      <input
                        type="radio"
                        name="gender"
                        value="others"
                        className="radio radio-primary mt-2"
                        onClick={(e) =>
                          dispatch({
                            type: "INPUT",
                            payload: {
                              name: e.target.name,
                              value: e.target.value,
                            },
                          })
                        }
                      />
                      <label className="label">Others</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-0 lg:gap-5">
              <div className="basis-1/2">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Education</span>
                  </label>
                  <select
                    className="select select-bordered w-full max-w-xs"
                    name="education"
                    onChange={(e) =>
                      dispatch({
                        type: "INPUT",
                        payload: {
                          name: e.target.name,
                          value: e.target.value,
                        },
                      })
                    }
                  >
                    <option selected value="ssc">
                      SSC
                    </option>
                    <option value="hsc">HSC</option>
                    <option value="graduate">Graduate</option>
                  </select>
                </div>
              </div>
              <div className="basis-1/2">
                <label className="label sm:ml-0">
                  <span className="label-text">Number of pc's</span>
                </label>
                <div className="flex flex-row place-items-center gap-10 mt-2 overflow-hidden sm:overflow-hidden">
                  <div>
                    <button
                      className="btn btn-square btn-primary btn-sm"
                      onClick={(e) => {
                        dispatch({ type: "DECREMENT" });
                      }}
                    >
                      -
                    </button>
                  </div>
                  <div className="">
                    <span className="text-2xl font-bold px-4">
                      {state.quantity}
                    </span>
                  </div>
                  <div>
                    <button
                      className="btn btn-square btn-primary btn-sm"
                      onClick={(e) => {
                        dispatch({ type: "INCREMENT" });
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Feedback</span>
              </label>
              <textarea
                className="textarea textarea-bordered w-full"
                placeholder="Enter your feedback here"
                name="feedback"
                onBlur={(e) =>
                  dispatch({
                    type: "INPUT",
                    payload: {
                      name: e.target.name,
                      value: e.target.value,
                    },
                  })
                }
              ></textarea>
            </div>

            <div className="form-control">
              <label className="label cursor-pointer w-[210px]">
                <input
                  type="checkbox"
                  className="checkbox checkbox-sm checkbox-primary"
                  name="term"
                  onClick={(e) => dispatch({ type: "TOGGLE" })}
                />
                <span className="label-text">I agree terms & conditions</span>
              </label>
            </div>

            <div className="form-control mt-6">
              <button
                className="btn btn-primary"
                disabled={!state.term}
                onClick={(e) => submit(e)}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
