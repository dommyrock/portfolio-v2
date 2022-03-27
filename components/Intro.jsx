export default function Intro() {
  return (
    <>
      <h1 className="text-6xl font-bold">Dominik Polzer</h1>
      <h2 className="mt-8 sm:text-lg text-[20px] font-semibold leading-tight text-sunrise">
        Software Engineer at Five
      </h2>
      <div className="intro">
        <p className="mt-16">
          I build distributed systems and make performance optimisations for one
          of the biggest US recruiting platforms at{" "}
          <a
            className="underline text-zenith"
            href="https://five.agency/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Five.
          </a>{" "}
          It also happens that my favourite area of development is curently
          distributed systems and data processing.
        </p>
      </div>
    </>
  );
}
