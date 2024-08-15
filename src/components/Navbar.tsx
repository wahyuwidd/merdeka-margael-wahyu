'use client'
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react"
import Dropdown from "./Dropdown";
import Script from "next/script";
import { useEffect, useState } from "react";


const Navbar = () => {
  const { lang, slug } = useParams() as { lang: string[], slug: string[] };
  const asPath = usePathname();
  const currentPage = asPath ? asPath : null;
  const asPath2 = usePathname().split('/');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const burger = document.querySelector('.navbar-burger');
    const menu = document.querySelector('.navbar-menu');
    const close = document.querySelector('.navbar-close');
    const backdrop = document.querySelector('.navbar-backdrop');
    const body = document.querySelector('body');

    const openMenu = () => {
      menu!!.classList.remove('hidden');
      backdrop!!.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    };

    const closeMenu = () => {
      menu!!.classList.add('hidden');
      backdrop!!.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    };

    if (burger && menu) {
      burger.addEventListener('click', openMenu);
    }

    if (close && menu) {
      close.addEventListener('click', closeMenu);
    }

    if (backdrop && menu) {
      backdrop.addEventListener('click', closeMenu);
    }

    return () => {
      if (burger) burger.removeEventListener('click', openMenu);
      if (close) close.removeEventListener('click', closeMenu);
      if (backdrop) backdrop.removeEventListener('click', closeMenu);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-white backdrop:blur fixed top-0 w-full z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between w-full md:h-28 h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="/">
              <img
                className="h-16 w-16"
                src="/assets/images/logo/logo.png"
                alt="logo"
              />
              </a>
            </div>
            <div className="hidden md:block">
              <div className="xl:ml-44 md:ml-24 group flex items-baseline text-xl space-x-10 hover:bg-[url('http://localhost:3000/assets/images/additional/brush.png')]">
                <a
                  href="/"
                  className={asPath2[1] === "" ? "img-back" : ""}
                >
                  <span className="ml-4">Beranda</span>
                </a>

                <Link
                  href="/tentang"
                  className={asPath2[1] === "tentang" ? "img-back" : ""}
                >
                  <span className="ml-4">Tentang</span>
                </Link>

                  {/* <span className="ml-4 flex items-center justify-center">Sejarah <ChevronDown className="mt-1 ml-1" size={16} /></span> */}
                  <Dropdown />
                <Link href="/galeri"
                className={asPath2[1] === "galeri" ? "img-back" : ""}>
                  <span className="ml-4">Galeri</span>
                </Link>
                <Link href="/kontak" className={asPath2[1] === "kontak" ? "img-back" : ""}>
                  <span className="ml-4">Kontak</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="md:hidden">
			        <button className="navbar-burger flex items-center p-3">
                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 18L20 18" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M4 12L20 12" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M4 6L20 6" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
                </svg>
			        </button>
		      </div>
        </div>
        
        <div className="navbar-menu relative z-50 hidden">
    <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
    <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r ">
        <div className="flex items-center mb-8">
            <a className="mr-auto text-3xl font-bold leading-none" href="#">
                <img src="/assets/images/logo/logo.png" alt="" className="w-16 h-16" />
            </a>
            <button className="navbar-close">
                <svg className="h-6 w-6 cursor-pointer " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
        </div>
        <div>
            <ul >
                <li className="mb-1">
                    <a className="block p-4 text-md hover:bg-red-50 hover:text-red-600 rounded" href="/">Beranda</a>
                </li>
                <li className="mb-1">
                    <a className="block p-4 text-md hover:bg-red-50 hover:text-red-600 rounded" href="/tentang">Tentang</a>
                </li>
                <li className="mb-1">
                    <a className="block p-4 text-md hover:bg-red-50 hover:text-red-600 rounded" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>Sejarah</a>
                </li>
                {isDropdownOpen && (
                  <>
                    <li className="mb-1 ml-4">
                        <a className="block p-4 text-md hover:bg-red-50 hover:text-red-600 rounded" href="/sejarah/peristiwa">Peristiwa</a>
                    </li>
                    <li className="mb-1 ml-4">
                        <a className="block p-4 text-md hover:bg-red-50 hover:text-red-600 rounded" href="/sejarah/pahlawan">Pahlawan</a>
                    </li>
                    <li className="mb-1 ml-4">
                        <a className="block p-4 text-md hover:bg-red-50 hover:text-red-600 rounded" href="/sejarah/kepemimpinan">Kepemimpinan</a>
                    </li>
                  </>
                )}
                <li className="mb-1">
                    <a className="block p-4 text-md hover:bg-red-50 hover:text-red-600 rounded" href="/galeri">Galeri</a>
                </li>
                <li className="mb-1">
                    <a className="block p-4 text-md hover:bg-red-50 hover:text-red-600 rounded" href="/kontak">Kontak</a>
                </li>
            </ul>
        </div>
    </nav>
</div>
      </div>
    </nav>
  )
}

export default Navbar;
