/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { FaUpload } from "react-icons/fa";
import { Check } from "lucide-react";

const DashboardPage = () => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      uploadImage(file);
    }
  };

  const uploadImage = (file) => {
    setLoading(true);
    setUploadSuccess(false);

    setTimeout(() => {
      setLoading(false);
      setUploadSuccess(true);
    }, 2000);
  };

  return (
    <div
      className="bg-cover bg-center min-h-screen flex flex-col justify-center items-center"
      style={{
        backgroundImage:
          "url(https://d3qp9zvlyuxos1.cloudfront.net/Gradient+background.svg)",
      }}
    >
      <div className="shadow-xl bg-white rounded-[24px] w-full max-w-[800px] h-[500px] relative overflow-hidden p-6">
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-start mb-6">
            <div className="flex-grow flex flex-col items-start">
              <h2 className="text-2xl font-bold text-right">Lastly, let's set up your band!</h2>
              <p className="text-gray-600 text-right">
                All your products will carry this branding. Don't worry, you can change it later.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center flex-grow justify-center">
            <div className="mb-4">
              <label htmlFor="file-upload" className="flex flex-col items-center justify-center gap-2 w-32 h-32 bg-gray-200 shadow-md rounded-full cursor-pointer">
                {loading ? (
                  <div className="flex items-center justify-center w-full h-full">
                    <div className="loader"></div>
                  </div>
                ) : (
                  <>
                    {image ? (
                      <img src={image} alt="Preview" className="w-32 h-32 rounded-full object-cover" />
                    ) : (
                      <>
                        <FaUpload className="text-gray-600 text-2xl" />
                        <span className="text-center text-gray-600 text-sm ml-2">Add your logo</span>
                      </>
                    )}
                  </>
                )}
              </label>
              <input
                id="file-upload"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </div>
            <input
              type="text"
              placeholder="Name"
              className="w-full max-w-[400px] mt-2 p-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="relative w-full max-w-[400px] mt-2">
              <input
                type="text"
                placeholder="Domain"
                className="w-full p-2 text-sm border border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <Check
                size={16}
                className="absolute right-2 top-2 text-green-500"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center mt-auto border-t pt-4">
            <p className="text-gray-600 text-sm">STEP 2 OF 2</p>
            <div className="flex flex-col md:flex-row space-x-0 md:space-x-2 mt-2 md:mt-0">
              <button className="w-full md:w-[85%] text-gray py-2 px-4 rounded-full text-sm transition duration-200">
                Back
              </button>
              <button className="w-full md:w-[85%] bg-[#10172A] text-white py-2 px-4 rounded-full text-sm font-semibold hover:bg-blue-700 active:bg-blue-800 transition duration-200">
                Finish
              </button>
            </div>
          </div>
        </div>
      </div>

      {uploadSuccess && (
        <div className="mt-4 text-green-600">
          <p>Image uploaded successfully!</p>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
