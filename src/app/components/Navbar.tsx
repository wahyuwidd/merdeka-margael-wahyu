'use client'
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

const Navbar = () => {
  const { lang, slug } = useParams() as { lang: string[], slug: string[] };
  const asPath = usePathname();
  const currentPage = asPath ? asPath : null;
  const asPath2 = usePathname().split('/');
  
  return (
    <nav className="bg-white backdrop:blur fixed top-0 w-full z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between md:h-28 h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="/">
              <img
                className="h-16 w-16"
                src="/logo.png"
                alt="Workflow logo"
              />
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-44 group flex items-baseline text-xl space-x-10">
                <a
                  href="/"
                  className={asPath2[1] === "" ? "img-back" : ""}
                >
                  <span className="ml-4">Home</span>
                </a>

                <a
                  href="/about"
                  className={asPath2[1] === "about" ? "img-back" : ""}
                >
                  <span className="ml-4">About</span>
                </a>

                <Link href="#">
                  <span className="ml-4">History</span>
                </Link>
                <Link href="#">
                  <span className="ml-4">Gallery</span>
                </Link>
                <Link href="#">
                  <span className="ml-4">Contact</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
