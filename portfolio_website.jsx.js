import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Briefcase, Mail, Linkedin, Github, FileDown } from "lucide-react";

// Data stored in JSON-like structure for easy updates
const data = {
  profile: {
    name: "Ehatashamul Haque Tanim",
    title: "Emerging Supply Chain Professional | Skilled in Procurement, Logistics, and Strategic Sourcing",
    description:
      "Emerging supply chain professional with growing expertise in optimizing operations, strategic sourcing, and end-to-end supply chain management. Skilled in procurement, logistics, inventory control, and distribution. Known for strong problem-solving skills, a data-driven approach, and the ability to drive efficiency and continuous improvement across supply chain functions.",
    cv: "/Ehatashamul_Haque_Tanim_CV.pdf",
    email: "tanim.icmab@gmail.com",
    linkedin: "https://linkedin.com/in/ehtanim01",
    github: "https://github.com/yourusername"
  },
  work: [
    {
      title: "Operative Purchaser (Import)",
      company: "Hana System Ltd. (Cube Bike Germany)",
      duration: "Nov 2024 - Present",
      tasks: [
        "Monitor demand forecasts and ensure timely procurement of raw materials and components.",
        "Manage international freight procedures and select optimal partners for shipments.",
        "Coordinate with sales, production, and suppliers to maintain schedules."
      ]
    },
    {
      title: "Executive - Supply Chain (Import)",
      company: "B & T Group",
      duration: "May 2023 - Oct 2024",
      tasks: [
        "Handled import-export documentation (Bill of Entry, LC).",
        "Conducted vendor research and strengthened supplier database.",
        "Coordinated shipment schedules and managed fund allocation with finance."
      ]
    },
    {
      title: "Trainee Assistant Officer",
      company: "Eastern Bank PLC",
      duration: "Dec 2022 - Oct 2023",
      tasks: [
        "Handled customer calls related to banking services and transactions.",
        "Provided accurate information about loans, accounts, and credit cards.",
        "Promoted relevant banking products based on customer needs."
      ]
    }
  ],
  education: [
    {
      degree: "Cost and Management Accountant (CMA)",
      school: "The Institute of Cost and Management Accountants of Bangladesh",
      details: "Partly Qualified (Completed 700 Marks)"
    },
    {
      degree: "MBA in Accounting",
      school: "Govt. Tolaram College, National University | 2021 (Held 2024)",
      details: "Result: CGPA 3.42 / 4.00"
    },
    {
      degree: "BBA in Accounting",
      school: "Dania College, National University | 2020 (Held 2022)",
      details: "Result: CGPA 3.41 / 4.00"
    },
    {
      degree: "HSC in Business Studies",
      school: "Govt. Adamjee Nagar M.W. College | 2016",
      details: "Result: GPA 4.08 / 5.00"
    },
    {
      degree: "SSC in Business Studies",
      school: "Gulishakhali Rafiz Smriti Secondary School | 2014",
      details: "Result: GPA 5.00 / 5.00"
    }
  ],
  skills: [
    "Supply Chain Optimization",
    "Inventory Management",
    "Procurement & Supplier Management",
    "Cost Reduction Strategies",
    "Problem Solving",
    "Time Management",
    "MS Excel, Word & PowerPoint"
  ],
  certifications: [
    "Excel For Business Essential & Intermediate 1 – Coursera (Macquarie University, 2020) – Grade 95%",
    "Training on Practical Accounts & Finance – Skill Jobs (2024), 30 Hours"
  ]
};

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"} min-h-screen p-6 transition-colors`}>
      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Hi, I’m {data.profile.name}
        </motion.h1>
        <p className="text-lg opacity-80">{data.profile.title}</p>
        <div className="flex justify-center mt-4 gap-4">
          <Button onClick={toggleTheme}>{darkMode ? "Light Mode" : "Dark Mode"}</Button>
          <a href={data.profile.cv} download>
            <Button className="flex items-center gap-2">
              <FileDown className="w-4 h-4" /> Download CV
            </Button>
          </a>
        </div>
      </header>

      {/* Profile Section */}
      <section className="max-w-4xl mx-auto mb-12 text-center">
        <p className="leading-relaxed opacity-90">{data.profile.description}</p>
      </section>

      {/* Work Experience Section */}
      <section className="max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold flex items-center gap-2 mb-6">
          <Briefcase className="w-6 h-6 text-green-600" /> Work Experience
        </h2>
        <div className="grid gap-6">
          {data.work.map((job, i) => (
            <Card key={i} className="shadow-md rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold">{job.title}</h3>
                <p className="opacity-80">{job.company} | {job.duration}</p>
                <ul className="list-disc list-inside mt-3 opacity-90 space-y-1">
                  {job.tasks.map((t, idx) => <li key={idx}>{t}</li>)}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold flex items-center gap-2 mb-6">
          <GraduationCap className="w-6 h-6 text-blue-600" /> Education
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {data.education.map((edu, i) => (
            <Card key={i} className="shadow-md rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold">{edu.degree}</h3>
                <p className="opacity-80">{edu.school}</p>
                <p className="mt-2 opacity-90">{edu.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-6">Skills</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 opacity-90">
          {data.skills.map((skill, i) => <li key={i}>{skill}</li>)}
        </ul>
      </section>

      {/* Certifications */}
      <section className="max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-6">Certifications</h2>
        <ul className="list-disc list-inside opacity-90 space-y-1">
          {data.certifications.map((cert, i) => <li key={i}>{cert}</li>)}
        </ul>
      </section>

      {/* Contact Section */}
      <section className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
        <div className="flex justify-center gap-4 mb-6">
          <a href={`mailto:${data.profile.email}`}>
            <Button className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> Email
            </Button>
          </a>
          <a href={data.profile.linkedin} target="_blank" rel="noopener noreferrer">
            <Button className="flex items-center gap-2">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </Button>
          </a>
          <a href={data.profile.github} target="_blank" rel="noopener noreferrer">
            <Button className="flex items-center gap-2">
              <Github className="w-4 h-4" /> GitHub
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
