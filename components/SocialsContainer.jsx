import Image from "next/image";

const SocialsContainer = () => {
  return (
    <div className="flex items-center w-full mt-32">
      <div
        style={{ borderRadius: "999px", overflow: "hidden", display: "flex" }}
      >
        <Image
          src="/ppict.png"
          alt="profile-picture"
          layout="intrinsic"
          width={64}
          height={64}
        />
      </div>
      <ul className="socials-container pl-4">
        <li className="pt-4">
          <a
            href="https://github.com/dommyrock"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="w-6 h-6 mr-6 fill-current"
              width={8}
              height={8}
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
            </svg>
            <span>Github</span>
          </a>
        </li>

        <li className="pt-4">
          <a
            href="https://twitter.com/dompolzer"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="w-6 h-6 mr-6 fill-current"
            >
              <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-3.594-1.555c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 3.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 19.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 4.557z"></path>
            </svg>
            <span>Twitter</span>
          </a>
        </li>
        <li className="pt-4">
          <a
            href="https://docs.google.com/document/d/10Dv7QXqrctqUafpkycXAXnjmN4Jv1baYUXhJAenVOsY/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
            id="cv-section"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mr-6 fill-current"
              fill="none" viewBox="0 0 24 24" stroke="black " strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span>CV</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialsContainer;
