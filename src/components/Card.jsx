import Check from "../icons/Check";
import Button from "./Button";
import Spheres from "../icons/Spheres";

function Card() {
  return (
    <div className="flex flex-col gap-5 border w-full rounded-sm shadow text-[#222] p-10 border-slate-300 hover:shadow transition-all duration-300">
      <div className="grow flex flex-col gap-2">
        <h1 className="text-3xl uppercase flex items-center gap-2">
          <Spheres sizes={30} />
          PLAN
        </h1>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
          iure.
        </p>
        <ul className="flex flex-col gap-2">
          <li className="flex items-center gap-2 font-medium">
            <span className="border rounded-full aspect-square bg-[#222] text-white p-1">
              <Check sizes={15} />
            </span>
            Lorem, ipsum.
          </li>
          <li className="flex items-center gap-2 font-medium">
            <span className="border rounded-full aspect-square bg-[#222] text-white p-1">
              <Check sizes={15} />
            </span>
            Lorem, ipsum.
          </li>
          <li className="flex items-center gap-2 font-medium">
            <span className="border rounded-full aspect-square bg-[#222] text-white p-1">
              <Check sizes={15} />
            </span>
            Lorem, ipsum.
          </li>
          <li className="flex items-center gap-2 font-medium">
            <span className="border rounded-full aspect-square bg-[#222] text-white p-1">
              <Check sizes={15} />
            </span>
            Lorem, ipsum.
          </li>
          <li className="flex items-center gap-2 font-medium">
            <span className="border rounded-full aspect-square bg-[#222] text-white p-1">
              <Check sizes={15} />
            </span>
            Lorem, ipsum.
          </li>
        </ul>
        <p className="text-5xl font-semibold">$100</p>
      </div>
      <Button text={"Select"} />
    </div>
  );
}

export default Card;
