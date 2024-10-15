import Link from "next/link";
import { Menu } from "lucide-react";
import Image from "next/image";
import { Logo, LogoTitle, LogoTitleWhite } from "@/public";

export default function Footer() {
  return (
    <footer className="flex justify-center bg-gray-300 py-6 px-4 md:px-6">
      <div className="container w-full max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div className="flex items-center mb-4 md:mb-0">
            <a
              className="mb-4 flex items-center gap-2 text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 lg:mb-0 lg:mt-0"
              href="#"
            >
              <Image
                src={Logo}
                height={45}
                width={45}
                alt="Hamburger Icon"
                className="h-15 w-15"
              />
              <Image
                src={LogoTitle}
                height={16}
                width={32}
                alt="Hamburger Icon"
                className="h-16 w-40"
              />
            </a>
          </div>
          {/* <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12">
            <div>
              <h3 className="font-semibold mb-2">Quick Links</h3>
              <ul className="space-y-1">
                <li>
                  <Link href="/" className="text-gray-600 hover:text-gray-900">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/product"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Product
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Support</h3>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="/company"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Company
                  </Link>
                </li>
                <li>
                  <Link
                    href="/press"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Press Media
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
        <div className="flex flex-col gap-2 text-sm text-gray-500 border-t border-gray-300 pt-4">
          <p className="">
            <Link
              href="https://acceliqdigital.com/privacy-policy/"
              className="hover:text-gray-700"
            >
              Privacy Policy
            </Link>
            {" | "}
            <Link
              href="https://acceliqdigital.com/privacy-policy/"
              className="hover:text-gray-700"
            >
              Cookie Policy
            </Link>
          </p>
          <p>© 2024 Excelinsight™ | All Rights Reserved |</p>
        </div>
      </div>
    </footer>
  );
}
