import LocaleSwitcher from "@/components/LocaleSwitcher";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="sticky">
      <div className="flex justify-between items-center p-4">
        <Link href="/" className="text-xl font-bold flex items-center">
          <Image
            src="/icon-purple.png"
            alt="fakegpt-logo"
            width="45"
            height="45"
          ></Image>
          FakeMess
        </Link>

        <div>
          <LocaleSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
