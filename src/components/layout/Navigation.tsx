import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { 
  BookOpen, 
  BarChart3, 
  Users, 
  Brain, 
  Menu, 
  X,
  Scale,
  GraduationCap,
  Settings
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Dashboard", href: "/", icon: BarChart3 },
  { name: "AI Co-pilot", href: "/copilot", icon: Brain },
  { name: "Progress", href: "/progress", icon: GraduationCap },
  { name: "Institution", href: "/institution", icon: Users },
];

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-card border-b border-border shadow-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Scale className="h-8 w-8 text-primary mr-2" />
              <span className="text-xl font-serif font-bold text-foreground">
                LegalMind Co-pilot
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;
                
                return (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={cn(
                      "inline-flex items-center px-3 py-2 text-sm font-medium rounded-md transition-smooth",
                      isActive
                        ? "text-primary bg-accent/50"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent/30"
                    )}
                  >
                    <Icon className="h-4 w-4 mr-2" />
                    {item.name}
                  </NavLink>
                );
              })}
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="elegant" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-card">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              
              return (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "flex items-center px-3 py-2 text-base font-medium rounded-md transition-smooth",
                    isActive
                      ? "text-primary bg-accent/50"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/30"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Icon className="h-5 w-5 mr-3" />
                  {item.name}
                </NavLink>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;