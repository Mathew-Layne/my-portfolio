import { useState } from "react";

const Aboutme = () => {
  return (
    <div className="container text-gray-400  w-full py-16">
      <h2 className="text-3xl font-semibold my-6 text-gray-200">About Me</h2>

      <div className="content md:flex md:justify-between md:gap-x-20">
        <div className="text md:w-7/12 mb-10">
          <p className="mb-8">
            Hi, I'm <span className="text-teal-400">Mathew Layne</span>, a
            software developer with a passion for creating{" "}
            <span className="text-teal-400">innovative</span> and{" "}
            <span className="text-teal-400">user-friendly</span> web
            experiences. With expertise in Laravel, MySQL, JS, React, and more,
            I specialize in web design and development.
          </p>
          <p className="mb-8">
            Certified in Web Design (Level 3) and Web Development (Level 2), I'm
            committed to{" "}
            <span className="text-teal-400">continuous learning</span> and
            staying up to date with the latest technologies. My goal is to make
            a positive impact by crafting websites that deliver{" "}
            <span className="text-teal-400">exceptional user experiences</span>.
          </p>
          <p className="mb-8">
            Excited to explore new opportunities and contribute to the{" "}
            <span className="text-teal-400">evolving world</span> of web
            development.
          </p>

          <p>
            Here are a few technologies I’ve been working with recently:
            <div className="flex gap-x-10 my-3">
              <div>
                <div>
                  <span>
                    <i className="fa-regular fa-play text-teal-400 mr-2"></i>
                  </span>
                  Laravel
                </div>
                <div>
                  <span>
                    <i className="fa-regular fa-play text-teal-400 mr-2"></i>
                  </span>
                  PHP
                </div>
                <div>
                  <span>
                    <i className="fa-regular fa-play text-teal-400 mr-2"></i>
                  </span>
                  React JS
                </div>
                <div>
                  <span>
                    <i className="fa-regular fa-play text-teal-400 mr-2"></i>
                  </span>
                  MySQL
                </div>
              </div>

              <div>
                <div>
                  <span>
                    <i className="fa-regular fa-play text-teal-400 mr-2"></i>
                  </span>
                  Tailwind CSS
                </div>
                <div>
                  <span>
                    <i className="fa-regular fa-play text-teal-400 mr-2"></i>
                  </span>
                  Livewire
                </div>
                <div>
                  <span>
                    <i className="fa-regular fa-play text-teal-400 mr-2"></i>
                  </span>
                  JavaScript (ES6+)
                </div>
                <div>
                  <span>
                    <i className="fa-regular fa-play text-teal-400 mr-2"></i>
                  </span>
                  Wordpress
                </div>
              </div>
            </div>
          </p>
        </div>

        <div className="image md:w-6/12">
          <div className="w-5/6 md:w-4/6 group">
            <div className=" border-2 rounded-lg border-teal-400 transition duration-300 group-hover:translate-x-4 group-hover:translate-y-4 translate-x-3 translate-y-3">
              <div className="relative">
              <img
                className="rounded-lg transition duration-300 group-hover:-translate-x-6 group-hover:-translate-y-6 -translate-x-3 -translate-y-3"
                src="./mathew2.png"
                alt="Picture of Mathew Layne"
              />
               <div class="absolute inset-0 bg-teal-400 opacity-50 mix-blend-multiply group-hover:mix-blend-normal rounded-lg transition-opacity duration-300 group-hover:opacity-0 -translate-x-3 -translate-y-3"></div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
