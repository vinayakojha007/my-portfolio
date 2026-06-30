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
          desgination="Frontend Developer"
          company="HCLTech"
          imageSrc="assets/hcltech.svg"
          range="2025 March - Present"
          invertImage={true}
        />
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

      <Section title="Professional Projects" autofit={true}>
        <Project
          title="Western Union – Cross Border Payments"
          subtitle="Developed enterprise-grade frontend modules for cross-border payment workflows using React,ReactNative, GraphQL, and TypeScript. Built reusable components, integrated secure payment APIs, optimized performance, and collaborated with cross-functional teams to deliver scalable financial solutions."
          imageSrc="assets/wu.jpg"
          liveUrl="https://www.westernunion.com/au/en/home.html"
        />

        <Project
          title="Hooper – Low-Code / No-Code platform"
          subtitle='Hooper is an intelligent service framework that can be used to design quick, comprehensive business flows that deliver instant apps, by anyone, without writing code.Migrated the application from Angular to React.Integrated third-party APIs, and enhanced application maintainability through a modular architecture.'
          imageSrc="assets/hooper.webp"
          liveUrl="https://hooperlabs.com/"
        />

        <Project
          title="KFC – Offline"
          subtitle="Developed an offline-first application for Area Coaches and Restaurant General Managers (RGMs) to perform daily store routine checks, operational audits, and compliance activities without internet connectivity. Reduced redundant API calls by nearly 40%, implemented Role-Based Access Control (RBAC), and ensured reliable data synchronization once the device was back online."
          imageSrc="assets/kfc-logo.jpg"
          liveUrl="https://play.google.com/store/apps/details?id=com.kfc.sa&gl=za"
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
        {/* <Project
          title="Eat-n-Split"
          subtitle="This is a application that allows users to split the money for the food they have expense"
          imageSrc="assets/friends-app.png"
          // liveUrl="https://friends-app-rahul.vercel.app"
          githubUrl="https://github.com/vinayakojha007/eat-n-split"
        /> */}
        <Project
          title="My Portfolio"
          subtitle="This is my portfolio. Here you will find all my experience, projects, skills, education, certifications and more."
          imageSrc="assets/my-portfolio.png"
          liveUrl="/"
          githubUrl="https://github.com/vinayakojha007/my-portfolio"
        />
      </Section>

      <Section title="Skills" autofit={true}>
        {/* <Skill icon={<SiNextdotjs />} name="Next.js" color="#000000" /> */}
        <Skill icon={<FaReact />} name="React" color="#61DBFB" />
        <Skill icon={<FaReact />} name="ReactNative" color="#61DBFB" />
        <Skill icon={<BiLogoJavascript />} name="JavaScript" color="#F0DB4F" />
        <Skill icon={<BiLogoTypescript />} name="JavaScript" color="#3178C6" />
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
