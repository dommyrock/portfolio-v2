export default function Nav() {
  return (
   <nav className="hidden text-sm font-bold uppercase text-widest mt-20 md:block">
   <ul className="flex flex-row md:flex-col md:-my-16">
     <li className="md:mt-8">
       <a
         className="inline-flex items-center hover:text-zenith transition group text-zenith"
         href="#projects"
       >
         <span className="text-xs tracking-wide">01</span>
         <span className="inline-block w-24 h-px mx-16 -mt-px group-hover:w-48 bg-dawn group-hover:bg-zenith transition w-48 bg-zenith"></span>
         <span className="text-xs tracking-widest uppercase">
           Projects
         </span>
       </a>
     </li>
     <li className="md:mt-8">
       <a
         className="inline-flex items-center hover:text-zenith transition group"
         href="#posts"
       >
         <span className="text-xs tracking-wide">02</span>
         <span className="inline-block w-24 h-px mx-16 -mt-px group-hover:w-48 bg-dawn group-hover:bg-zenith transition"></span>
         <span className="text-xs tracking-widest uppercase">
           Posts
         </span>
       </a>
     </li>
     <li className="md:mt-8">
       <a
         className="inline-flex items-center hover:text-zenith transition group"
         href="#interviews"
       >
         <span className="text-xs tracking-wide">03</span>
         <span className="inline-block w-24 h-px mx-16 -mt-px group-hover:w-48 bg-dawn group-hover:bg-zenith transition"></span>
         <span className="text-xs tracking-widest uppercase">
           Interviews
         </span>
       </a>
     </li>
   </ul>
 </nav>

  )
}
