import { useState } from "react";
import Menu from "../icons/Menu";
import Close from "../icons/Close";
import useStore from "../store/store";

function Header() {
  const { toggleModal } = useStore();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <header className="hidden xl:flex items-center justify-between px-20 py-10 fixed top-0 left-0 w-screen text-lg bg-white/10 backdrop-blur-xs z-10">
        <h1>OfdreamStudios</h1>
        <nav className="flex items-center gap-10">
          <a
            href="#services"
            className="border-b-2 border-[#222]/0 hover:border-[#222] transition-all duration-500"
          >
            Services
          </a>
          <a
            href="#contact"
            className="border-b-2 border-[#222]/0 hover:border-[#222] transition-all duration-500"
          >
            Contact
          </a>
          <button
            onClick={() => toggleModal(true)}
            className="border px-5 py-1 rounded-full hover:bg-[#222] hover:text-white cursor-pointer transition-all duration-300"
          >
            Sing Up
          </button>
        </nav>
      </header>

      <header className="p-5 fixed top-0 left-0 w-screen bg-[#222] text-white xl:hidden z-10">
        <button onClick={() => setShowMenu(true)}>
          <Menu sizes={40} />
        </button>
        <div
          className={`fixed bg-[#222] h-screen w-96 left-0 top-0 ${
            showMenu ? "translate-0" : "-translate-x-full"
          } flex flex-col p-4 transition-all duration-300`}
        >
          <button onClick={() => setShowMenu(false)} className="self-end">
            <Close sizes={30} />
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
