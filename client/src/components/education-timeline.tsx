import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const education = [
  {
    id: 1,
    degree: "PhD Studies",
    field: "Advanced Technology Research",
    period: "2022 - Present",
    description: "Currently pursuing doctoral research focusing on AIoT applications in sustainable energy systems and corporate transformation methodologies.",
    color: "emerald"
  },
  {
    id: 2,
    degree: "Master's Degree",
    field: "Information Technology & Business",
    period: "2008 - 2012",
    description: "Advanced studies in information systems, business intelligence, and emerging technology integration during the rise of big data and mobile computing.",
    color: "deep-blue"
  },
  {
    id: 3,
    degree: "Bachelor's Degree",
    field: "Computer Science & Engineering",
    period: "2000 - 2004",
    description: "Comprehensive foundation in software development, system design, and engineering principles during the dot-com era and early internet revolution.",
    color: "teal"
  },
  {
    id: 4,
    degree: "Technical College",
    field: "Electronics & Computer Technology",
    period: "1996 - 2000",
    description: "Technical foundation in electronics, computer hardware, and early programming languages, establishing the groundwork for future technology leadership.",
    color: "slate"
  }
];

export default function EducationTimeline() {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Educational Background</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Continuous learning journey from technical college to current PhD studies, maintaining cutting-edge expertise.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="flex flex-col md:flex-row gap-8 items-start"
              >
                <div className="md:w-1/4 text-left md:text-right">
                  <div className={`bg-${edu.color} text-white px-4 py-2 rounded-lg inline-block`}>
                    <span className="font-semibold">{edu.period}</span>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <Card className={`bg-slate-50 shadow-lg border-l-4 border-${edu.color}`}>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-slate-800 mb-2">{edu.degree}</h3>
                      <p className={`text-${edu.color} font-semibold mb-2`}>{edu.field}</p>
                      <p className="text-slate-600">{edu.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
