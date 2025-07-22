import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    id: 1,
    title: "Chief Operating Officer",
    company: "Multiple Companies",
    period: "2020 - Present",
    description: "Leading strategic operations across multiple technology companies, including upcoming OTC listing preparations. Specializing in AIoT implementation and energy IoT solutions.",
    skills: ["AIoT", "Energy IoT", "Strategic Leadership"],
    color: "emerald",
    image: "https://pixabay.com/get/g145328323aa11ae2d5f9155a34d502a042f8368d604fcfac83458d0938ffea901efebdb9b133493ab62d29a9b890c2906a27e7a279f1ba305089b1730c7a1923_1280.jpg"
  },
  {
    id: 2,
    title: "Co-Founder | 聯齊科技",
    company: "Market Pioneer",
    period: "2015 - 2020",
    description: "Pioneering Achievement: Led the first Taiwan startup to successfully enter the Japanese energy market, establishing new standards for international expansion in the energy IoT sector.",
    skills: ["Market Entry", "Energy IoT", "International Expansion"],
    color: "deep-blue",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
  },
  {
    id: 3,
    title: "Big Data Solutions Leader",
    company: "Technology Companies",
    period: "2010 - 2015",
    description: "Established comprehensive big data frameworks and IoT integration systems across multiple enterprises, setting foundation for current AIoT expertise.",
    skills: ["Big Data", "IoT Integration", "Enterprise Solutions"],
    color: "teal",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
  },
  {
    id: 4,
    title: "Technology Foundation",
    company: "Various Companies",
    period: "1998 - 2010",
    description: "Built extensive technical expertise across software development, system architecture, and emerging technology adoption during the early internet and mobile revolution.",
    skills: ["Software Development", "System Architecture", "Technology Innovation"],
    color: "slate",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
  }
];

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Professional Experience</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Over 25 years of leadership in technology innovation, with expertise in AIoT, energy IoT, and corporate sustainability transformation.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-deep-blue to-emerald"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="relative flex items-center"
              >
                <div className={`absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-${exp.color} rounded-full border-4 border-white shadow-lg z-10`}></div>
                
                <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:w-1/2 md:pr-8' : 'md:w-1/2 md:pl-8 md:ml-auto'}`}>
                  <Card className={`shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-${exp.color} bg-slate-50`}>
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <img 
                          src={exp.image} 
                          alt={`${exp.title} illustration`}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div>
                          <h3 className="text-2xl font-bold text-slate-800">{exp.title}</h3>
                          <p className={`text-${exp.color} font-semibold`}>{exp.company} | {exp.period}</p>
                        </div>
                      </div>
                      <p className="text-slate-600 mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <Badge 
                            key={skill} 
                            variant="secondary"
                            className={`bg-${exp.color}/10 text-${exp.color} hover:bg-${exp.color}/20`}
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
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
