/* eslint-disable no-unused-vars */
import {
  BiLogoJavascript,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import { FaAngular, FaReact } from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiSass,
  SiFlutter,
} from "react-icons/si";

import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Section from "./components/Section";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Skill from "./components/Skill";
import Education from "./components/Education";
import Certification from "./components/Certification";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="max-w-6xl mx-auto px-4 font-mono">
      <Navbar />
      <Intro />

      <Section title="Experience">
        <Experience
          desgination="Software Engineer"
          company="Kellton"
          imageSrc="assets/kellton.svg"
          range="2022 Jul - Present"
          invertImage={true}
        />
        <Experience
          desgination="Trainee - Software Development"
          company="Kellton"
          imageSrc="assets/kellton.svg"
          range="2022 Jan - 2022 Aug"
          invertImage={true}
        />
      </Section>

      <Section title="Projects" autofit={true}>
        <Project
          title="Wild-oasis"
          subtitle="Wild-oasis is a web application that allows users to Add Cabins and can check the total bookings, and see the sales Dashboard in real-time."
          imageSrc="assets/logo-light.png"
          liveUrl="https://wild-oasis-silk.vercel.app/dashboard"
          githubUrl="hhttps://github.com/vinayakojha007/wild-oasis"
        />
        <Project
          title="Eat-n-Split"
          subtitle="This is a application that allows users to split the money for the food they have expense"
          imageSrc="assets/friends-app.png"
          // liveUrl="https://friends-app-rahul.vercel.app"
          githubUrl="https://github.com/vinayakojha007/eat-n-split"
        />
        <Project
          title="My Portfolio"
          subtitle="This is my portfolio. Here you will find all my experience, projects, skills, education, certifications and more."
          imageSrc="assets/my-portfolio.png"
          liveUrl="/"
          githubUrl="https://github.com/dasurahul/my-portfolio"
        />
      </Section>

      <Section title="Skills" autofit={true}>
        {/* <Skill icon={<SiNextdotjs />} name="Next.js" color="#000000" /> */}
        <Skill icon={<FaReact />} name="React" color="#61DBFB" />
        <Skill icon={<FaReact />} name="ReactNative" color="#61DBFB" />
        <Skill icon={<BiLogoJavascript />} name="JavaScript" color="#F0DB4F" />
        <Skill
          icon={<BiLogoTailwindCss />}
          name="Tailwind CSS"
          color="#0DB7ED"
        />
        <Skill icon={<SiFlutter />} name="Flutter" color="#0DB7ED" />

        {/* <Skill icon={<FaAngular />} name="Angular" color="#DD1B16" /> */}
        {/* <Skill icon={<BiLogoTypescript />} name="TypeScript" color="#007ACC" /> */}

        {/* <Skill
          icon={<BiLogoTailwindCss />}
          name="Tailwind CSS"
          color="#0DB7ED"
        /> */}
        {/* <Skill icon={<SiSass />} name="Sass" color="#C69" /> */}
        {/* <Skill icon={<SiMongodb />} name="MongoDB" color="#00684A" /> */}
        {/* <Skill icon={<SiExpress />} name="Express.js" color="#000000" /> */}
        {/* <Skill icon={<SiNodedotjs />} name="Node.js" color="#3C873A" /> */}
      </Section>

      <Section title="Education">
        <Education
          education="BTECH"
          imageSrc="assets/csvtu.png"
          educator="Chhattisgarh Swami Vivekanand Technical University"
          range="2018 - 2022"
        />
      </Section>

      <Section title="Certifications">
        <Certification
          certificationName="The Ultimate React Course"
          imageSrc="assets/udemy.svg"
          certificationProvider="Udemy"
          certificateURL="https://www.udemy.com/certificate/UC-fabe6993-6f57-4c26-b027-c1fcf3990db7/"
        />
        <Certification
          certificationName="Git and Github for Beginners"
          imageSrc="assets/udemy.svg"
          certificationProvider="Udemy"
          certificateURL="https://udemy.com/certificate/UC-9479d182-1b6e-4a7a-907c-ee56fb33d7d2/"
        />
        {/* <Certification
          certificationName="JavaScript (Intermediate) Certificate"
          imageSrc="assets/hackerrank.jpeg"
          certificationProvider="HackerRank"
          certificateURL="https://www.hackerrank.com/certificates/27879c6743c5"
        />
        <Certification
          certificationName="JavaScript (Basic) Certificate"
          imageSrc="assets/hackerrank.jpeg"
          certificationProvider="HackerRank"
          certificateURL="https://www.hackerrank.com/certificates/1c057418766a"
        />
        <Certification
          certificationName="CSS Certificate"
          imageSrc="assets/hackerrank.jpeg"
          certificationProvider="HackerRank"
          certificateURL="https://www.hackerrank.com/certificates/13f1053481f2"
        /> */}
      </Section>

      <Footer />
    </div>
  );
}
