import { Link } from "react-router-dom";
import StudioLogo from "./StudioLogo";

const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-3">
          <StudioLogo className="text-lg" />
          <p className="text-sm text-muted-foreground font-mono">
            #include &lt;makers&gt;
          </p>
          <p className="text-sm text-muted-foreground">
            AI & Robotics Makerspace for All Ages
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-mono text-primary">// navigate</h4>
          {["About", "Projects", "Workshops", "Community"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-mono text-primary">// connect</h4>
          <p className="text-sm text-muted-foreground">GitHub</p>
          <p className="text-sm text-muted-foreground">Discord</p>
          <p className="text-sm text-muted-foreground">YouTube</p>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-mono text-secondary">// execute</h4>
          <pre className="text-xs text-muted-foreground font-mono leading-relaxed">
{`compile_future();
build();
learn();
share();`}
          </pre>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground font-mono">
          © 2026 stUdio.h — All rights reserved
        </p>
        <p className="text-xs text-muted-foreground font-mono">
          #include &lt;curious_minds&gt;
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
