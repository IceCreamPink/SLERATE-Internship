// import React from "react";
// import {
//   FaInstagram,
//   FaXTwitter,
//   FaLinkedinIn,
//   FaFacebookF,
//   FaArrowUp,
// } from "react-icons/fa6";
// import { footerData } from "../data/contentData";

// const iconMap = {
//   FaInstagram: FaInstagram,
//   FaXTwitter: FaXTwitter,
//   FaLinkedinIn: FaLinkedinIn,
//   FaFacebookF: FaFacebookF,
// };

// const Footer = () => {
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <footer id="contact" className="relative w-full text-white bg-[#050B34]">
//       <div className="bg-[url('/vector/bg-footer.png')] bg-cover bg-center bg-no-repeat">
//         <div className="bg-[url('/vector/footer.png')] bg-cover bg-center bg-no-repeat py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12">
//           <div className="max-w-7xl mx-auto">
//             <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
//               <div className="lg:col-span-1 space-y-4">
//                 <img
//                   src="/logo-white.webp"
//                   alt="Slerate Logo"
//                   className="w-[100px] sm:w-[120px]"
//                 />
//                 <div className="flex gap-3 sm:gap-4">
//                   {footerData.socialLinks.map(({ id, icon, href }) => {
//                     const IconComponent = iconMap[icon];
//                     return (
//                       <a
//                         key={id}
//                         href={href}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-white opacity-70 hover:opacity-100 transition-all duration-300"
//                       >
//                         <IconComponent className="text-lg sm:text-xl cursor-pointer hover:scale-110 transition-transform duration-300" />
//                       </a>
//                     );
//                   })}
//                 </div>
//               </div>

//               {footerData.columns.map((col, i) => (
//                 <div key={i} className="space-y-3">
//                   <h4 className="font-semibold text-base sm:text-lg mb-3 text-white">
//                     {col.title}
//                   </h4>
//                   {col.items.map((item, idx) => (
//                     <a
//                       key={idx}
//                       href={item.href}
//                       className="block text-sm sm:text-base opacity-70 hover:opacity-100 cursor-pointer transition-all duration-300 hover:translate-x-1"
//                     >
//                       {item.label}
//                     </a>
//                   ))}
//                 </div>
//               ))}
//             </div>

//             <div className="md:hidden space-y-8">
//               <div className="text-center space-y-4">
//                 <img
//                   src="/logo-white.webp"
//                   alt="Slerate Logo"
//                   className="w-[100px] mx-auto"
//                 />
//                 <div className="flex justify-center gap-4">
//                   {footerData.socialLinks.map(({ id, icon, href }) => {
//                     const IconComponent = iconMap[icon];
//                     return (
//                       <a
//                         key={id}
//                         href={href}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-white opacity-70 hover:opacity-100 transition-all duration-300"
//                       >
//                         <IconComponent className="text-xl cursor-pointer hover:scale-110 transition-transform duration-300" />
//                       </a>
//                     );
//                   })}
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
//                 {footerData.columns.map((col, i) => (
//                   <div key={i} className="space-y-3">
//                     <h4 className="font-semibold text-lg mb-3 text-white text-center sm:text-left">
//                       {col.title}
//                     </h4>
//                     <div className="space-y-2">
//                       {col.items.map((item, idx) => (
//                         <a
//                           key={idx}
//                           href={item.href}
//                           className="block text-center sm:text-left opacity-70 hover:opacity-100 cursor-pointer transition-all duration-300"
//                         >
//                           {item.label}
//                         </a>
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="mt-8 sm:mt-12 border-t border-gray-600 pt-6">
//             <div className="max-w-7xl mx-auto">
//               <div className="flex flex-col lg:flex-row justify-between items-center text-sm text-gray-400 gap-4">
//                 <p className="text-center lg:text-left">
//                   © 2025 SLERATE | All Rights Reserved.
//                 </p>
//                 <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
//                   {footerData.bottomLinks.map((link, idx) => (
//                     <a
//                       key={idx}
//                       href={link.href}
//                       className="hover:text-white transition-colors duration-300 whitespace-nowrap"
//                     >
//                       {link.label}
//                     </a>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <button
//         onClick={scrollToTop}
//         className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-[#F89A1C] text-white p-2 sm:p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300 z-50 hover:shadow-xl"
//         aria-label="Scroll to top"
//       >
//         <FaArrowUp className="text-sm sm:text-base" />
//       </button>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import {
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaFacebookF,
  FaArrowUp,
} from "react-icons/fa6";
import { motion } from "framer-motion";
import { footerData } from "../data/contentData";

const iconMap = {
  FaInstagram: FaInstagram,
  FaXTwitter: FaXTwitter,
  FaLinkedinIn: FaLinkedinIn,
  FaFacebookF: FaFacebookF,
};

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="relative w-full text-white bg-[#050B34]">
      <div className="bg-[url('/vector/bg-footer.png')] bg-cover bg-center bg-no-repeat">
        <div className="bg-[url('/vector/footer.png')] bg-cover bg-center bg-no-repeat py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="hidden md:grid md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="lg:col-span-1 space-y-4">
                <img
                  src="/logo-white.webp"
                  alt="Slerate Logo"
                  className="w-[100px] sm:w-[120px]"
                />
                <div className="flex gap-3 sm:gap-4">
                  {footerData.socialLinks.map(({ id, icon, href }) => {
                    const IconComponent = iconMap[icon];
                    return (
                      <motion.a
                        key={id}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-white opacity-70 hover:opacity-100 transition-all duration-300"
                      >
                        <IconComponent className="text-lg sm:text-xl cursor-pointer transition-transform duration-300" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {footerData.columns.map((col, i) => (
                <div key={i} className="space-y-3">
                  <h4 className="font-semibold text-base sm:text-lg mb-3 text-white">
                    {col.title}
                  </h4>
                  {col.items.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.href}
                      className="block text-sm sm:text-base opacity-70 hover:opacity-100 cursor-pointer transition-all duration-300 hover:translate-x-1"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              ))}
            </motion.div>

            <motion.div
              className="md:hidden space-y-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-center space-y-4">
                <img
                  src="/logo-white.webp"
                  alt="Slerate Logo"
                  className="w-[100px] mx-auto"
                />
                <div className="flex justify-center gap-4">
                  {footerData.socialLinks.map(({ id, icon, href }) => {
                    const IconComponent = iconMap[icon];
                    return (
                      <motion.a
                        key={id}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-white opacity-70 hover:opacity-100 transition-all duration-300"
                      >
                        <IconComponent className="text-xl cursor-pointer transition-transform duration-300" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {footerData.columns.map((col, i) => (
                  <div key={i} className="space-y-3">
                    <h4 className="font-semibold text-lg mb-3 text-white text-center sm:text-left">
                      {col.title}
                    </h4>
                    <div className="space-y-2">
                      {col.items.map((item, idx) => (
                        <a
                          key={idx}
                          href={item.href}
                          className="block text-center sm:text-left opacity-70 hover:opacity-100 cursor-pointer transition-all duration-300"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            className="mt-8 sm:mt-12 border-t border-gray-600 pt-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col lg:flex-row justify-between items-center text-sm text-gray-400 gap-4">
                <p className="text-center lg:text-left">
                  © 2025 SLERATE | All Rights Reserved.
                </p>
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                  {footerData.bottomLinks.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.href}
                      className="hover:text-white transition-colors duration-300 whitespace-nowrap"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-[#F89A1C] text-white p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 z-50"
        aria-label="Scroll to top"
      >
        <FaArrowUp className="text-sm sm:text-base" />
      </motion.button>
    </footer>
  );
};

export default Footer;
