import { createPortal } from "react-dom";
import useStore from "../store/store";
import { Calendar } from "@heroui/react";
import { today, getLocalTimeZone } from "@internationalized/date";

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
            <Calendar
              isReadOnly
              aria-label="Date (Read Only)"
              value={today(getLocalTimeZone())}
            />
          </div>
        </div>,
        document.body
      )}
    </>
  );
}

export default Modal;
