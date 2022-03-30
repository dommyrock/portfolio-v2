export default function NavBox({pfx,txt}) {
  return (
    <a
      className="inline-flex items-center hover:text-zenith transition group text-zenith"
      href={`#${txt}`}
    >
      <div className="nav_box shadow">
        <div className="circle">
          <span className="text-xs tracking-wide pl-12">{pfx}</span>
          <span className="text-xs tracking-widest uppercase pl-2">
            {txt}
          </span>
        </div>
      </div>
    </a>
  );
}
