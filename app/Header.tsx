'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Cart from './Cart';

const Header = () => {
  const [showTopBtn, setShowTopBtn] = useState<boolean>(false);
  const [isShowCart, setIsShowCart] = useState<boolean>(false);
  // todo fetch productListCategories in client component
  const productListCategories = [
    {
      id: 1,
      attributes: {
        label: "Tous les produits",
        slug: "products",
        path: "products"
      }
    },
    {
      id: 2,
      attributes: {
        label: "Hardware",
        slug: "hardware",
        path: "products#hardware"
      }
    },
    {
      id: 3,
      attributes: {
        label: "E-learning",
        slug: "e-learning",
        path: "products#e-learning"
      }
    },
    {
      id: 4,
      attributes: {
        label: "Figurines",
        slug: "figurines",
        path: "products#figurines"
      }
    }
  ];

  useEffect(() => {
    // get windows width for conditionnal rendering
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
    <>
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
              <li tabIndex={0}>
                <a className="justify-between">
                  Products
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                </a>
                <ul className="p-2 bg-base-100">
                  {
                    productListCategories.map((category) => (
                      <li key={category.id}>
                        {
                          category.attributes.path === '/products'
                            ? (
                              <Link href={`/${category.attributes.path}`}>{category.attributes.label}</Link>
                            )
                            : (
                              <a href={`/${category.attributes.path}`}>{category.attributes.label}</a>
                            )
                        }
                      </li>
                    ))
                  }
                </ul>
              </li>
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
            <li tabIndex={0}>
              <a>
                Products
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
              </a>
              <ul className="p-2 bg-base-100">
                {
                  productListCategories.map((category) => (
                    <li key={category.id}>
                      {
                        category.attributes.path === '/products'
                          ? (
                            <Link href={`/${category.attributes.path}`}>{category.attributes.label}</Link>
                          )
                          : (
                            <a href={`/${category.attributes.path}`}>{category.attributes.label}</a>
                          )
                      }
                    </li>
                  ))
                }
              </ul>
            </li>
            <li><Link href="/video">Vidéo</Link></li>
          </ul>
        </nav>
        {/* Searchbar */}
        <div className="navbar-end gap-2">
          <button className="relative mr-1" onClick={() => setIsShowCart(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
            <span className="bg-blue-700 text-white w-5 h-5 rounded-full absolute -top-4 left-2 text-center leading-5 ">
              0
            </span>
          </button>
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
      {isShowCart && <Cart setIsShowCart={setIsShowCart} />}
    </>
  )
}

export default Header