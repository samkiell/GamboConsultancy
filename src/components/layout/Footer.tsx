import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
  Instagram,
  Facebook,
  Linkedin,
} from "lucide-react";

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
                  href="/faq"
                  className="text-white hover:text-white transition-colors"
                >
                  FAQ
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
                  <div className="flex items-center gap-2">
                    <a
                      href="tel:+2347034966376"
                      className="hover:text-white transition-colors"
                    >
                      +234 703 496 6376
                    </a>
                    <a 
                      href="https://wa.me/2347034966376" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label="Chat on WhatsApp"
                      className="opacity-80 hover:opacity-100 transition-opacity"
                    >
                      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-[#25D366]" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                    </a>
                  </div>
                  <a
                    href="tel:+2349069212785"
                    className="hover:text-white transition-colors"
                  >
                    +234 906 921 2785
                  </a>
                  <div className="flex items-center gap-2">
                    <a
                      href="tel:+2348036574935"
                      className="hover:text-white transition-colors"
                    >
                      +234 803 657 4935
                    </a>
                    <a 
                      href="https://wa.me/2348036574935" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label="Chat on WhatsApp"
                      className="opacity-80 hover:opacity-100 transition-opacity"
                    >
                      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-[#25D366]" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                    </a>
                  </div>
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
              <div className="flex items-center">
                <Instagram className="h-5 w-5 mr-3 text-brand-accent shrink-0" />
                <a
                  href="https://www.instagram.com/omobolagambo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-white transition-colors"
                >
                  @omobolagambo
                </a>
              </div>
              <div className="flex items-center">
                <Facebook className="h-5 w-5 mr-3 text-brand-accent shrink-0" />
                <a
                  href="https://www.facebook.com/omobola.adeleke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-white transition-colors"
                >
                  Omobola Adeleke
                </a>
              </div>
              <div className="flex items-center">
                <Linkedin className="h-5 w-5 mr-3 text-brand-accent shrink-0" />
                <a
                  href="https://www.linkedin.com/in/ishaya-gambo-bab72776/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-white transition-colors"
                >
                  Prof. Dr. Ishaya Gambo
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
              href="https://prime-codes.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:text-brand-accent transition-colors"
            >
              PRIME
            </a>
            {" & "}
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
