import Card from "./Card";
import Verified from "../icons/Verified";

function Services() {
  return (
    <section id="services" className="px-10 xl:px-20 py-20 flex flex-col gap-3">
      <div className="flex gap-2 flex-col">
        <h1 className="text-2xl font-medium flex items-center gap-2">
          Video Services That Fit Your Needs
          <span className="text-blue-500">
            <Verified sizes={30} />
          </span>
        </h1>
        <p className="text-lg">
          Whether you need a full production setup or just a polished edit, we
          have a package that works for you. Let’s turn your raw footage into
          compelling, high-quality content.
        </p>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-16 py-10">
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
}

export default Services;
