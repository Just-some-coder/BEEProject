
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../AuthContext";

function OTP() {
    const [form, setForm] = useState({
        otp: ""
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
                    <img src={require("../assets/otp.png")} alt=""/>
                </div>

                <div className="w-full max-w-md space-y-8 p-10 rounded-lg">
                    <div>
                        <div className={"flex justify-center"}>
                            <svg viewBox="0 0 448 512" className={"fill-themeColor"} width={36}>
                                <path
                                    d="M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z"/>
                            </svg>
                        </div>

                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                            Enter The OTP
                            <br/>
                            <br/>
                            <h4 className={"text-gray-500 text-2xl text-center"}>
                                Sent to adit*************edu.in
                            </h4>
                        </h2>

                    </div>


                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                        {/* <input type="hidden" name="remember" defaultValue="true" /> */}
                        <div className="-space-y-px rounded-md shadow-sm">
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    code
                                </label>
                                <input
                                    id="verify-code"
                                    name="code"
                                    type="number"
                                    required
                                    className="relative block w-full rounded-t-md border-0 py-1.5 px-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-themeColor sm:text-sm sm:leading-6"
                                    placeholder="6 digit code"
                                    value={form.otp}
                                    onChange={handleInputChange}
                                />
                            </div>

                        </div>

                        <div>
                            <Link to={"/login"}>
                                <button
                                    type="submit"
                                    className="mb-6 group relative flex w-full justify-center rounded-md bg-themeColor hover:bg-themeColorHover py-2 px-3 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Verify
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default OTP;
