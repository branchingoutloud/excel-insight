import Link from "next/link";
import { Menu } from "lucide-react";
import Image from "next/image";
import { Logo, LogoTitle, LogoTitleWhite } from "@/public";
import { LinkPreview } from "@/components/ui/link-preview";

export default function Footer() {
  return (
    <footer className="flex justify-center bg-gray-300 px-4 py-6 md:px-6">
      <div className="container w-full">
        <div className="mb-6 flex flex-col items-start justify-between md:flex-row md:items-center">
          <div className="mb-4 flex items-center md:mb-0">
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
          {/* <div className="flex flex-col space-y-4 md:flex-row md:space-x-12 md:space-y-0">
            <div>
              <h3 className="mb-2 font-semibold">Quick Links</h3>
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
              <h3 className="mb-2 font-semibold">Support</h3>
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
        <div className="flex flex-col gap-2 border-t border-gray-300 pt-4 text-sm text-gray-500">
          <div className="">
            <LinkPreview
              url="https://acceliqdigital.com/privacy-policy/"
              className="text-gray-500 hover:text-gray-700"
            >
              Privacy Policy
            </LinkPreview>

            {" | "}
            <Link
              href="https://acceliqdigital.com/privacy-policy/"
              className="hover:text-gray-700"
            >
              Cookie Policy
            </Link>
          </div>
          <div>
            © 2024 Excelinsight™ |{" "}
            <LinkPreview
              url="https://acceliqdigital.com"
              className="text-gray-500 hover:text-gray-700"
            >
              All Rights Reserved{" "}
            </LinkPreview>
            |
          </div>
        </div>
      </div>
    </footer>
  );
}
