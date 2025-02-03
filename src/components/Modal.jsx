import { createPortal } from "react-dom";
import useStore from "../store/store";
import Button from "../components/Button";

function Modal() {
  const { modal, toggleModal } = useStore();
  return (
    <>
      {createPortal(
        <div
          onClick={() => toggleModal(false)}
          className={` w-screen top-0 left-0 h-screen fixed z-10 flex items-center justify-center ${
            modal ? "bg-black/50" : "pointer-events-none bg-transparent"
          } transition-all duration-300`}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`bg-white w-200 h-150 rounded-sm p-10 text-[#222] flex flex-col gap-4 ${
              modal ? "scale-100" : "scale-0"
            } transition-all duration-300`}
          >
            <h1>Book Right Now</h1>
            <button className="border rounded-full px-5 py-2">
              Login With Google
            </button>
            <button className="border rounded-full px-5 py-2">
              Login With Google
            </button>

            <form className="flex flex-col gap-4 grow">
              <input
                type="text"
                placeholder="username"
                className="border px-5 py-2 rounded"
              />
              <input
                type="password"
                placeholder="password"
                className="border px-5 py-2 rounded"
              />
            </form>
            <Button dark text={"Log In"} />
          </div>
        </div>,
        document.body
      )}
    </>
  );
}

export default Modal;
