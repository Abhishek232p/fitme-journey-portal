
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NavLink = ({ to, children, isMobile = false }: { to: string; children: React.ReactNode; isMobile?: boolean }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      className={cn(
        "relative px-3 py-2 text-sm transition-colors duration-300 rounded-md",
        isActive 
          ? "text-primary font-medium" 
          : "text-foreground/90 hover:text-foreground",
        isMobile && "text-base py-3 px-4 w-full",
        "focus-ring"
      )}
    >
      {children}
      {isActive && (
        <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-primary rounded-full transform origin-left animate-scale-in" />
      )}
    </Link>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md",
        isScrolled 
          ? "bg-background/90 shadow-subtle py-4" 
          : "bg-transparent py-6"
      )}
    >
      <div className="page-container">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center focus-ring rounded-md"
            aria-label="Fit Me Home"
          >
            <span className="text-primary font-display font-semibold text-2xl">
              fit<span className="text-foreground">me</span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/exercises">Exercises</NavLink>
            <NavLink to="/nutrition">Nutrition</NavLink>
            
            <div className="relative group px-3 py-2">
              <button 
                className="flex items-center text-sm text-foreground/90 hover:text-foreground transition-colors duration-300 focus-ring rounded-md"
                aria-expanded={false}
              >
                More <ChevronDown className="ml-1 w-4 h-4 opacity-70" />
              </button>
              <div className="absolute left-0 mt-2 w-48 origin-top-left rounded-md bg-background shadow-elevated border border-border overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                <div className="py-1">
                  <Link to="/blog" className="block px-4 py-2 text-sm hover:bg-muted transition-colors duration-200">Blog</Link>
                  <Link to="/about" className="block px-4 py-2 text-sm hover:bg-muted transition-colors duration-200">About Us</Link>
                  <Link to="/contact" className="block px-4 py-2 text-sm hover:bg-muted transition-colors duration-200">Contact</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Auth buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/auth" 
              className="text-sm font-medium text-foreground/90 hover:text-foreground transition-colors duration-300 focus-ring rounded-md px-3 py-2"
            >
              Sign In
            </Link>
            <Link 
              to="/auth?mode=signup" 
              className="bg-primary hover:bg-primary/90 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors duration-300 shadow-button focus-ring"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden focus-ring rounded-md p-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <div 
        className={cn(
          "fixed inset-x-0 top-[72px] bg-background border-b border-border md:hidden transition-all duration-300 ease-in-out transform",
          isMobileMenuOpen 
            ? "translate-y-0 opacity-100 visible" 
            : "-translate-y-10 opacity-0 invisible h-0 overflow-hidden"
        )}
      >
        <div className="page-container py-4 flex flex-col space-y-1">
          <NavLink to="/" isMobile>Home</NavLink>
          <NavLink to="/exercises" isMobile>Exercises</NavLink>
          <NavLink to="/nutrition" isMobile>Nutrition</NavLink>
          <NavLink to="/blog" isMobile>Blog</NavLink>
          <NavLink to="/about" isMobile>About Us</NavLink>
          <NavLink to="/contact" isMobile>Contact</NavLink>

          <div className="pt-3 mt-3 border-t border-border flex flex-col space-y-3">
            <Link 
              to="/auth" 
              className="w-full text-center text-sm font-medium text-foreground px-4 py-2 rounded-full border border-border transition-colors duration-300 focus-ring"
            >
              Sign In
            </Link>
            <Link 
              to="/auth?mode=signup" 
              className="w-full text-center bg-primary hover:bg-primary/90 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors duration-300 shadow-button focus-ring"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
