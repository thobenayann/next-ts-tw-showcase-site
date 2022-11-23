'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Header = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="navbar bg-base-100 shadow-2xl sticky top-0 z-50">
      <nav className="navbar-start">
        {/* Mobile dropdown menu */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><a href={`${process.env.NODE_ENV === 'development' ? process.env.BASE_URL : ''}/#feature`}>Stack</a></li>
            <li><a href={`${process.env.NODE_ENV === 'development' ? process.env.BASE_URL : ''}/#step`}>Méthode</a></li>
            <li><Link href="/articles">Blog</Link></li>
            <li><Link href="/video">Vidéo</Link></li>
          </ul>
        </div>
        {/* Logo */}
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          JMSTK
        </Link>
      </nav>
      {/* Navbar desktop */}
      <nav className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li><a href={`${process.env.NODE_ENV === 'development' ? process.env.BASE_URL : ''}/#feature`}>Stack</a></li>
          <li><a href={`${process.env.NODE_ENV === 'development' ? process.env.BASE_URL : ''}/#step`}>Méthode</a></li>
          <li><Link href="/articles">Blog</Link></li>
          <li><Link href="/video">Vidéo</Link></li>
        </ul>
      </nav>
      {/* Searchbar */}
      <div className="navbar-end gap-2">
        <div className="form-control">
          <input type="text" placeholder="Search" className="input input-bordered w-36 md:w-full" />
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <Image
                alt="people"
                src="https://placeimg.com/80/80/people"
                width={80}
                height={80}
              />
            </div>
          </label>
          {/* Dropdown menu on avatar */}
          <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
      <div className="top-to-btm">
        {" "}
        {showTopBtn && (
          <button
            className="bg-dark rounded-full animate-fade-in-down btn-sm fixed top-22 right-4"
            onClick={goToTop}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button >
        )}{" "}
      </div>
    </div>
  )
}

export default Header