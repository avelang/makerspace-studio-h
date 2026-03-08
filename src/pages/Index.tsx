import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Cpu, Bot, Zap, CircuitBoard } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StudioLogo from "@/components/StudioLogo";
import studioLogoImg from "@/assets/studio-logo.png";

const floatingIcons = [
  { icon: Bot, x: "10%", y: "20%", delay: 0 },
  { icon: Cpu, x: "80%", y: "15%", delay: 0.5 },
  { icon: Zap, x: "70%", y: "70%", delay: 1 },
  { icon: CircuitBoard, x: "15%", y: "75%", delay: 1.5 },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern">
        {/* Floating icons */}
        {floatingIcons.map(({ icon: Icon, x, y, delay }, i) => (
          <motion.div
            key={i}
            className="absolute text-muted-foreground/20"
            style={{ left: x, top: y }}
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay }}
          >
            <Icon size={48} />
          </motion.div>
        ))}

        {/* Glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 text-center relative z-10 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <StudioLogo className="text-6xl md:text-8xl lg:text-9xl" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-mono text-lg md:text-2xl text-secondary mt-4"
          >
            #include &lt;makers&gt;
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-muted-foreground text-lg md:text-xl mt-6 max-w-xl mx-auto font-body"
          >
            AI & Robotics Makerspace for All Ages
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
          >
            <Link to="/join">
              <Button size="lg" className="font-mono glow-yellow text-base px-8">
                Join the Community <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/projects">
              <Button
                size="lg"
                variant="outline"
                className="font-mono border-secondary text-secondary hover:bg-secondary/10 text-base px-8"
              >
                Explore Projects
              </Button>
            </Link>
          </motion.div>

          {/* Code snippet */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-16 max-w-md mx-auto"
          >
            <div className="code-block text-left">
              <p className="text-muted-foreground">
                <span className="text-secondary">const</span>{" "}
                <span className="text-primary">maker</span> = {"{"}
              </p>
              <p className="text-muted-foreground pl-4">
                curious: <span className="text-primary">true</span>,
              </p>
              <p className="text-muted-foreground pl-4">
                age: <span className="text-primary">"any"</span>,
              </p>
              <p className="text-muted-foreground pl-4">
                passion: <span className="text-primary">"∞"</span>,
              </p>
              <p className="text-muted-foreground">
                {"}"};
              </p>
              <p className="text-muted-foreground mt-2">
                <span className="text-secondary">maker</span>.
                <span className="text-primary">build</span>();
                <span className="animate-blink text-primary">▌</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 circuit-pattern">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-mono text-center mb-4"
          >
            <span className="text-primary">compile</span>
            <span className="text-muted-foreground">(</span>
            <span className="text-secondary">future</span>
            <span className="text-muted-foreground">)</span>
          </motion.h2>
          <p className="text-center text-muted-foreground mb-16 max-w-lg mx-auto">
            Everything you need to learn, build, and innovate with AI & robotics.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Bot,
                title: "Robotics Lab",
                desc: "Build robots from scratch with Arduino, Raspberry Pi, and industrial-grade kits.",
                color: "text-primary",
              },
              {
                icon: Cpu,
                title: "AI Workshop",
                desc: "Learn machine learning, computer vision, and natural language processing hands-on.",
                color: "text-secondary",
              },
              {
                icon: Zap,
                title: "Maker Space",
                desc: "3D printers, laser cutters, soldering stations, and everything a maker needs.",
                color: "text-primary",
              },
            ].map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors group"
              >
                <feat.icon className={`${feat.color} h-10 w-10 mb-4 group-hover:scale-110 transition-transform`} />
                <h3 className="font-mono text-lg text-foreground mb-2">{feat.title}</h3>
                <p className="text-muted-foreground text-sm">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <p className="font-mono text-secondary text-sm mb-4">#include &lt;curious_minds&gt;</p>
            <h2 className="text-3xl md:text-5xl font-mono text-foreground mb-6">
              Ready to <span className="text-primary text-glow-yellow">build</span>?
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8">
              Join a community of makers, dreamers, and builders turning wild ideas into working prototypes.
            </p>
            <Link to="/join">
              <Button size="lg" className="font-mono glow-yellow text-base px-8">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
