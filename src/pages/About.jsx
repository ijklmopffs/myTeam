import { motion, AnimatePresence } from "framer-motion";
import Directors from "../components/Directors";
import Navbar from "../components/Navbar";
import sideImg1 from "../assets/bg-pattern-about-1-mobile-nav-1.svg";
import sideImg2 from "../assets/bg-pattern-about-2-contact-1.svg";
import sideImg3 from "../assets/bg-pattern-home-4-about-3.svg";
import sideImg4 from "../assets/bg-pattern-about-4.svg";
import nikita from "../assets/avatar-nikita.jpg";
import duncan from "../assets/avatar-christian.jpg";
import cruz from "../assets/avatar-cruz.jpg";
import drake from "../assets/avatar-drake.jpg";
import griffin from "../assets/avatar-griffin.jpg";
import aden from "../assets/avatar-aden.jpg";
import verge from "../assets/logo-the-verge.png";
import jakarta from "../assets/logo-jakarta-post.png";
import guardian from "../assets/logo-the-guardian.png";
import techrader from "../assets/logo-tech-radar.png";
import gadgets from "../assets/logo-gadgets-now.png";

import Footer from "../components/Footer";

export default function About() {
  return (
    <AnimatePresence>
      <motion.main
        initial={{
          opacity: 0,
          clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
        }}
        animate={{
          opacity: 1,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        }}
        exit={{ clipPath: "polygon(100% 0%, 0 0%, 0 100%, 100% 100%)" }}
        transition={{ duration: 1.5, ease: "easeIn" }}
      >
        <header className="bg-midnightGreen h-[365px] md:h-[508px] lg:h-[317px]">
          <section className="max-w-[1110px] mx-auto">
            <Navbar />

            <div className="flex flex-col lg:flex-row text-white my-20 text-center lg:text-start items-center lg:items-end gap-5 md:gap-10 lg:gap-20 p-4">
              <h1 className="font-bold text-4xl w-48 md:text-[64px] mx-0 my-0 leading-none md:w-[45rem]">
                About
              </h1>
              <div>
                <div className="h-1 bg-lightCoral w-12 mb-28 hidden lg:block"></div>
                <p className="font-semibold w-96 lg:w-auto text-sm md:text-lg">
                  We help companies build dynamic teams made up of top global
                  talent. Using our network of passionate professionals we drive
                  innovation and deliver incredible outcomes. Talented, diverse
                  teams shape the best products and experiences. We’ll bring
                  those teams to you.
                </p>
              </div>
            </div>
          </section>
          <div className="relative">
            <div className="-right-32 lg:right-0 absolute -top-20 md:-top-44">
              <img src={sideImg1} alt="brand background image" />
            </div>
          </div>
        </header>

        <section className="bg-deepJungleGreen z-10 relative">
          <img src={sideImg2} alt="" className="relative -left-36" />
          <div className="text-white max-w-[1110px] mx-auto py-32">
            <h2 className="font-bold text-5xl">Meet the directors</h2>
            <div className="flex flex-wrap gap-12 my-10 justify-center lg:justify-between">
              <Directors
                name="Nikita Marks"
                role="Founder & CEO"
                image={nikita}
                quote="Teamwork makes the dream work. Together, we can achieve anything we set our minds to."
              />
              <Directors
                name="Cristian Duncan"
                role="Co-founder & COO"
                image={duncan}
                quote="None of us is as smart as all of us. When we work together, we can come up with better solutions than we could on our own."
              />
              <Directors
                name="Cruz Hamer"
                role="Co-founder & CTO"
                image={cruz}
                quote="Alone we can do so little, but together we can do so much. Let us work together to accomplish great things"
              />
              <Directors
                name="Drake Heaton"
                role="Business Development Lead"
                image={drake}
                quote="Teamwork is the ability to work together toward a common vision. The ability to direct individual accomplishments toward organizational objectives."
              />
              <Directors
                name="Griffin Wise"
                role="Lead Marketing"
                image={griffin}
                quote="Unique perspectives shape unique products, which is what you need to survive these days."
              />
              <Directors
                name="Aden Allen"
                role="Head of Talent"
                image={aden}
                quote="Empowered teams create truly amazing products. Set the north star and let them follow it."
              />
            </div>
          </div>
          <div className="flex justify-end">
            <img src={sideImg3} alt="" />
          </div>
        </section>

        <section className="bg-sacramentoStateGreen">
          <div>
            <img
              src={sideImg4}
              alt=""
              className="absolute md:static left-[-9.25rem]"
            />
          </div>

          <motion.div
            initial={{ x: "100%" }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-[1110px] mx-auto text-white pt-20 pb-40"
          >
            <h2 className="font-bold text-5xl mb-20">Some of our clients</h2>
            <div className="flex flex-col md:flex-row items-center justify-between gap-20">
              <div>
                <img src={verge} alt="" className="w-48 md:w-auto" />
              </div>
              <div>
                <img src={jakarta} alt="" className="w-48 md:w-auto" />
              </div>
              <div>
                <img src={guardian} alt="" className="w-48 md:w-auto" />
              </div>
              <div>
                <img src={techrader} alt="" className="w-48 md:w-auto" />
              </div>
              <div>
                <img src={gadgets} alt="" className="w-48 md:w-auto" />
              </div>
              <div></div>
            </div>
          </motion.div>
        </section>

        <Footer />
      </motion.main>
    </AnimatePresence>
  );
}
