import { motion } from "framer-motion";
import { Sparkles, Users, FlaskConical, MessageSquare } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const pillars = [
  { icon: FlaskConical, title: "Open Tinkering", desc: "No rules, no limits. Pick up a soldering iron, boot up a Raspberry Pi, and start experimenting." },
  { icon: Users, title: "Collaboration", desc: "The best ideas happen when diverse minds collide. Build together, learn from each other." },
  { icon: Sparkles, title: "Curiosity", desc: "Every question is valid. Every experiment is worth trying. Curiosity is our core protocol." },
  { icon: MessageSquare, title: "Experimentation", desc: "Failure is just debugging in progress. Try, break, fix, repeat — that's how makers learn." },
];

const Community = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-secondary text-sm mb-3">// community.h</p>
          <h1 className="text-4xl md:text-5xl font-mono text-foreground mb-4">
            The Maker <span className="text-secondary text-glow-blue">Culture</span>
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            More than a space — a movement of builders, dreamers, and tinkerers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-secondary/30 transition-colors"
            >
              <p.icon className="text-secondary h-8 w-8 mb-3" />
              <h3 className="font-mono text-foreground mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 max-w-md mx-auto"
        >
          <div className="code-block text-center">
            <p className="text-muted-foreground font-mono text-sm">
              <span className="text-secondary">while</span>(alive) {"{"}
            </p>
            <p className="text-primary font-mono text-sm pl-4">eat();</p>
            <p className="text-primary font-mono text-sm pl-4">sleep();</p>
            <p className="text-primary font-mono text-sm pl-4">make();</p>
            <p className="text-primary font-mono text-sm pl-4">repeat();</p>
            <p className="text-muted-foreground font-mono text-sm">{"}"}</p>
          </div>
        </motion.div>
      </div>
    </div>
    <Footer />
  </div>
);

export default Community;
