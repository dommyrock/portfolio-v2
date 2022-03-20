export default function Intro() {
  return (
    <>
      <h1 className="text-6xl font-bold">Dominik Polzer</h1>
      <h2 className="mt-8 sm:text-lg text-[20px] font-semibold leading-tight text-sunrise">
        Software Engineer at Five
      </h2>
      <div className="intro">
        <p className="mt-16">
          I build open-source front-end libraries at{" "}
          <a
            className="underline text-zenith"
            href="https://www.algolia.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Algolia
          </a>{" "}
          and host the{" "}
          <a
            className="underline text-zenith"
            href="https://developerexperience.buzzsprout.com/"
            rel="noopener noreferrer"
          >
            Developer Experience podcast
          </a>
          . I cant shut up about test-driven development and utility-first CSS.
          I also share what I learn on my{" "}
          <a
            className="underline text-zenith"
            href="http://frontstuff.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            blog
          </a>
          and in conferences around the world.
        </p>
      </div>
    </>
  );
}
