import React, { useRef } from "react";

import { useForm } from "react-hook-form";

import emailjs from "@emailjs/browser";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { Circles, Bulb } from "../../components";

import { BiSend } from "react-icons/bi";

import { motion } from "framer-motion";

import { fadeIn } from "../../scripts/variants";

const Contact = () => {
  const form = useRef();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    // console.log(data);
    sendEmail(e);
  };

  // console.log(errors);

  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kjq49sa",
        "template_c1zlfan",
        form.current,
        "6sJS5EkRfYOIF8Wsg"
      )
      .then(
        (result) => {
          toast.success("Message Sent Successfully!");
          // console.log(result.text);
        },
        (error) => {
          toast.error("Message Not Sent!");
          // console.log(error.text);
        }
      );
    e.target.reset();
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
            onSubmit={handleSubmit(onSubmit)}
            // onSubmit={sendEmail}
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            noValidate
          >
            <div className="flex gap-x-6 w-full">
              <span className="w-full relative">
                <input
                  type="text"
                  placeholder="name"
                  name="user_name"
                  id="name"
                  className="input"
                  {...register("user_name", {
                    required: {
                      value: true,
                      message: "Name is required!",
                    },
                  })}
                />
                {errors.user_name && (
                  <span className="error top-[54px]">
                    {errors.user_name?.message}
                  </span>
                )}
              </span>
              <span className="w-full relative">
                <input
                  type="email"
                  placeholder="Email"
                  name="user_email"
                  id="email"
                  className="input"
                  {...register("user_email", {
                    required: {
                      value: true,
                      message: "Email is required!",
                    },
                    pattern: {
                      value:
                        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      message: "Invalid email format!",
                    },
                  })}
                />
                {errors.user_email && (
                  <span className="error top-[54px]">
                    {errors.user_email?.message}
                  </span>
                )}
              </span>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="subject"
                name="subject"
                id="subject"
                className="input"
                {...register("subject", {
                  required: {
                    value: true,
                    message: "Subject is required!",
                  },
                })}
              />
              {errors.subject && (
                <span className="error top-[54px]">
                  {errors.subject?.message}
                </span>
              )}
            </div>
            <div className="relative">
              <textarea
                name="message"
                id="message"
                placeholder="message"
                className="textarea"
                {...register("message", {
                  required: {
                    value: true,
                    message: "Message is required!",
                  },
                })}
              ></textarea>
              {errors.message && (
                <span className="error top-[180px]">
                  {errors.message?.message}
                </span>
              )}
            </div>
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
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Contact;
