import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-primary text-white py-12 border-t border-brand-primary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand & Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold tracking-tight">
              Gambo Consultancy
            </h3>
            <p className="text-white max-w-sm">
              Providing expert educational, IT, leadership, and mentorship
              consultancy services with integrity and academic excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-white hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-white hover:text-white transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="text-white hover:text-white transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-brand-accent mt-0.5 shrink-0" />
                <a
                  href="https://maps.google.com/?q=Road+2,+ICT+Centre,+Centre+of+Excellence+in+Software+Engineering,+Obafemi+Awolowo+University,+Ile-Ife,+22028,+Osun+State"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-white transition-colors"
                >
                  Road 2, ICT Centre, Centre of Excellence in Software
                  Engineering,
                  <br />
                  Obafemi Awolowo University, Ile-Ife, 22028, Osun State.
                </a>
              </div>
              <div className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-brand-accent mt-0.5 shrink-0" />
                <div className="text-white flex flex-col space-y-1">
                  <a
                    href="tel:+2347034966376"
                    className="hover:text-white transition-colors"
                  >
                    +234 703 496 6376
                  </a>
                  <a
                    href="tel:+2349069212785"
                    className="hover:text-white transition-colors"
                  >
                    +234 906 921 2785
                  </a>
                  <a
                    href="tel:+2348036574935"
                    className="hover:text-white transition-colors"
                  >
                    +234 803 657 4935
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-brand-accent shrink-0" />
                <a
                  href="mailto:gamboconsultancy@gmail.com"
                  className="text-white hover:text-white transition-colors"
                >
                  gamboconsultancy@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="!text-white">
            &copy; {currentYear} Gambo Consultancy. All rights reserved.
          </p>
          <p className="!text-white">
            Designed and developed by{" "}
            <a
              href="https://samkiel.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:text-brand-accent transition-colors"
            >
              SAMKIEL
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
