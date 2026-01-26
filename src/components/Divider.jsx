// LINEA GRIS

// import React from "react";
// import { motion } from "framer-motion";

// const Divider = () => {
//   return (
//     <div className="w-full flex justify-center items-center py-6 bg-white">
//       <div className="max-w-6xl w-full px-6 flex items-center">

//         <motion.div
//           initial={{ width: 0, opacity: 0 }}
//           whileInView={{ width: "100%", opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1.5, ease: "easeOut" }}
//           className="h-[1px] bg-gradient-to-r from-transparent to-gray-300 flex-grow"
//         />

//         <motion.div
//           initial={{ scale: 0, opacity: 0 }}
//           whileInView={{ scale: 1, opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.5, duration: 0.8 }}
//           className="mx-4 flex items-center gap-2"
//         >

//           <span className="text-[9px] font-mono text-gray-400 tracking-[0.4em] uppercase">
//             Quandum
//           </span>

//           <span className="text-[9px] font-mono text-gray-400 tracking-[0.4em] uppercase">
//             Aerospace
//           </span>
//         </motion.div>

//         <motion.div
//           initial={{ width: 0, opacity: 0 }}
//           whileInView={{ width: "100%", opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1.5, ease: "easeOut" }}
//           className="h-[1px] bg-gradient-to-l from-transparent to-gray-300 flex-grow"
//         />

//       </div>
//     </div>
//   );
// };

// export default Divider;

// LINEA A COLOR

import React from "react";
import { motion } from "framer-motion";

const Divider = () => {
  return (
    <div className="w-full flex justify-center items-center py-6 bg-white">
      <div className="max-w-6xl w-full px-6 flex items-center">
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "100%", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="h-[1px] bg-gradient-to-r from-transparent to-gray-300 flex-grow"
        />

        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mx-4 flex items-center gap-2"
        >
          <span className=" text-[9px] font-mono tracking-[0.4em] uppercase text-brand-blue">
            Quandum
          </span>{" "}
          <span className=" text-[9px] font-mono tracking-[0.4em] uppercase bg-gradient-to-r  from-brand-pink via-red-400 to-red-700 bg-clip-text text-transparent">
            Aerospace
          </span>
        </motion.div>

        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "100%", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="h-[1px] bg-gradient-to-l from-transparent to-gray-300 flex-grow"
        />
      </div>
    </div>
  );
};

export default Divider;
