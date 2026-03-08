import { motion } from "framer-motion";
import { Car, Eye, Plane, Wifi, Cog, BrainCircuit } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const projects = [
  { icon: Car, title: "AI Robot Car", desc: "Autonomous vehicle using computer vision and reinforcement learning.", tag: "robotics" },
  { icon: Eye, title: "Computer Vision Lab", desc: "Object detection, face recognition, and image classification projects.", tag: "AI" },
  { icon: Plane, title: "Drone Experiments", desc: "Custom-built drones with GPS navigation and obstacle avoidance.", tag: "aerial" },
  { icon: Wifi, title: "IoT Smart Garden", desc: "Connected sensors monitoring soil, light, and water with automated care.", tag: "IoT" },
  { icon: Cog, title: "Robotic Arm", desc: "6-DOF robotic arm with inverse kinematics and pick-and-place capability.", tag: "robotics" },
  { icon: BrainCircuit, title: "Neural Network Kit", desc: "Educational kit to build and train neural networks on embedded hardware.", tag: "AI" },
];

const Projects = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-secondary text-sm mb-3">// projects.h</p>
          <h1 className="text-4xl md:text-5xl font-mono text-foreground mb-4">
            What We <span className="text-primary text-glow-yellow">Build</span>
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            From AI-powered robots to IoT ecosystems — explore what our community creates.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.08 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-secondary/30 transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <p.icon className="text-secondary h-8 w-8 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-1 rounded">
                  {p.tag}
                </span>
              </div>
              <h3 className="font-mono text-foreground mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default Projects;
