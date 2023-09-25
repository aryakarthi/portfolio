import React, { useRef } from "react";

import emailjs from "@emailjs/browser";

import { Circles, Bulb } from "../../components";

import { BiSend } from "react-icons/bi";

import { motion } from "framer-motion";

import { fadeIn } from "../../scripts/variants";

const Contact = () => {
  const form = useRef();

  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceID, templateID, form.current, publicKey).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div className="h-full">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            className="h2 text-center mb-12"
          >
            Let's <span className="text-accent">connect!</span>
          </motion.h2>
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                placeholder="name"
                name="user_name"
                id="name"
                className="input"
                required
              />
              <input
                type="email"
                placeholder="email"
                name="user_email"
                id="email"
                className="input"
                required
              />
            </div>
            <input
              type="text"
              placeholder="subject"
              name="subject"
              id="subject"
              className="input"
              required
            />
            <textarea
              name="message"
              id="message"
              placeholder="message"
              className="textarea"
              required
            ></textarea>
            <button
              type="submit"
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Send
              </span>
              <BiSend className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[20px]" />
            </button>
          </motion.form>
        </div>
      </div>
      <Circles />
      <Bulb />
    </div>
  );
};

export default Contact;
