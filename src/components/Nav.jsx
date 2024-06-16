import { useState } from "react";
import Modal from "./Modal";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [Name, setName] = useState();
  return (
    <nav className="fixed top-0  w-full">
      <div className="  max-w-7xl  m-auto flex justify-between flex-wrap px-2 py-4 items-center  ">
        <h1 className="text-2xl text-white font-bold tracking-wide ">
          clearcut
        </h1>
        <button
          onClick={() => setOpen(true)}
          className=" border-2 font-medium tracking-wide border-white text-white px-6 py-1 rounded-md hover:bg-white hover:text-black   transition-colors"
        >
          Say Hello
        </button>
        <Modal
          open={open}
          onClose={() => {
            setOpen(false);
            setName("");
          }}
          Name={Name}
          setName={setName}
        />
      </div>
    </nav>
  );
}

{
  /* <button
        onClick={() => setOpen(true)}
        className="shadow-lg px-8 py-10 bg-violet-400 rounded-3xl"
      >
        say Hello
      </button>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
          setName("");
        }}
        Name={Name}
        setName={setName}
      /> */
}
