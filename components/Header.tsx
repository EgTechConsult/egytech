import Link from "next/link";
import { Button } from "./ui/button";

// Components 
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 font-primary bg-accent">
      <div className="container mx-auto">
        {/* Logo */}
        <Link href={"/"}>
          <h1 className="font-primary">
            Logo <span className="purple">.</span>
          </h1>
        </Link>
        {/* Navigation Bar */}
        <div className="xl:flex">
        <Nav />
        </div>
      </div>
    </header>
  );
};

export default Header;
