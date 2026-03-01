"use client";

import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mreadano");
  if (state.succeeded) {
    return (
      <div className="flex flex-col text-center">
        <h3>Your submission has been received.</h3>
        <h3>Dr. Mignelli will contact you shortly!</h3>
      </div>
    );
  }

  const inputFieldStyles = "p-2 border border-gray-500 rounded-md";

  return (
    <>
      <p className="text-base md:text-lg">
        To reach Dr. John Mignelli directly, fill the following form:
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center w-full text-base text-black"
      >
        <div className="flex flex-col gap-4 w-full md:w-4/5">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 flex flex-col">
              <label htmlFor="fname">First Name</label>
              <input
                type="text"
                name="fname"
                className={inputFieldStyles}
                required
              />
              <ValidationError
                prefix="First Name"
                field="fname"
                errors={state.errors}
              />
            </div>
            <div className="flex-1 flex flex-col">
              <label htmlFor="lname">Last Name</label>
              <input
                type="text"
                name="lname"
                className={inputFieldStyles}
                required
              />
              <ValidationError
                prefix="Last Name"
                field="lname"
                errors={state.errors}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              className={inputFieldStyles}
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              className={`${inputFieldStyles} h-36`}
              required
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button
            className="w-full md:w-[30%] px-4 py-2 mx-auto bg-[var(--primary)] text-white text-sm rounded shadow-xl transition-colors duration-200 ease-in-out hover:bg-linear-to-b hover:from-[var(--primary)] hover:to-[var(--secondary)] cursor-pointer"
            type="submit"
            disabled={state.submitting}
          >
            SUBMIT
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
