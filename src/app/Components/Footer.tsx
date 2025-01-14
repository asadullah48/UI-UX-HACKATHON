// import Link from "next/link";
// import React from "react";

// const Footer = () => {
//   return (
//     <footer className=" px-8 py-5 w-full h-[419px] font-[poppins] select-none">
//       <div className="flex justify-center gap-28 py-16 px-8 ">
//         <div className="mt-20 mr-9">
//           <span className="text-gray-400 text-sm font-light">
//             400 University Drive Suite 200 Coral <br />
//             spaGables, <br />
//             FL 33134 USA
//           </span>
//         </div>
//         <div className="font-medium ">
//           <ul className="space-y-9">
//             <li className="text-gray-400">Link</li>
//             <li>
//               <Link href={"/"}>Home</Link>
//             </li>
//             <li>
//               <Link href={"/"}>Shop</Link>
//             </li>
//             <li>
//               <Link href={"/"}>About</Link>
//             </li>
//             <li>
//               <Link href={"/"}>Contact</Link>
//             </li>
//           </ul>
//         </div>
//         <div className="font-medium">
//           <ul className="space-y-9">
//             <span className="text-gray-400">Help</span>
//             <li>
//               <Link href={"/"}>Payment Options</Link>
//             </li>
//             <li>
//               <Link href={"/"}>Returns</Link>
//             </li>
//             <li>
//               <Link href={"/"}>Privacy Policies</Link>
//             </li>
//           </ul>
//         </div>
//         <div className=" font-medium space-y-9">
//           <span className="text-gray-400">Newsletter</span>
//           <form className="flex items-center space-x-4 mr-14">
//             <input
//               type="email"
//               placeholder="Enter Your Email Address"
//               className="font-light border-b-[1.5px] border-black focus:outline-none px-1"
//             />

//             <button
//               type="submit"
//               className="px-4 py-2 text-black hover:text-gray-500 border-b-[1.5px] border-black mb-[15px]"
//             >
//               SUBSCRIBE
              
//             </button>
//           </form>
//         </div>
//       </div>
//       <div className=" border-b-[1.5px] border-gray-300 px-32 xl:w-full mt-3 group-hover:text-gray-500"></div>
//       <p className="w-80 py-6">2022 Meuble House. All rights reserved.</p>
//     </footer>
//   );
// };

// export default Footer;

import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="px-28 py-11 w-full font-[poppins] select-none">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  py-12">
        {/* Address Section */}
        <div className="text-gray-400 text-sm font-light mt-24 mr-8">
          <p>
            400 University Drive Suite 200 Coral <br />
            spaGables, <br />
            FL 33134 USA
          </p>
        </div>

        {/* Links Section */}
        <div className="font-medium">
          <ul className="space-y-9">
            <li className="text-gray-400">Link</li>
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/"}>Shop</Link>
            </li>
            <li>
              <Link href={"/"}>About</Link>
            </li>
            <li>
              <Link href={"/"}>Contact</Link>
            </li>
          </ul>
        </div>

        {/* Help Section */}
        <div className="font-medium">
          <ul className="space-y-9">
            <span className="text-gray-400">Help</span>
            <li>
              <Link href={"/"}>Payment Options</Link>
            </li>
            <li>
              <Link href={"/"}>Returns</Link>
            </li>
            <li>
              <Link href={"/"}>Privacy Policies</Link>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="font-medium">
          <span className="text-gray-400">Newsletter</span>
          <form className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4 mt-4">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="w-full md:w-auto border-b-[1.5px] border-black focus:outline-none pb-4"
            />
            <button
              type="submit"
              className="px-4 py-2 text-black hover:text-gray-500 border-b-[1.5px] border-black"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <div className="border-b-[1.5px] border-gray-300 mt-5"></div>

      {/* Footer Bottom Text */}
      <p className=" text-sm text-gray-800  mt-4">
        2022 Meuble House. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
