import Link from "next/link";
import { Button } from "./ui/button";

// Components
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 font-primary purple bg-background">
      <div className="container mx-auto bg-accent">
        {/* Navigation Bar */}
        <div className="xl:flex">
          <Nav />
        </div>
      </div>
    </header>
  );
};

export default Header;
