import React from "react";
import { SocialMediaIconsReact } from "social-media-icons-react";
const PhoneIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 mr-2"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
      />
    </svg>
  );
};

const EmailIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 mr-2"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
      />
    </svg>
  );
};

const Topbar = () => {
  return (
    <div className="flex items-center justify-between top-0">
      <div>
        <h1>
          <PhoneIcon /> 8668768612, 8097760688, 7507316272
        </h1>
        <h1>
          <EmailIcon /> support_nebula@gmail.com
        </h1>
      </div>
      <div>
        {" "}
        <SocialMediaIconsReact
          borderColor="rgba(0,0,0,0.25)"
          icon="facebok"
          iconColor="rgba(255,255,255,1)"
          backgroundColor="rgb(27,31,35)"
          url="https://some-website.com/my-social-media-url"
          size="40"
        />
        <SocialMediaIconsReact
          borderColor="rgba(0,0,0,0.25)"
          icon="linkedin"
          iconColor="rgba(255,255,255,1)"
          backgroundColor="rgb(27,31,35)"
          url="https://some-website.com/my-social-media-url"
          size="40"
        />
      </div>
    </div>
  );
};

export default Topbar;
