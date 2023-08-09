import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";

export default function Footer() {
  return (
    <div id="footerParent">
      <footer>
        <p>Have a question or want to work together?</p>
        <IoIosArrowDown id="downArrow" size={30} />

        <div className="social-icons">
          <a
            href="mailto:bbrungardt5@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            id="mail"
            className="icon"
          >
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M87.5 10H12.5C6.71 10 2 14.71 2 20.5V79.5C2 85.29 6.71 90 12.5 90H87.5C93.29 90 98 85.29 98 79.5V20.5C98 14.71 93.29 10 87.5 10ZM49.97 57.57L10.43 26.43C9.24 25.05 9.57 23 11.15 23H88.85C90.43 23 90.76 25.05 89.57 26.43L50.03 57.57C49.3 58.5 48.7 58.5 47.97 57.57C47.24 56.65 47.24 55.35 47.97 54.43L75.63 30.85C77.03 28.75 74.97 27 73.06 28.35L49.97 45.36C49.24 45.93 48.76 45.93 48.03 45.36L24.94 28.35C23.03 27 20.97 28.75 22.37 30.85L50.03 54.43C50.76 55.35 50.76 56.65 49.97 57.57z"></path>
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/brandonbrungardt"
            target="_blank"
            rel="noopener noreferrer"
            id="linkedin"
            className="icon"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/bbrungardt02"
            target="_blank"
            rel="noopener noreferrer"
            id="github"
            className="icon"
          >
            <AiFillGithub />
          </a>
        </div>
      </footer>
    </div>
  );
}
