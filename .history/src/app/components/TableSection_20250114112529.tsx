// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const TableSection = () => {
//   return (
//     // <section className="flex justify-between bg-[#FAF4F4] px-24  w-full h-[500px]">
//     <section className="flex flex-col md:flex-row items-center justify-between bg-[#FAF4F4] px-8 md:px-16 lg:px-24 w-full h-[900px] md:w-full md:h-[500px]">
//       <div className="-space-y-24 mt-8">
//         <Image
//           src={"/sideTable/side table.png"}
//           alt="side table"
//           width={450}
//           height={450}
//         />

//         <h3 className="font-medium text-[36px] font-[poppins] ml-12 ">Side table</h3>
//         <button>
//           <Link
//             href={"/"}
//             className="text-[24px] font-medium font-[poppins] ml-12 border-b-2 border-black py-3"
//           >
//             View More
//           </Link>
//         </button>
//       </div>
//       <div className="-space-y-24 mt-8 ">
//         <Image
//           src={"/sideTable/Cloud sofa.png"}
//           alt="cloud sofa"
//           width={450}
//           height={450}
//         />

//         <h3 className="font-medium text-[36px] font-[poppins] ml-12 ">Side table</h3>
//         <button>
//           <Link
//             href={"/"}
//             className="text-[24px] font-medium font-[poppins] ml-12 border-b-2 border-black py-3"
//           >
//             View More
//           </Link>
//         </button>
//       </div>
//     </section>
//   );
// };

// export default TableSection;
// {
//   /* <Image src={'/sideTable/Cloud sofa.png'} alt='side table' width={150} height={150}></Image> */
// }

import Image from "next/image";
import Link from "next/link";
import React from "react";

const TableSection = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between  bg-[#FAF4F4]  px-8 md:px-16 lg:px-24 py-4 w-full md:h-[520px]">
      
      <div className="flex flex-col items-center lg:items-start mt-4">
        <Image
          src={"/sideTable/side table.png"}
          alt="side table"
          width={300}
          height={300}
          className="lg:w-[450px] lg:h-[450px]"
        />
        <h3 className="font-medium text-[24px] lg:text-[36px] font-[poppins] text-center md:-mt-32 md:ml-12 lg:text-left">
          Side Table
        </h3>
        <button>
          <Link
            href={"/"}
            className="text-[18px] lg:text-[24px] font-medium font-[poppins] border-b-2 md:ml-12 border-black py-1"
          >
            View More
          </Link>
        </button>
      </div>

      
      <div className="flex flex-col items-center lg:items-start mt-4">
        <Image
          src={"/sideTable/Cloud sofa.png"}
          alt="cloud sofa"
          width={300}
          height={300}
          className="lg:w-[450px] lg:h-[450px]"
        />
        <h3 className="font-medium text-[24px] lg:text-[36px] font-[poppins] text-center md:-mt-32 md:ml-12 lg:text-left">
          Cloud Sofa
        </h3>
        <button>
          <Link
            href={"/"}
            className="text-[18px] lg:text-[24px] font-medium font-[poppins] border-b-2 border-black py-1 md:ml-12"
          >
            View More
          </Link>
        </button>
      </div>
    </section>
  );
};

export default TableSection;
