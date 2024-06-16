/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { IoExitOutline } from "react-icons/io5";
import coffee from "../assets/img/download.svg";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { AiOutlineAudio } from "react-icons/ai";
import { useState } from "react";
import { AiOutlineAudioMuted } from "react-icons/ai";
import { GrPowerReset } from "react-icons/gr";

export default function Modal({ open, onClose, Name, setName }) {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser does not support speech recognition.</span>;
  }

  return (
    <div
      onClick={onClose}
      className={`
        fixed inset-0   flex justify-center items-center transition-colors
        ${open ? "visible bg-black/20" : "invisible"}
      `}
    >
      {/* modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
          bg-white rounded-xl fixed inset-5 md:inset-9   overflow-hidden overflow-y-scroll    flex flex-col  justify-center items-center shadow p-6 transition-all
          ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
        `}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-1 rounded-lg text-gray-400   bg-white text-2xl hover:bg-gray-50 hover:text-gray-600"
        >
          <IoExitOutline />
        </button>

        <div className="w-full h-dvh flex flex-col gap-4 md:flex-row p-1 md:p-5">
          <div className="w-full  flex    flex-col justify-start items-start">
            <img src={coffee} className="max-md:h-60 h-80 " />
            <h1 className="lg:text-8xl md:text-6xl ml-5 text-[#322C2B]  text-4xl text-left   font-bold">
              Hey,Hi there!
            </h1>
          </div>
          <div className="w-full  flex  flex-col justify-between items-start gap-3 md:gap-0 ">
            <div className="w-full ">
              {Name && (
                <h1 className="  text-[#322C2B]  text-4xl text-left font-bold">
                  {Name.toUpperCase()}
                </h1>
              )}
              <div
                className={`transition-all ${
                  Name ? "translate-y-3" : "translate-y-0"
                }`}
              >
                <input
                  className="w-full  py-5 px-2 pl-5 rounded-md bg-gray-200  focus:outline-none "
                  maxLength="15"
                  placeholder="Name"
                  value={Name}
                  onChange={(e) => setName(e.target.value)}
                />
                <div className="flex flex-wrap gap-5 py-5">
                  {/* <p>Microphone: {listening ? "on" : "off"}</p> */}
                  {listening ? (
                    <button
                      className=" p-1 rounded-lg text-gray-400 bg-white text-2xl hover:bg-gray-50 hover:text-gray-600"
                      onClick={SpeechRecognition.stopListening}
                    >
                      <AiOutlineAudioMuted />
                    </button>
                  ) : (
                    <button
                      className=" p-1 rounded-lg text-gray-400 bg-white text-2xl hover:bg-gray-50 hover:text-gray-600"
                      onClick={startListening}
                    >
                      <AiOutlineAudio />
                    </button>
                  )}

                  {transcript && (
                    <button
                      className=" p-1 rounded-lg text-gray-400 bg-white text-2xl hover:bg-gray-50 hover:text-gray-600"
                      onClick={resetTranscript}
                    >
                      <GrPowerReset />
                    </button>
                  )}
                </div>
                <div className=" overflow-hidden overflow-y-scroll h-72 p-2 w-full">
                  <p className="text-lg text-gray-500 font-medium   tracking-wide text-left">
                    {transcript}
                  </p>
                </div>
              </div>
            </div>
            <div className="pb-5 md:p-0 w-full text-right">
              <button
                className="text-3xl md:text-5xl  text-blue-600 font-bold hover:bg-blue-50 px-3 py-2 rounded-xl transition-colors"
                onClick={onClose}
              >
                I'm done
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="flex gap-4">
  <button className=" w-full font-bold" onClick={onClose}>
    Cancel!
  </button>
</div>; */
}

//  {Name && (
//                 <h1 className="  text-[#322C2B]  text-4xl text-left font-bold">
//                   {Name.toUpperCase()}
//                 </h1>
//               )}
//               <div
//                 className={`transition-all w-full ${
//                   Name ? "translate-y-3" : "translate-y-0"
//                 }`}
//               >
//                 <input
//                   className="w-full  py-5 px-2 pl-5 rounded-md bg-gray-200  focus:outline-none "
//                   maxLength="15"
//                   placeholder="Name"
//                   onChange={(e) => setName(e.target.value)}
//                 />
//                 <div className="flex flex-wrap gap-5 py-5">
//                   {/* <p>Microphone: {listening ? "on" : "off"}</p> */}
//                   {listening ? (
//                     <button
//                       className=" p-1 rounded-lg text-gray-400 bg-white text-2xl hover:bg-gray-50 hover:text-gray-600"
//                       onClick={SpeechRecognition.stopListening}
//                     >
//                       <AiOutlineAudioMuted />
//                     </button>
//                   ) : (
//                     <button
//                       className=" p-1 rounded-lg text-gray-400 bg-white text-2xl hover:bg-gray-50 hover:text-gray-600"
//                       onClick={startListening}
//                     >
//                       <AiOutlineAudio />
//                     </button>
//                   )}

//                   {transcript && (
//                     <button
//                       className=" p-1 rounded-lg text-gray-400 bg-white text-2xl hover:bg-gray-50 hover:text-gray-600"
//                       onClick={resetTranscript}
//                     >
//                       <GrPowerReset />
//                     </button>
//                   )}
//                 </div>
//                 <p className="text-lg text-gray-500 font-medium tracking-wide text-left">
//                   {transcript}
//                   </p>
//                 </div>
