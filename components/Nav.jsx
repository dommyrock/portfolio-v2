import NavBox from "./NavBox";

export default function Nav() {
  return (
    <nav className="hidden text-sm font-bold uppercase text-widest mt-20 md:block">
      <ul className="flex flex-row md:flex-col md:-my-16">
        <li className="md:mt-4">
          <NavBox pfx="01" txt="projects" />
        </li>
        <li className="md:mt-4">
          <NavBox pfx="02" txt="posts" />
        </li>
        <li className="md:mt-4">
          <NavBox pfx="03" txt="debugging" />
        </li>
      </ul>
    </nav>
  );
}
