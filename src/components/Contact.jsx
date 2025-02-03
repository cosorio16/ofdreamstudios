import Button from "../components/Button";
import Message from "../icons/Message";

function Contact() {
  return (
    <section className="px-5 xl:px-20 min-h-72 flex flex-col gap-4 py-20 items-center">
      <h1 className="text-4xl font-medium flex items-center gap-3">
        <span className="border aspect-square rounded-full bg-[#222] text-white p-2">
          <Message sizes={30} />
        </span>
        Contact Us
      </h1>
      <p className="text-lg">
        Have a question or a project in mind? Reach out, and let’s talk about
        how we can create stunning video content together.
      </p>
      <form className="flex flex-col gap-4 items-center">
        <div className="flex items-center gap-2 w-105">
          <input
            type="text"
            className="border rounded  border-zinc-400 px-4 py-2 text-[#222]"
            placeholder="Name"
          />
          <input
            type="email"
            className="border rounded  border-zinc-400 px-4 py-2 text-[#222]"
            placeholder="Email"
          />
        </div>
        <textarea
          placeholder="Message"
          className="border p-4 rounded border-zinc-400 w-105 h-64 resize-none"
        ></textarea>
        <Button text={"Submit"} />
      </form>
    </section>
  );
}

export default Contact;
