import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import mail from "./../assets/images/mail.jpg";
import { BiSend } from "react-icons/bi";
import { useAlert } from "../common/Alert";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PermPhoneMsgOutlinedIcon from '@mui/icons-material/PermPhoneMsgOutlined';
import background from '../assets/videos/background.mp4'




export default function Contact() {
  const { showAlert } = useAlert();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();


  const onSubmit = async (data) => {
    try {
      const response = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        data,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      console.log("SUCCESS!", response.status, response.text);
      showAlert("success", "Message sent successfully!");
      reset();
    } catch (error) {
      console.error("FAILED...", error);
      showAlert("error", "Failed to send the message. Please try again.");
    }
  };


  return (
    <>
      <video loop autoPlay muted src={background} type="video/mp4" className="background-video" />
      <div className="container dcenter-div rounded-circle">
        <div className="card shadow">
          <div className="card-header ">
            <h3>Send me a message</h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-8">
                <div className="form h-100">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                      <div className="col-md-6 form-group">
                        <label className="col-form-label">Name *</label>
                        <input
                          type="text"
                          className="form-control form-rounded"
                          placeholder="Your name"
                          {...register("name", {
                            required: "Name is required",
                          })}
                        />
                        {errors.name && (
                          <small className="text-danger ml-3">
                            {errors.name.message}
                          </small>
                        )}
                      </div>
                      <div className="col-md-6 form-group">
                        <label className="col-form-label">Email *</label>
                        <input
                          type="email"
                          className="form-control form-rounded"
                          placeholder="Your email"
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value:
                                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                              message: "Invalid email address",
                            },
                          })}
                        />
                        {errors.email && (
                          <small className="text-danger ml-3">
                            {errors.email.message}
                          </small>
                        )}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 form-group">
                        <label className="col-form-label">Phone *</label>
                        <input
                          type="text"
                          className="form-control form-rounded"
                          placeholder="Phone #"
                          {...register("phone", {
                            required: "Phone is required",
                            pattern: {
                              value: /^[0-9]{10}$/,
                              message: "Phone number must be 10 digits",
                            },
                          })}
                        />
                        {errors.phone && (
                          <small className="text-danger ml-3">
                            {errors.phone.message}
                          </small>
                        )}
                      </div>
                      <div className="col-md-6 form-group">
                        <label className="col-form-label">Company</label>
                        <input
                          type="text"
                          className="form-control form-rounded"
                          placeholder="Company name"
                          {...register("company")}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12 form-group mb-5">
                        <label className="col-form-label">Message *</label>
                        <textarea
                          className="form-control form-rounded"
                          placeholder="Write your message"
                          rows="8"
                          {...register("message", {
                            required: "Message is required",
                          })}
                        ></textarea>
                        {errors.message && (
                          <small className="text-danger ml-3">
                            {errors.message.message}
                          </small>
                        )}
                      </div>
                    </div>

                    <div className="d-flex">
                      <button className="btn btn-primary mr-2" type="submit">
                        Send <BiSend size={20} className="pt-1" />
                      </button>
                      <button
                        className="btn btn-danger"
                        type="button"
                        onClick={() => reset()}
                      >
                        Clear
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-4">
                <div className="contact-info ">
                  <h3 className="d-flex justify-content-center">Contact Information</h3>
                  <img
                    src={mail}
                    className=""
                    alt="300 X 300"
                    width="300px"
                    height="300px"
                  />
                  <div>
                    <p className="m-3">
                      <a
                        className="textcap d-flex"
                        href="https://goo.gl/maps/kdACpjCcsdPU8NtGA"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <HomeOutlinedIcon sx={{ mr: 1 }} />
                        2-58, Main Bazar, Bobbepali, Martur, Bapatla, Andhra
                        Pradesh - 523301.
                      </a>
                      <div >
                        <a
                          href="https://www.linkedin.com/in/mannembhanuprakash"
                          target="_blank"
                          rel="noreferrer"
                          className="d-flex mt-2"
                        >
                          <GroupOutlinedIcon sx={{ mr: 1 }} />
                          linkedin.com/in/mannembhanuprakash
                        </a>
                      </div>
                      <div >
                        <a
                          href="mailto:bhanuprakashmannem20@gmail.com"
                          rel="noreferrer"
                          className="d-flex mt-2"
                        >
                          <EmailOutlinedIcon sx={{ mr: 1 }} />
                          bhanuprakashmannem20@gmail.com
                        </a>
                      </div>
                      <div className="d-flex mt-2">
                        <a href="tel:+918184959300" className="d-flex">
                          <PermPhoneMsgOutlinedIcon sx={{ mr: 1 }} />
                          +91-8184959300</a>
                      </div>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
