"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AlignJustify } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
// import AuthDropdown from "./AuthDropdown";
import { isLoggedIn } from "@/services/actions/auth.services";
import Image from "next/image";
import assets from "@/assets";
import dynamic from "next/dynamic";

const Header = () => {
  const AuthDropdown = dynamic(
    () => import("@/components/shared/AuthDropdown"),
    { ssr: false }
  );

  const menuItems = [
    {
      label: "Home",
      path: "/",
      show: true,
    },
    {
      label: "Donners",
      path: "/donner-list",
      show: true,
    },
    {
      label: "About Us",
      path: "/about-us",
      show: true,
    },
  ];

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isScrolled ? "bg-white" : "bg-[#dedede]"
        }`}
      >
        <div className="mx-auto px-12">
          <header className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Sheet>
                <SheetTrigger asChild>
                  <Button className="lg:hidden">
                    <AlignJustify className="h-6 w-6" />
                    <span className="sr-only">Toggle Navigation menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <Link
                    href="/"
                    className="flex items-center gap-2 font-semibold"
                  >
                    <Image
                      src={assets.icons.logo}
                      alt="logo"
                      width={40}
                      height={40}
                    />
                  </Link>
                  <div className="grid gap-2 py-6">
                    {menuItems.map((menuItem) =>
                      menuItem.show ? (
                        <Link  href={menuItem.path} key={menuItem.label}>
                          {menuItem.label}
                        </Link>
                      ) : null
                    )}
                  </div>
                </SheetContent>
              </Sheet>

              <div className="hidden md:flex">
                <Link
                  href="/"
                  className="flex items-center gap-2 font-semibold"
                >
                  <Image
                    src={assets.icons.logo}
                    alt="logo"
                    width={100}
                    height={100}
                  />
                  <p className="uppercase">
                    <span className="text-red-600 font-bold">Plasma</span>{" "}
                    Pioneers
                  </p>
                </Link>
              </div>
            </div>

            <nav className="hidden lg:flex gap-6">
              {menuItems.map((menuItem) =>
                menuItem.show ? (
                  <Link
                    href={menuItem.path}
                    key={menuItem.label}
                    className="group inline-flex h-9 w-max items-center text-red-600   font-semibold"
                  >
                    {menuItem.label}
                  </Link>
                ) : null
              )}
            </nav>

            <div className="flex items-center">
              <AuthDropdown />
            </div>
          </header>
        </div>
      </div>
      <div className="mt-16">{/* Main content goes here */}</div>
    </>
  );
};

export default Header;
