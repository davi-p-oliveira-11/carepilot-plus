import React from "react";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/*----- Left Section  ------*/}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-wide">
            Carepilot<span className="text-primary text-4xl">+</span>
          </h1>
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Carepilot+ simplifies doctor appointment booking for patients,
            clinics, and specialists.
          </p>
        </div>

        {/*----- Middle Section  ------*/}
        <div>
          <p className="text-xl font-medium mb-5">Company</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/*----- Right Section ------*/}
        <div>
          <p className="text-xl font-medium mb-5">Get In Touch</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+1-999-999-9999</li>
            <li>dpo.dev11@gmail.com</li>
          </ul>
        </div>
      </div>

      {/*-------- Copyright Text -----------*/}
      <div>
        <hr />
        <div className="py-5 text-sm text-center">
          <p>© {new Date().getFullYear()} Carepilot+. All rights reserved.</p>
          <p>
            Developed by{" "}
            <a href="py-5 text-sm text-center" target="_blank">
              Davi P. Oliveira · Voltaris Digital Solutions
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
