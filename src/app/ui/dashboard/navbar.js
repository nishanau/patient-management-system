import Link from "next/link";
import FolderIcon from '@mui/icons-material/Folder';
import Image from "next/image";

const Navbar = () => {
  const navLinks = [
    { href: '/home', name: 'Home' },
    { href: '/about', name: 'Appointments' },
    { href: '/about', name: 'Treatments' },
    { href: '/about', name: 'Forms' },
    { href: '/about', name: 'Profile' },
  ];

  return (
    <div className="">
      <nav className="bg-gray-800 rounded-md  p-4 text-white h-full flex flex-col">
        <div className="container mx-auto">
          <Link href="/">
            <div className="flex mb-4">
              <img
                width="70px"

                src="https://nationaltoday.com/wp-content/uploads/2021/04/Every-Kid-Healthy-1200x834.jpg"
                alt="Profile Picture"
              />
              <p className="text-xl font-bold mb-4 ml-1 ">
                Welcome Back</p>
            </div>

          </Link>

          {navLinks.map((link, index) => (
            <Link key={index} href={link.href}>
              <p className="hover:text-gray-300 mb-2 text-md">
                <FolderIcon /> {link.name}
              </p>
            </Link>
          ))}
          <Link href="/about">
            <p className="hover:text-gray-300 mb-2 mt-4 text-md">Sign out</p>
          </Link>

          <br />
          <br />
          <br />
          <br />
        </div>

      </nav>
    </div>

  );
};

export default Navbar;