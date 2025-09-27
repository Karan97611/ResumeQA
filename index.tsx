import React from "react";
import { motion } from "framer-motion";
import { Download, Mail, Linkedin, Phone } from "lucide-react";

// Interactive single-file resume component
// - Tailwind CSS required in the host project
// - Framer Motion and lucide-react should be installed
// - Drop your resume PDF into public/assets/resume.pdf and update links if needed

export default function KaranResume() {
  const resumePdf = "/assets/Resume.pdf"; // put your uploaded Resume.pdf in public/assets/

  const skills = [
    { name: "Java", level: 90 },
    { name: "Selenium WebDriver", level: 92 },
    { name: "TestNG / JUnit", level: 88 },
    { name: "SQL / Oracle", level: 85 },
    { name: "Jenkins / GitLab CI", level: 86 },
    { name: "Docker / Linux", level: 82 },
  ];

  const experience = [
    {
      role: "SDET - Automation and DevOps",
      company: "Wipro (WDIS)",
      duration: "02/2023 - Present",
      bullets: [
        "Engineered end-to-end CI/CD pipelines (Jenkins & GitLab) — automated 90% of deployments, accelerated delivery by 40%.",
        "Built Selenium automation suites that reduced regression time by 75% and integrated them into CI.",
        "Validated complex DB migrations with advanced SQL queries and automated checks.",
      ],
    },
    {
      role: "Automation QA Engineer",
      company: "Wipro Limited (HKT)",
      duration: "03/2020 - 01/2023",
      bullets: [
        "Automated regression suite in Java + Selenium — increased coverage by 70% and cut manual effort by 80%.",
        "Validated 50+ REST endpoints using Postman and improved reliability by 20%.",
      ],
    },
    {
      role: "QA Engineer",
      company: "Wipro Limited (Aviva)",
      duration: "07/2018 - 12/2019",
      bullets: [
        "Performed manual testing across web-based insurance apps and authored test plans and cases.",
      ],
    },
  ];

  const projects = [
    {
      title: "CI-Integrated Regression Suite",
      desc: "A Java + Selenium framework integrated into Jenkins pipelines to run nightly and on-deploy regression suites.",
      tech: ["Java", "Selenium", "TestNG", "Jenkins"],
      link: "#",
    },
    {
      title: "Dockerized Test Environments",
      desc: "Created Docker images to spin up consistent test environments on Red Hat Linux for automated validation.",
      tech: ["Docker", "Linux", "Tomcat"],
      link: "#",
    },
  ];

  const contact = {
    email: "Karan97611@gmail.com",
    phone: "+91-9761182859",
    linkedin: "https://linkedin.com/in/karan97611",
    location: "Bengaluru, India",
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6 md:p-12">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-3">
        {/* Left card: Photo + contact + skills */}
        <aside className="p-8 bg-gradient-to-b from-indigo-600 via-indigo-500 to-indigo-400 text-white md:col-span-1">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center text-2xl font-semibold">
                KK
              </div>
              <div>
                <h1 className="text-2xl font-bold">Karan Kumar</h1>
                <p className="text-sm opacity-90">Senior Automation Test Engineer</p>
                <p className="text-xs mt-2">{contact.location}</p>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-2 bg-white/10 p-2 rounded-lg hover:bg-white/20 transition"
              >
                <Mail size={16} /> <span className="text-sm">{contact.email}</span>
              </a>
              <a
                href={`tel:${contact.phone}`}
                className="flex items-center gap-2 bg-white/10 p-2 rounded-lg hover:bg-white/20 transition"
              >
                <Phone size={16} /> <span className="text-sm">{contact.phone}</span>
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-white/10 p-2 rounded-lg hover:bg-white/20 transition"
              >
                <Linkedin size={16} /> <span className="text-sm">linkedin.com/in/karan97611</span>
              </a>

              <div className="flex gap-2 mt-4">
                <a
                  href={resumePdf}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-white text-indigo-700 px-3 py-2 rounded-md font-semibold shadow"
                >
                  <Download size={16} /> Download
                </a>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 border border-white/20 px-3 py-2 rounded-md font-semibold hover:bg-white/10"
                >
                  View Profile
                </a>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-semibold uppercase">Skills</h3>
              <div className="mt-3 space-y-3">
                {skills.map((s) => (
                  <div key={s.name}>
                    <div className="flex justify-between text-xs">
                      <span>{s.name}</span>
                      <span>{s.level}%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2 mt-1">
                      <div className="h-2 rounded-full bg-white" style={{ width: `${s.level}%`, opacity: 0.95 }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 text-xs opacity-90">
              <p className="font-semibold">Certifications</p>
              <ul className="mt-2 list-disc ml-5">
                <li>Google Cloud GenAI - L1</li>
                <li>AWS Certified Cloud Practitioner (CLF-C02)</li>
                <li>GitHub Copilot</li>
              </ul>
            </div>
          </motion.div>
        </aside>

        {/* Right content */}
        <main className="p-8 md:col-span-2">
          <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="text-lg font-semibold">Profile</h2>
            <p className="mt-2 text-sm leading-relaxed">
              Experienced Automation QA Engineer with 7 years in Telecom and Insurance domains, specializing in UI,
              API, and backend testing using Java, Selenium WebDriver, TestNG, and Postman. Proficient in CI/CD
              pipelines, Docker containerization, and backend validation using SQL and Unix.
            </p>

            <div className="mt-6">
              <h2 className="text-lg font-semibold">Experience</h2>
              <div className="mt-3 space-y-6">
                {experience.map((exp) => (
                  <article key={exp.role} className="border-l-2 border-gray-200 pl-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">{exp.role}</h3>
                        <p className="text-sm opacity-80">{exp.company}</p>
                      </div>
                      <div className="text-xs opacity-70">{exp.duration}</div>
                    </div>
                    <ul className="mt-2 list-disc ml-5 text-sm opacity-90">
                      {exp.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h2 className="text-lg font-semibold">Projects</h2>
              <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
                {projects.map((p) => (
                  <div key={p.title} className="p-4 rounded-lg border">
                    <h4 className="font-semibold">{p.title}</h4>
                    <p className="text-sm mt-1">{p.desc}</p>
                    <div className="mt-3 text-xs opacity-80">
                      <strong>Tech:</strong> {p.tech.join(", ")}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h2 className="text-lg font-semibold">Education</h2>
              <div className="mt-2 text-sm">
                <p className="font-semibold">M.Tech in Software Engineering — BITS Pilani</p>
                <p className="opacity-80 text-xs">04/2019 - 12/2022</p>
                <p className="mt-2 font-semibold">Bachelor of Computer Applications — CCS University, Meerut</p>
                <p className="opacity-80 text-xs">08/2015 - 07/2018</p>
              </div>
            </div>

            <div className="mt-6">
              <h2 className="text-lg font-semibold">Languages & Awards</h2>
              <div className="mt-2 text-sm">
                <p>Languages: Hindi, Punjabi, English</p>
                <p className="mt-2">Awards: Business Unit Award — "I am QET, I lead"; Stand Out Performer; "Go That Extra Mile"</p>
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <a
                href={resumePdf}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 border rounded-md font-semibold hover:bg-gray-100"
              >
                Open Resume (PDF)
              </a>

              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-indigo-600 text-white rounded-md font-semibold hover:opacity-90"
              >
                Message on LinkedIn
              </a>
            </div>
          </motion.section>
        </main>
      </div>

      <footer className="max-w-5xl mx-auto mt-6 text-center text-xs text-gray-500">
        Built with ❤️ — Interactive resume for recruiters. Hosted via GitHub Pages / Vercel / Netlify.
      </footer>
    </div>
  );
}
