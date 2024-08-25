import axios from "axios";
import React, { useState } from "react";
import Icon from "./Icon";

interface Mail {
  name: string;
  email: string;
  message: string;
}

const MailMe: React.FC<{ theme: string }> = ({ theme }) => {
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
        console.log(res.data);
        if (res.data.message === "Mail received") {
          setMail({ name: "", email: "", message: "" });
          setStats({ message: "Mail sent successfully", type: "success" });
        } else {
          setStats({ message: "Mail sending failed", type: "error" });
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="flex flex-col items-start mb-4 gap-1">
        <h1 className="text-3xl">Contact Me</h1>
        <p className="italic font-thin opacity-30 text-sm">send me an email </p>
        <div className="w-full h-[1px] bg-secondary/20"></div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full sm:w-10/12 flex flex-col gap-2 mx-auto "
      >
        <p
          className={`text-left text-sm italic  ${
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
          className="w-40 h-10 sm:w-40 mx-auto mt-4 py-3 border border-secondary text-secondary flex justify-center items-center"
          disabled={loading}
        >
          {loading ? (
            <Icon
              icon="tailspin"
              className="animate-spin"
              fill={theme === "dark" ? "white" : "black"}
              size={20}
            />
          ) : (
            "Send"
          )}
        </button>
      </form>
    </div>
  );
};

export default MailMe;
