import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon
} from "@heroicons/react/24/solid"
import { BenefitType, SelectedPage } from "@/shared/types"
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

const benefits: Array<BenefitType> = [{
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description: "Enjoy using our modern equipment for cardio and strength training."
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description: "Our classes offer something for everyone, from kickboxing to yoga"
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description: "You can use the help of our personal trainers, who will set up a training plan for you"
}]

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2}
  }
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section
      id="benefits"
      className="mx-auto min-h-full w-5/6 py-20"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        <motion.div 
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, x:50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST A GYM</HText>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div>
        <motion.div 
          className="items-center justify-between gap-8 mt-5 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              title={benefit.title}
              icon={benefit.icon}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          <img 
            className="mx-auto"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />
          <div>
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div 
                  className="relative"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 1 }}
                  variants={{
                    hidden: { opacity: 0, x:-50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1 }}
              variants={{
                hidden: { opacity: 0, x:-50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Aenean imperdiet velit dui, sed luctus ante lacinia a. Duis tristique, mi et sagittis gravida, ipsum leo ornare orci, vel congue ante diam ut ante. 
                Donec vel velit sit amet neque vehicula lobortis. Aenean varius suscipit lectus eu condimentum. 
                Sed sit amet risus at risus mattis vehicula. Praesent at ultricies mi, non fermentum eros. Sed porttitor ligula at auctor cursus.
              </p>
              <p className="mb-5">
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                Proin facilisis sit amet orci et blandit. Phasellus nec blandit neque, eu congue elit. Nullam sed lacinia sapien. Ut venenatis nisl id sapien consectetur, sed imperdiet nisi cursus.
                Quisque tincidunt molestie eros non porta.
              </p>
            </motion.div>
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1]">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
};

export default Benefits;