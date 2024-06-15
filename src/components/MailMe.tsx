import axios from "axios";
import React, { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface Mail {
  name: string;
  email: string;
  message: string;
}

const MailMe: React.FC = () => {
  const [mail, setMail] = useState<Mail>({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState<boolean>(false);
  const [stats, setStats] = useState<{ message: string; type: string }>({
    message: "",
    type: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const posturl = "https://kv3b.vercel.app/kv3/mailme";
    setLoading(true);
    axios
      .post(posturl, mail)
      .then((res) => {
        setLoading(false);
        if (res.data.message == "Mail recieved") {
          setMail({ name: "", email: "", message: "" });
          setStats({ message: "Mail sent successfully", type: "success" });
        } else {
          setStats({ message: "Mail sending failed", type: "error" });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="mt-12 w-full mb-16">
      <div className="flex flex-col items-start mb-4 gap-1">
        <h1 className="text-3xl md:text-4xl">Contact Me</h1>
        <p className="italic font-thin opacity-30">send me an email </p>
        <div className="w-full h-[1px] bg-secondary/20"></div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full sm:w-10/12 flex flex-col gap-2 mx-auto "
      >
        <p
          className={`text-left text-sm text-secondary italic  ${
            stats.type === "success" ? "text-green-700" : "text-red-600"
          }`}
        >
          {stats.message ? stats.message : <>&nbsp;</>}
        </p>

        <div className="w-full flex justify-center items-center flex-wrap gap-3">
          <input
            type="text"
            placeholder="Name"
            value={mail.name}
            className="flex-1 p-3 bg-transparent border-2 border-secondary/40 focus:border-secondary focus:border-2 focus:outline-none rounded-sm  "
            required
            onChange={(e) => setMail({ ...mail, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            value={mail.email}
            className="flex-1 p-3 bg-transparent border-2 border-secondary/40 focus:border-secondary focus:border-2 focus:outline-none rounded-sm "
            required
            onChange={(e) => setMail({ ...mail, email: e.target.value })}
          />
        </div>
        <textarea
          placeholder="Message"
          value={mail.message}
          required
          className="w-full h-40 p-4 mt-2 bg-transparent border-2 border-secondary/40 focus:border-secondary focus:border-2 focus:outline-none rounded-sm "
          onChange={(e) => setMail({ ...mail, message: e.target.value })}
        />
        <button
          type="submit"
          className="w-1/2 sm:w-1/4 mx-auto mt-4 py-3 border border-secondary text-secondary flex justify-center items-center active:bg-secondary active:border-primary active:text-primary"
          disabled={loading}
        >
          {loading ? (
            <AiOutlineLoading3Quarters className="animate-spin" size={24} />
          ) : (
            "Send"
          )}
        </button>
      </form>
    </div>
  );
};

export default MailMe;
