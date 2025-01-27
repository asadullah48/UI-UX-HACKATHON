
import Link from "next/link";
import React from "react";
import NewsletterForm from ./NewsletterForm";

interface FooterLink {
  label: string;
  href: string;
}

const Footer = () => {
  const links: { [key: string]: FooterLink[] } = {
    links: [
      { label: "Home", href: "/" },
      { label: "Shop", href: "/" },
      { label: "About", href: "/" },
      { label: "Contact", href: "/" },
    ],
    help: [
      { label: "Payment Options", href: "/" },
      { label: "Returns", href: "/" },
      { label: "Privacy Policies", href: "/" },
    ],
  };

  return (
    <footer className="w-full bg-white font-[poppins] select-none">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {/* Address Section */}
          <div className="order-1 lg:order-1">
            <div className="text-gray-400 text-sm font-light space-y-2">
              <p className="leading-relaxed">
                400 University Drive Suite 200 Coral
                <br />
                spaGables,
                <br />
                FL 33134 USA
              </p>
            </div>
          </div>

          {/* Links Section */}
          <div className="order-2 lg:order-2">
            <h2 className="text-gray-400 font-medium mb-6">Links</h2>
            <nav>
              <ul className="space-y-4">
                {links.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-800 hover:text-gray-600 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Help Section */}
          <div className="order-3 lg:order-3">
            <h2 className="text-gray-400 font-medium mb-6">Help</h2>
            <nav>
              <ul className="space-y-4">
                {links.help.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-800 hover:text-gray-600 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Newsletter Section */}
          <div className="order-4 lg:order-4">
            <h2 className="text-gray-400 font-medium mb-6">Newsletter</h2>
            <NewsletterForm />
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Meuble House. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;