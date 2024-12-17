// import { LockClosedIcon } from "@heroicons/react/20/solid";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../AuthContext";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const authContext = useContext(AuthContext);
  const navigate = useNavigate();


  const handleInputChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const authCheck = () => {
    setTimeout(() => {
      fetch("http://localhost:4000/api/login")
          .then((response) => response.json())
          .then((data) => {
            alert("Successfully Login");
            localStorage.setItem("user", JSON.stringify(data));
            authContext.signin(data._id, () => {
              navigate("/");
            });
          })
          .catch((err) => {
            alert("Wrong credentials, Try again")
            console.log(err);
          });
    }, 3000);
  };

  const loginUser = (e) => {
    // Cannot send empty data
    if (form.email === "" || form.password === "") {
      alert("To login user, enter details to proceed...");
    } else {
      fetch("http://localhost:4000/api/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(form),
      })
          .then((result) => {
            console.log("User login", result);
          })
          .catch((error) => {
            console.log("Something went wrong ", error);
          });
    }
    authCheck();
  };


  const handleSubmit = (e) => {
    e.preventDefault();
  };


  return (
      <>
        <div className="grid grid-cols-1 sm:grid-cols-2 h-screen  items-center place-items-center">
          <div className="flex justify-center w-10/12">
            <img src={require("../assets/signup.png")} alt=""/>
          </div>

          <div className="w-full max-w-md space-y-8 p-10 rounded-lg">
            <div>
              <img
                  className="mx-auto h-32 w-auto"
                  src={require("../assets/logo.png")}
                  alt="Your Company"
              />

              <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                Sign in to your account
              </h2>
              {/*<p className="mt-2 text-center text-sm text-gray-600">*/}
              {/*  Or*/}
              {/*  <span*/}
              {/*    className="font-medium text-indigo-600 hover:text-indigo-500"*/}
              {/*  >*/}
              {/*    start your 14-day free trial*/}
              {/*  </span>*/}
              {/*</p>*/}
            </div>


            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              {/* <input type="hidden" name="remember" defaultValue="true" /> */}
              <div className="-space-y-px rounded-md shadow-sm">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                      id="email-address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="relative block w-full rounded-t-md border-0 py-1.5 px-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-themeColor sm:text-sm sm:leading-6"
                      placeholder="Email address"
                      value={form.email}
                      onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="relative block w-full rounded-b-md border-0 py-1.5 px-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-themeColor sm:text-sm sm:leading-6"
                      placeholder="Password"
                      value={form.password}
                      onChange={handleInputChange}
                  />
                </div>
              </div>


              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {/*<input*/}
                  {/*  id="remember-me"*/}
                  {/*  name="remember-me"*/}
                  {/*  type="checkbox"*/}
                  {/*  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"*/}
                  {/*/>*/}
                  {/*<label*/}
                  {/*  htmlFor="remember-me"*/}
                  {/*  className="ml-2 block text-sm text-gray-900"*/}
                  {/*>*/}
                  {/*  Remember me*/}
                  {/*</label>*/}
                </div>


                <Link to={"/forgot"}>
                  <div className="text-sm">
                  <span
                      className="font-medium text-themeColor hover:text-themeColorHover cursor-pointer"
                  >
                    Forgot your password?
                  </span>
                  </div>
                </Link>

              </div>

              <div>
                <button
                    type="submit"
                    className="mb-6 group relative flex w-full justify-center rounded-md bg-themeColor hover:bg-themeColorHover py-2 px-3 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-themeColor"
                    onClick={loginUser}
                >
                  Sign in
                </button>

                <div className="flex space-x-16 justify-between">
                  <div className="border-2 border-themeColor rounded-3xl p-2 hover:border-themeColorHover">
                    <svg viewBox="0 0 488 512" width={24}
                         className="fill-themeColor cursor-pointer hover:fill-themeColorHover">
                      <path
                          d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                      />
                    </svg>
                  </div>

                  <div className="border-2  rounded-3xl p-2 border-themeColor  hover:border-themeColorHover">
                    <svg viewBox="0 0 320 512" height={24} width={24}
                         className="fill-themeColor cursor-pointer hover:fill-themeColorHover">
                      <path
                          d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"
                      />
                    </svg>
                  </div>

                  <div className="border-2 border-themeColor rounded-3xl p-2  hover:border-themeColorHover">
                    <svg viewBox="0 0 512 512" width={24}
                         className="fill-themeColor cursor-pointer hover:fill-themeColorHover">
                      <path
                          d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                      />
                    </svg>
                  </div>
                </div>


              </div>

              <p className="mt-2 text-center text-sm text-gray-600">
                Or{" "}
                <span
                    className="font-medium text-themeColor hover:text-themeColorHover"
                >
                  Don't Have an Account? {" "}
                  <Link to="/register"> Register now </Link>
                </span>
              </p>

            </form>
          </div>
        </div>
      </>
  );
}

export default Login;
