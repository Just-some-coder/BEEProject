import React, { useState } from "react";

function UploadImage({ uploadImage }) {
    const [fileName, setFileName] = useState("");

    const handleFileInputChange = (event) => {
        setFileName(event.target.files[0]);
        uploadImage(event.target.files[0]);
    };

    return (
        <div>
            <label
                htmlFor="fileInput"
                className="inline-flex items-center rounded-md shadow-sm py-2 px-4 bg-gray-100 text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                <svg width="28px" height="28px" viewBox="0 0 24 24" fill="none" className="mr-2">
                    <circle cx="16" cy="8" r="2" stroke="#1C274C"/>
                    <path
                        d="M2 12.5001L3.75159 10.9675C4.66286 10.1702 6.03628 10.2159 6.89249 11.0721L11.1822 15.3618C11.8694 16.0491 12.9512 16.1428 13.7464 15.5839L14.0446 15.3744C15.1888 14.5702 16.7369 14.6634 17.7765 15.599L21 18.5001"
                        stroke="#1C274C"
                    />
                    <path
                        d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8"
                        stroke="#1C274C"
                    />
                </svg>
                <span className="inline-block">
    {fileName?.name ? fileName.name : "Upload Picture"}
  </span>
            </label>

            <input
                type="file"
                id="fileInput"
                className="hidden"
                accept=".png, .jpeg, .jpg"
                required
                onChange={handleFileInputChange}
            />
        </div>
    );
}

export default UploadImage;
