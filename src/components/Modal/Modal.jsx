import React from "react";


function Modal({ isModalOpen, handleClose }) {
  return (
    <div
      className={`fixed bg-black opacity-90 inset-0 z-50 ${
        isModalOpen ? "block" : "hidden"
      }`}
    >
      <div className="flex justify-center items-center h-screen ">
        <div className="flex-col justify-center bg-white md:py-12 md:px-24 py-6 px-12 border-4 rounded-xl">
          <div className=" text-lg  mb-8 md:max-w-[500px] text-[14px] font-semibold " >
            <div className="mb-6 ">Kindly pay into the account below.</div>  SAMI WAY BUSINESS VENTURE <br />
            1023742579 UBA (Send your name, email address and receipt of payment
            to ‪+2347082781079‬ on WhatsApp)
          </div>
          <div>
            <button className="cursor-pointer  text-white px-8 py-2 rounded-xl bg-[#a569bd] hover:bg-[#9d69bd]" onClick={() => handleClose()}>close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
