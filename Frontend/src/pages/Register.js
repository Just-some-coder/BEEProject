import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UploadImage from "../components/UploadImage";

function Register() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    imageUrl: "",
  });

  const navigate = useNavigate();

  // Handling Input change for registration form.
  const handleInputChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  // Register User
  const registerUser = () => {
    fetch("http://localhost:4000/api/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(form),
    })
        .then((result) => {
          alert("Successfully Registered, Now Login with your details");
          navigate('/login')

        })
        .catch((err) => console.log(err));
  };
  // ------------------

  // Uploading image to cloudinary
  const uploadImage = async (image) => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "inventoryapp");

    await fetch("https://api.cloudinary.com/v1_1/ddhayhptm/image/upload", {
      method: "POST",
      body: data,
    })
        .then((res) => res.json())
        .then((data) => {
          setForm({...form, imageUrl: data.url});
          alert("Image Successfully Uploaded");
        })
        .catch((error) => console.log(error));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
      <>
        <div className="grid grid-cols-1 sm:grid-cols-2 h-screen  items-center place-items-center">
          <div className="w-full max-w-md space-y-8  p-10 rounded-lg">
            <div>
              <img
                  className="mx-auto h-32 w-auto"
                  src={require("../assets/logo.png")}
                  alt="Your Company"
              />
              <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                Register your account
              </h2>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              {/* <input type="hidden" name="remember" defaultValue="true"  /> */}
              <div className="flex flex-col gap-4 -space-y-px rounded-md shadow-sm">
                <div className="flex gap-4">
                  <input
                      name="firstName"
                      type="text"
                      required
                      className="relative block w-full rounded-t-md border-0 py-1.5 px-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-themeColor sm:text-sm sm:leading-6"
                      placeholder="First Name"
                      value={form.firstName}
                      onChange={handleInputChange}
                  />
                  <input
                      name="lastName"
                      type="text"
                      required
                      className="relative block w-full rounded-t-md border-0 py-1.5 px-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-themeColor sm:text-sm sm:leading-6"
                      placeholder="Last Name"
                      value={form.lastName}
                      onChange={handleInputChange}
                  />
                </div>
                <div>
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
                <div>
                  <input
                      name="phoneNumber"
                      type="number"
                      autoComplete="phoneNumber"
                      required
                      className="relative block w-full rounded-b-md border-0 py-1.5 px-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-themeColor sm:text-sm sm:leading-6"
                      placeholder="Phone Number"
                      value={form.phoneNumber}
                      onChange={handleInputChange}
                  />
                </div>
                <UploadImage uploadImage={uploadImage}/>
              </div>

              <div className="text-sm flex justify-center">
                {/*<span*/}
                {/*    className="font-medium text-themeColor hover:text-themeColorHover cursor-pointer"*/}
                {/*>*/}
                {/*  Register With*/}
                {/*</span>*/}
                <br/>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-themeColor focus:text-themeColor"

                      required
                  />
                  <label
                      htmlFor="remember-me"
                      className="ml-2 block text-sm text-gray-900"
                  >
                    I Agree Terms & Conditions
                  </label>
                </div>


              </div>

              <div>
                <button
                    type="submit"
                    className="mb-6 group relative flex w-full justify-center rounded-md bg-themeColor hover:bg-themeColorHover py-2 px-3 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={registerUser}
                >
                  Register
                </button>

                <div className={"flex justify-center space-x-24"}>
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

              </div>
              <p className="mt-2 text-center text-sm text-gray-600">
                Or{" "}
                <span
                    className="font-medium text-themeColor hover:text-themeColorHover"
                >
                  Already Have an Account?
                  <Link to="/login"> Sign in</Link>
                </span>
              </p>
            </form>
          </div>
          <div className="flex justify-center order-first sm:order-last w-10/12">
            <img src={require("../assets/Login.png")} alt=""/>
          </div>
        </div>
      </>
  );
}

export default Register;
