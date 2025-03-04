
import { Link } from "react-router-dom";
import { 
  Instagram, 
  Twitter, 
  Facebook, 
  Youtube, 
  Heart, 
  ArrowRight 
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary mt-auto">
      <div className="page-container">
        <div className="py-12 lg:py-16 grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand & Newsletter */}
          <div className="md:col-span-4 lg:col-span-5">
            <Link to="/" className="inline-block mb-4" aria-label="Fit Me Home">
              <span className="text-primary font-display font-semibold text-2xl">
                fit<span className="text-foreground">me</span>
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              Your journey to a healthier, stronger, and more balanced life starts here. Join us and transform yourself with science-backed fitness and nutrition plans.
            </p>
            
            <div className="mb-8">
              <h3 className="text-sm font-medium mb-3">Stay updated</h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-background border border-border rounded-l-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                  aria-label="Email address"
                />
                <button 
                  className="bg-primary hover:bg-primary/90 text-white rounded-r-md px-4 py-2 transition-colors duration-300 flex items-center justify-center"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Links */}
          <div className="md:col-span-8 lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold mb-3">Platform</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/exercises" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                    Exercises
                  </Link>
                </li>
                <li>
                  <Link to="/nutrition" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                    Nutrition
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/programs" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                    Programs
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold mb-3">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/press" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold mb-3">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link to="/cookies" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                    Cookies
                  </Link>
                </li>
                <li>
                  <Link to="/licenses" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                    Licenses
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="py-6 border-t border-border flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Fit Me. All rights reserved.
          </p>
          
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              aria-label="Follow us on Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              aria-label="Follow us on Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              aria-label="Subscribe on YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
