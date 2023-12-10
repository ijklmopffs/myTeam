import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import sideImg1 from "../assets/bg-pattern-home-1.svg";
import sideImg2 from "../assets/bg-pattern-home-2.svg";
import sideImg3 from "../assets/bg-pattern-home-3.svg";
import sideImg4 from "../assets/bg-pattern-home-4-about-3.svg";
import sideImg5 from "../assets/bg-pattern-home-5.svg";
import individuals from "../assets/icon-person.svg";
import settings from "../assets/icon-cog.svg";
import charts from "../assets/icon-chart.svg";
import quotes from "../assets/icon-quotes.svg";
import kady from "../assets/avatar-kady.jpg";
import aiysha from "../assets/avatar-aiysha.jpg";
import arthur from "../assets/avatar-arthur.jpg";
import Footer from "../components/Footer";

export default function Home() {
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const isVisible = scrollY > 200;

      if (isVisible && !animationTriggered) {
        controls.start({ x: 0, opacity: 1 });
        setAnimationTriggered(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls, animationTriggered]);

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
        <header className="bg-midnightGreen">
          <section className="max-w-[1110px] mx-auto">
            <Navbar />

            <div className="flex flex-col lg:flex-row text-white my-20 text-center lg:text-start items-center lg:items-end gap-20 p-4">
              <img
                src={sideImg1}
                alt=""
                className="absolute left-[-9rem] hidden lg:block"
              />
              <h1 className="font-bold text-4xl w-48 md:text-[64px] lg:text-[100px] mx-0 my-0 leading-none md:w-[45rem]">
                Find the best <span className="text-lightCoral"> talent</span>
              </h1>
              <div>
                <div className="h-1 bg-raptureBlue w-12 mb-36 hidden lg:block"></div>
                <p className="font-semibold w-96 text-sm md:text-lg md:w-[27.8125rem]">
                  Finding the right people and building high performing teams
                  can be hard. Most companies aren’t tapping into the abundance
                  of global talent. We’re about to change that.
                </p>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img src={sideImg2} alt="brand background image" />
            </div>
          </section>
        </header>

        <section className="bg-sacramentoStateGreen text-white">
          <div className="max-w-[1110px] px-10 mx-auto flex flex-col lg:flex-row gap-44 text-start py-32 lg:px-4 md:px-20">
            <div>
              <div className="h-1 bg-lightCoral w-12 mb-12"></div>
              <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl w-52 md:w-[29rem]">
                Build & manage distributed teams like no one else.
              </h2>
            </div>
            <div>
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div>
                  <img src={individuals} alt="" />
                </div>
                <div className="text-center md:text-start">
                  <h3 className="font-bold text-lg text-lightCoral mb-4">
                    Experienced Individuals
                  </h3>
                  <p className="w-96 md:w-[28rem] font-semibold text-sm text-white/70">
                    Our network is made up of highly experienced professionals
                    who are passionate about what they do.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-4 my-20">
                <div>
                  <img src={settings} alt="" />
                </div>
                <div className="text-center md:text-start">
                  <h3 className="font-bold text-lg text-lightCoral mb-4">
                    Easy to Implement
                  </h3>
                  <p className="w-96 md:w-[28rem] font-semibold text-sm text-white/70">
                    Our processes have been refined over years of implementation
                    meaning our teams always deliver.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-4 my-20">
                <div>
                  <img src={charts} alt="" />
                </div>
                <div className="text-center md:text-start">
                  <h3 className="font-bold text-lg text-lightCoral mb-4">
                    Enhanced Productivity
                  </h3>
                  <p className="w-96 md:w-[28rem] font-semibold text-sm text-white/70">
                    Our customized platform with in-built analytics helps you
                    manage your distributed teams.
                  </p>
                </div>
              </div>
              <div className="relative w-[70rem]">
                <div className="absolute right-[33rem] top-[-85rem] md:right-0 md:top-[-60rem] lg:right-[-9rem] lg:top-[-12rem]">
                  <img src={sideImg3} alt="brand background image" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <motion.section className="bg-midnightGreen">
          <img src={sideImg4} alt="" />
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={controls}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-[1110px] mx-auto text-white p-4"
          >
            <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl">
              Delivering real results for top <br /> companies. Some of our
              <span className="text-raptureBlue"> success stories.</span>
            </h2>
            <div className="my-20 flex flex-col lg:flex-row items-center justify-between">
              <div
                className="w-fit bg-no-repeat bg-top p-12"
                style={{ backgroundImage: `url('${quotes}')` }}
              >
                <p className="w-96 font-semibold text-sm">
                  “The team perfectly fit the specialized skill set required.
                  They focused on the most essential features helping us launch
                  the platform eight months faster than planned.”
                </p>
                <div className="my-6">
                  <h3 className="font-bold text-lg text-raptureBlue">
                    Kady Baker
                  </h3>
                  <p className="font-medium text-xs italic mb-3">
                    Product Manager at Bookmark
                  </p>
                  <img
                    src={kady}
                    alt="kady"
                    className="rounded-full w-14 h-14 border-[3px] border-white mx-auto"
                  />
                </div>
              </div>

              <div
                className="w-fit bg-no-repeat bg-top p-12"
                style={{ backgroundImage: `url('${quotes}')` }}
              >
                <p className="w-96 font-semibold text-sm">
                  “We needed to automate our entire onboarding process. The team
                  came in and built out the whole journey. Since going live,
                  user retention has gone through the roof!”
                </p>
                <div className="my-6">
                  <h3 className="font-bold text-lg text-raptureBlue">
                    Aiysha Reese
                  </h3>
                  <p className="font-medium text-xs italic mb-3">
                    Founder of Manage
                  </p>
                  <img
                    src={aiysha}
                    alt="aiysha"
                    className="rounded-full w-14 h-14 border-[3px] border-white mx-auto"
                  />
                </div>
              </div>

              <div
                className="w-fit bg-no-repeat bg-top p-12"
                style={{ backgroundImage: `url('${quotes}')` }}
              >
                <p className="w-96 font-semibold text-sm">
                  “Amazing. Our team helped us build an app that delivered a new
                  experience for hiring a physio. The launch was an instant
                  success with 100k downloads in the first month.”
                </p>
                <div className="my-6">
                  <h3 className="font-bold text-lg text-raptureBlue">
                    Arthur Clarke
                  </h3>
                  <p className="font-medium text-xs italic mb-3">
                    Co-founder of MyPhysio
                  </p>
                  <img
                    src={arthur}
                    alt="kady"
                    className="rounded-full w-14 h-14 border-[3px] border-white mx-auto"
                  />
                </div>
              </div>
            </div>
          </motion.div>
          <div className="flex justify-end">
            <img src={sideImg5} alt="brand background image" />
          </div>
        </motion.section>

        <Footer />
      </motion.main>
    </AnimatePresence>
  );
}
