import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { view } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { FaFigma } from 'react-icons/fa';

const DesignLink = () => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
    <a href="https://www.figma.com/@prosperlolo" target="_self" rel="noreferrer noopener"><FaFigma/>You can check my designs here</a>
    </motion.div>
  );
}

const ProrjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  link
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-[450px]"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              onClick={() => window.open(source_code_link, "_blank")}
            >
              <img
                src={view}
                alt="view"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color} `}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My WORK</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      {/* <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-5xl leading-[30px]"
        >
          As a developer and UI/UX designer, I
          specialize in creating visually appealing and effective software
          solutions for mobile apps, web apps, desktop applications, and
          websites. Take a look at my works and see the quality and creativity
          that I bring to every project. Let's work together to create software
          solutions and designs that will make a lasting impression on your
          audience.
        </motion.p>
      </div> */}

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProrjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      {/* <DesignLink/> */}
    </>
  );
};

export default SectionWrapper(Works, "");
