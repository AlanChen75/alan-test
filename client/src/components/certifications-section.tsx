import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, CheckCircle, Code, FileText } from "lucide-react";

const certifications = [
  {
    id: 1,
    title: "CPCS",
    description: "Certified Professional in Corporate Sustainability",
    icon: Award,
    color: "emerald"
  },
  {
    id: 2,
    title: "B Lab",
    description: "Benefit Corporation Leadership Certification",
    icon: CheckCircle,
    color: "deep-blue"
  },
  {
    id: 3,
    title: "iPAS",
    description: "Information Professional Ability Standards",
    icon: Code,
    color: "teal"
  },
  {
    id: 4,
    title: "ISO Standards",
    description: "Multiple ISO Standard Certifications",
    icon: FileText,
    color: "slate"
  }
];

const teachingExperience = [
  {
    id: 1,
    title: "Government Programs",
    subtitle: "Policy & Technology Training",
    description: "Leading specialized training programs for government agencies on IoT implementation, sustainability policies, and digital transformation strategies.",
    skills: ["Policy Development", "Digital Transformation"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    color: "emerald"
  },
  {
    id: 2,
    title: "Corporate Training",
    subtitle: "Executive & Technical Programs",
    description: "Delivering executive-level training on AIoT implementation, energy management systems, and corporate sustainability transformation for major enterprises.",
    skills: ["Executive Training", "AIoT Implementation"],
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    color: "deep-blue"
  }
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Professional Certifications</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive certifications spanning sustainability, technology standards, and professional qualifications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 bg-${cert.color}/10 rounded-xl flex items-center justify-center mb-6`}>
                      <IconComponent className={`w-8 h-8 text-${cert.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{cert.title}</h3>
                    <p className="text-slate-600 text-sm">{cert.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Teaching Experience Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-slate-800 mb-4">Teaching & Training Experience</h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Extensive experience in government and corporate training programs, sharing expertise in technology and sustainability.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {teachingExperience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
              >
                <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <img 
                        src={exp.image} 
                        alt={`${exp.title} illustration`}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div>
                        <h4 className="text-2xl font-bold text-slate-800">{exp.title}</h4>
                        <p className={`text-${exp.color} font-semibold`}>{exp.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-slate-600 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <Badge 
                          key={skill} 
                          variant="secondary"
                          className={`bg-${exp.color}/10 text-${exp.color}`}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
