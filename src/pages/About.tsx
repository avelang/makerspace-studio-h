import { motion } from "framer-motion";
import { Users, Lightbulb, Wrench, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const values = [
  { icon: Lightbulb, title: "Learn AI", desc: "From neural networks to computer vision — understand the tech shaping our world." },
  { icon: Wrench, title: "Build Robots", desc: "Hands-on robotics with real hardware, sensors, and actuators." },
  { icon: Users, title: "Collaborate", desc: "Work with fellow makers on projects that push boundaries." },
  { icon: Heart, title: "Explore Electronics", desc: "Circuits, microcontrollers, IoT — the building blocks of innovation." },
];

const About = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="font-mono text-secondary text-sm mb-3">// about.h</p>
          <h1 className="text-4xl md:text-5xl font-mono text-foreground mb-6">
            A Space for <span className="text-primary text-glow-yellow">Makers</span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            stUdio.h is where curiosity meets creation. A makerspace designed for people of all ages 
            to explore artificial intelligence, robotics, and electronics in a hands-on, collaborative environment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors"
            >
              <v.icon className="text-primary h-8 w-8 mb-3" />
              <h3 className="font-mono text-lg text-foreground mb-2">{v.title}</h3>
              <p className="text-muted-foreground text-sm">{v.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 max-w-lg mx-auto"
        >
          <div className="code-block text-center">
            <p className="text-muted-foreground font-mono text-sm">
              <span className="text-secondary">if</span> (curious && passionate) {"{"}
            </p>
            <p className="text-primary font-mono text-sm pl-4">welcome_to_studio_h();</p>
            <p className="text-muted-foreground font-mono text-sm">{"}"}</p>
          </div>
        </motion.div>
      </div>
    </div>
    <Footer />
  </div>
);

export default About;
