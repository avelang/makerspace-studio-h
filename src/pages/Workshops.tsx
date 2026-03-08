import { motion } from "framer-motion";
import { Calendar, Clock, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const workshops = [
  { title: "Intro to Robotics", level: "Beginner", duration: "4 weeks", ages: "8+", desc: "Learn the fundamentals of robotics — motors, sensors, and your first autonomous bot." },
  { title: "AI for Kids", level: "Beginner", duration: "6 weeks", ages: "10+", desc: "A fun, hands-on introduction to artificial intelligence concepts and simple ML models." },
  { title: "Build Your First Robot", level: "Intermediate", duration: "8 weeks", ages: "12+", desc: "Design, assemble, and program a fully functional robot from scratch." },
  { title: "Computer Vision Bootcamp", level: "Advanced", duration: "6 weeks", ages: "14+", desc: "Deep dive into image processing, object detection, and real-time video analysis." },
];

const levelColor: Record<string, string> = {
  Beginner: "text-primary bg-primary/10",
  Intermediate: "text-secondary bg-secondary/10",
  Advanced: "text-destructive bg-destructive/10",
};

const Workshops = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-secondary text-sm mb-3">// workshops.h</p>
          <h1 className="text-4xl md:text-5xl font-mono text-foreground mb-4">
            Learn by <span className="text-primary text-glow-yellow">Doing</span>
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Structured workshops designed to take you from curious beginner to confident builder.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {workshops.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-mono text-foreground">{w.title}</h3>
                <span className={`text-xs font-mono px-2 py-1 rounded ${levelColor[w.level]}`}>
                  {w.level}
                </span>
              </div>
              <p className="text-muted-foreground text-sm mb-4">{w.desc}</p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground font-mono">
                <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{w.duration}</span>
                <span className="flex items-center gap-1"><Users className="h-3 w-3" />Ages {w.ages}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link to="/join">
            <Button size="lg" className="font-mono glow-yellow">
              Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
    <Footer />
  </div>
);

export default Workshops;
