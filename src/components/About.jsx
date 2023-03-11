import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants/index";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] text-center font-bold">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-5xl leading-[30px]"
      >
        As a developer, my focus is on using programming languages and technical
        tools to create functional digital products. I am responsible for
        writing the code that powers websites, apps, and other digital products,
        and making sure they work as intended, are reliable, and optimized for
        performance. <br/><br/>As a UI/UX designer, my focus is on creating visually
        appealing and interactive designs for digital products. I work to ensure
        that the product is user-friendly, visually appealing, and aligned with
        the product's brand and identity. I also consider the overall user
        experience and work to ensure that the product is intuitive and
        enjoyable to use. <br/><br/>In summary, as a developer and UI/UX designer, I have
        different but complementary skill sets that are crucial for the creation
        of successful digital products. My technical expertise as a developer
        helps to ensure the product works as intended, while my design expertise
        as a UI/UX designer helps to ensure that it is visually appealing, easy
        to use, and enjoyable for users.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
