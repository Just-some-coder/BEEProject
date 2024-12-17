
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../AuthContext";

function ForgotPassword() {
    const [form, setForm] = useState({
        email: ""
    });

    const authContext = useContext(AuthContext);
    const navigate = useNavigate();


    const handleInputChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    // const authCheck = () => {
    //     setTimeout(() => {
    //         fetch("http://localhost:4000/api/login")
    //             .then((response) => response.json())
    //             .then((data) => {
    //                 alert("Successfully Login");
    //                 localStorage.setItem("user", JSON.stringify(data));
    //                 authContext.signin(data._id, () => {
    //                     navigate("/");
    //                 });
    //             })
    //             .catch((err) => {
    //                 alert("Wrong credentials, Try again")
    //                 console.log(err);
    //             });
    //     }, 3000);
    // };

    // const loginUser = (e) => {
    //     // Cannot send empty data
    //     if (form.email === "" || form.password === "") {
    //         alert("To login user, enter details to proceed...");
    //     } else {
    //         fetch("http://localhost:4000/api/login", {
    //             method: "POST",
    //             headers: {
    //                 "Content-type": "application/json",
    //             },
    //             body: JSON.stringify(form),
    //         })
    //             .then((result) => {
    //                 console.log("User login", result);
    //             })
    //             .catch((error) => {
    //                 console.log("Something went wrong ", error);
    //             });
    //     }
    //     authCheck();
    // };


    const handleSubmit = (e) => {
        e.preventDefault();
    };


    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 h-screen  items-center place-items-center">
                <div className="flex justify-center w-10/12">
                    <img src={require("../assets/forgot.png")} alt=""/>
                </div>

                <div className="w-full max-w-md space-y-8 p-10 rounded-lg">
                    <div>
                        <div className={"flex justify-center"}>
                            <svg viewBox="0 0 512 512" width={69} className={"fill-themeColor"}>
                                <path
                                    d="M215.4 96L144 96l-36.2 0L96 96l0 8.8L96 144l0 40.4 0 89L.2 202.5c1.6-18.1 10.9-34.9 25.7-45.8L48 140.3 48 96c0-26.5 21.5-48 48-48l76.6 0 49.9-36.9C232.2 3.9 243.9 0 256 0s23.8 3.9 33.5 11L339.4 48 416 48c26.5 0 48 21.5 48 48l0 44.3 22.1 16.4c14.8 10.9 24.1 27.7 25.7 45.8L416 273.4l0-89 0-40.4 0-39.2 0-8.8-11.8 0L368 96l-71.4 0-81.3 0zM0 448L0 242.1 217.6 403.3c11.1 8.2 24.6 12.7 38.4 12.7s27.3-4.4 38.4-12.7L512 242.1 512 448s0 0 0 0c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64c0 0 0 0 0 0zM176 160l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/>
                            </svg>
                        </div>

                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                            Forgot Your Password?
                            <br/>
                            <br/>
                            <h4 className={"text-gray-700 text-2xl text-center"}>
                                Enter Your Mail To Receive Verification Code
                            </h4>
                        </h2>

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

                        </div>

                        <div>
                            <Link to={"/otp"}>
                                <button
                                    type="submit"
                                    className="mb-6 group relative flex w-full justify-center rounded-md bg-themeColor hover:bg-themeColorHover py-2 px-3 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Send Verification Mail
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default ForgotPassword;
