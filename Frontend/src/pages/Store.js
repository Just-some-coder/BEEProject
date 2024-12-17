import React, { useState, useEffect, useContext } from "react";
import AddStore from "../components/AddStore";
import AuthContext from "../AuthContext";

function Store() {
  const [showModal, setShowModal] = useState(false);
  const [stores, setAllStores] = useState([]);

  const authContext = useContext(AuthContext);

  useEffect(() => {
    fetchData();
  }, []);

  // Fetching all stores data
  const fetchData = () => {
    fetch(`http://localhost:4000/api/store/get/${authContext.user}`)
      .then((response) => response.json())
      .then((data) => {
        setAllStores(data);
      });
  };

  const modalSetting = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="col-span-12 lg:col-span-10 flex justify-center ">
      <div className=" flex flex-col gap-5 w-11/12 border-2 bg-white">
        <div className="flex justify-between">
          <span className="font-bold ml-2 mt-4">Manage Store</span>
          <button
            className="bg-themeColor hover:bg-themeColorHover text-white font-bold p-2 text-xs rounded mr-2 mt-4"
            onClick={modalSetting}
          >
            Add Store
          </button>
        </div>
        {showModal && <AddStore/>}
        {stores.map((element, index) => {
          return (
            <div
              className="bg-white w-50 h-fit flex flex-col gap-4 p-4 "
              key={element._id}
            >
              <div>
                <img
                  alt="store"
                  className="h-60 w-full object-cover"
                  src={element.image}
                />
              </div>
              <div className="flex flex-col gap-3 justify-between items-start">
                <span className="font-bold">{element.name}</span>
                <span className="font-medium">{element.category}</span>
                <div className="flex">
                  <img
                    alt="location-icon"
                    className="h-6 w-6"
                    src={require("../assets/location-icon.png")}
                  />
                  <span>{element.address + ", " + element.city}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Store;
