import Button from "./Button";
import Camera from "../icons/Camera"

function Hero() {
  return (
    <section className="h-150 flex flex-col items-center gap-10 text-[#222] mt-44 px-10 xl:p-20">
      <span className="p-2 text-center border rounded-full w-96 flex items-center justify-center gap-5 bg-[#222] text-white">
       <Camera sizes={30}/>

      </span>
      <div className="flex items-center flex-col gap-2 text-center">
        <h1 className="text-2xl xl:text-7xl font-medium">
          Elevate Your Visual Storytelling
        </h1>
        <h2 className="text-xl xl:text-5xl">
          Professional Video Recording & Editing Services Tailored for You
        </h2>
        <p className=" xl:text-xl">
          Whether you need professional recording locally or expert editing from
          anywhere in the world, I bring your ideas to life with stunning
          visuals and precision edits.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2 xl:gap-16">
        <Button text={"Book Now"} dark />
        <Button text={"See More"} />
      </div>
    </section>
  );
}

export default Hero;
