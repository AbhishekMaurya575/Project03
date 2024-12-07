import React from "react";

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 lg:px-12 xl:px-6">
        <div className="space-y-6 lg:space-y-0 lg:flex lg:gap-6 lg:items-center lg:gap-12">
          <div className="lg:5/12 lg:w-5/12">
            <img
              src="src\assets\image2.jpg"
              alt="image"
            />
          </div>
          <div className="lg:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold lg:text-4xl">
           Hi
            </h2>
            <p className="mt-6 text-gray-600">
              I am a frontend developer with a background outside
              of technology, but a strong passion for learning and growth.
              Despite starting from scratch, I worked tirelessly to develop
              my skills in web development, focusing on the core technologies
              of HTML, CSS, JavaScript, and frameworks like React. I is
              always eager to learn and stay up-to-date with the latest trends
              in frontend development. My determination to create intuitive,
              user-centered web experiences drives  to keep improving and
              taking on new challenges. With a growing portfolio of projects and
              a mindset centered around continuous improvement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
