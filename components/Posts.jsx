export default function Blogs({ posts }) {
  return (
    <div
      id="posts"
      className="lg:pt-20 pb-8 -my-8 group md:py-0 bg:blue-500 sm:pt-6"
    >
      <h2 className="sticky top-0 z-40 pt-4 pl-4 text-sm font-bold tracking-widest uppercase md:sr-only text-zenith">
        Posts
      </h2>
      <div className="lg:pt-20 pb-40 -my-8 group md:py-0 sm:pt-0">
        {posts.map((blog, idx) => (
          <article
            className="mt-4 rounded transition bg-dusk md:group-hover:opacity-50 md:hover:opacity-important md:hover:scale-11/10x"
            itemScope=""
            itemType="http://schema.org/CreativeWork"
            key={idx}
            style={{backgroundColor:'#464444'}}
          >
            <a
              className="block p-10"
              href={blog[3]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3
                className="classNametext-lg font-semibold leading-tight text-zenith"
                itemProp="name"
              >
                {blog[1]}
              </h3>
              <p className="mt-4">
                {blog[2]}
              </p>
              <div className="flex items-center lg:mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="lightblue"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
                <span className="pl-4 flex text-xs font-semibold leading-none tracking-wider">
                  <p className="tracking-widest uppercase text-zenith">
                  {blog[4]}
                  </p>
                </span>
              </div>
            </a>
          </article>
        ))}
        {/* HOVER GROUP ENDS HERE  */}
      </div>
    </div>
  );
}
