"use client";
import React from "react";
import { useReactToPrint } from "react-to-print";
import { AiOutlinePrinter, AiOutlineCloudUpload } from "react-icons/ai";
import { CiMail } from "react-icons/ci";
import { useState } from "react";
import { toast } from "react-hot-toast";

function ActionsButtons({ invoiceId }) {
  const [sendMail, setSendMail] = useState(false);
  const [sending, setSending] = useState(false);    
  const [email, setEmail] = useState("");

  // const handlePrint = useReactToPrint({
  //     content: () => invoiceRef.current,
  //   });
  async function handleSendMail(e) {
  try {
    
    setSending(true);
    const baseUrl= process.env.NEXT_PUBLIC_BASE_URL;
   
    const invoiceUrl = `${baseUrl}/invoice/${invoiceId}`;
    e.preventDefault();
    console.log(email, invoiceUrl);
    const response = await fetch(`${baseUrl}/api/send`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, invoiceUrl }),
        });
       if(response.ok){
        console.log(response);
        toast.success("Email sent successfully");
        setEmail("");
        setSending(false);
          setSendMail(false);
       }
    
  } catch (error) {
    toast.error("Oops! Something went wrong,try again");
    setSending(false);
    setSendMail(false);
    console.log(error);
    
  }
         
    
  }
  return (
    <div className="container mx-auto py-4 px-8 flex items-center justify-between mb-6">
      {/* header */}
      <div className="flex gap-4 items-center">
        {/* <button
          // onClick={handlePrint}
          className="flex items-center space-x-2 px-3 py-2 rounded-sm border border-slate-600"
        >
          <AiOutlinePrinter />
          <span>Print/Download</span>
        </button> */}
      </div>

      <div className="flex gap-4 items-center">
        {sendMail ? (
          <form onSubmit={handleSendMail} className="flex items-center gap-4">
            <div className="relative ">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </div>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                id="input-group-1"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="manyamittal@gmail.com"
              />
            </div>
           {
            sending? ( <button
                type="button"
                disabled
                className="flex text-purple-600 font-semibold items-center space-x-2 px-3 py-2 rounded-sm border border-purple-600"
              >
                <CiMail className="font-semibold" />
                <span>Sending</span>
              </button>):(
                 <button
                 type="submit"
                 className="flex text-purple-600 font-semibold items-center space-x-2 px-3 py-2 rounded-sm border border-purple-600 hover:bg-purple-200"
               >
                 <CiMail className="font-semibold" />
                 <span>Send</span>
               </button>

              )
           }
          </form>
        ) : (
          <button
            onClick={() => setSendMail(true)}
            className="flex bg-purple-600 font-semibold items-center space-x-2 px-3 py-2 rounded-sm border border-purple-600 text-slate-50"
          >
            <CiMail className="font-semibold" />
            <span>Send invoice</span>
          </button>
        )}
      </div>
    </div>
  );
}

export default ActionsButtons;
