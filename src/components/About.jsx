import Video from "../icons/Video";

function About() {
  return (
    <section className="grid xl:grid-cols-2 min-h-100 py-20 gap-20 items-center">
      <div className="flex flex-col gap-4 px-10 xl:px-20">
        <h1 className="text-2xl xl:text-2xl font-medium flex items-center gap-2">
          Your Go-To Video Editing & Production Studio
          <span className="border aspect-square rounded-full p-2 bg-[#222] text-white">
            <Video sizes={35} />
          </span>
        </h1>
        <p className="xl:text-lg border-b pb-4 border-[#222]/50">
          OfdreamStudios is dedicated to creating visually captivating content
          for businesses, content creators, and individuals with a creative
          vision. Whether it's shooting cinematic footage or crafting seamless
          edits, we ensure every project is engaging, professional, and tailored
          to its audience.
        </p>
      </div>
      <div className="hidden xl:grid grid-cols-2 grid-rows-2 gap-5 hover:gap-10 px-20 transition-all duration-300">
        <img
          src="/1.jpg"
          alt=""
          className="aspect-square rounded object-cover"
        />
        <img
          src="/2.webp"
          alt=""
          className="aspect-square rounded object-cover "
        />
        <img
          src="/3.jpg"
          alt=""
          className="aspect-square rounded object-cover "
        />
        <img
          src="/2.webp"
          alt=""
          className="aspect-square rounded object-cover "
        />
      </div>
    </section>
  );
}

export default About;
