import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";



  
const ResponsiveMenu = ({ isOpen })=> {
    return (
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: -10 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 left-0 w-full h-screen z-20 lg:hidden"
          ><div>
            
          </div>
            <div className="text-lg font-semibold uppercase bg-white text-black  border-t-2 border-gray-300 p-6 ">

              <ul className="flex flex-col justify-center items-center gap-10">
                <li ><Link href='/' className="border-b-2 border-black">Home</Link></li>
                <li ><Link href='/cours'>Cours</Link></li>
                <li ><Link href='/quizz'>Quizz</Link></li>
                <li  className="w-full justify-center flex items-center">

          <Link  href="/sign" className={cn(buttonVariants({ variant: "outline" }), "w-full h-11 border-black")}>Connection</Link>
                </li>
<li className="w-full justify-center flex items-center" >

          <Link  href="/register" className={cn(buttonVariants({ variant: "default" }), "w-full h-11 ")}>Inscription</Link>
</li>
           
              </ul>
               {/* CTA Button section */}
          
            
          
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };
  export default ResponsiveMenu;