import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Join = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <p className="font-mono text-secondary text-sm mb-3">// join.h</p>
          <h1 className="text-4xl md:text-5xl font-mono text-foreground mb-4">
            Become a <span className="text-primary text-glow-yellow">Maker</span>
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Sign up and start building the future. All ages, all skill levels welcome.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-md mx-auto bg-card border border-border rounded-xl p-8"
        >
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-4"
          >
            <div>
              <label className="text-sm font-mono text-muted-foreground mb-1 block">// name</label>
              <Input placeholder="Ada Lovelace" className="bg-muted border-border font-body" />
            </div>
            <div>
              <label className="text-sm font-mono text-muted-foreground mb-1 block">// email</label>
              <Input type="email" placeholder="ada@makers.dev" className="bg-muted border-border font-body" />
            </div>
            <div>
              <label className="text-sm font-mono text-muted-foreground mb-1 block">// age group</label>
              <select className="w-full rounded-lg bg-muted border border-border text-foreground px-3 py-2 text-sm font-body focus:ring-2 focus:ring-ring">
                <option>Under 12</option>
                <option>12 - 17</option>
                <option>18 - 25</option>
                <option>26+</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-mono text-muted-foreground mb-1 block">// interests</label>
              <Input placeholder="robotics, AI, drones..." className="bg-muted border-border font-body" />
            </div>
            <Button type="submit" className="w-full font-mono glow-yellow mt-2">
              Initialize Membership <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>

          <p className="text-xs text-muted-foreground font-mono text-center mt-6">
            &gt; membership.status = <span className="text-primary">"pending"</span>
          </p>
        </motion.div>
      </div>
    </div>
    <Footer />
  </div>
);

export default Join;
