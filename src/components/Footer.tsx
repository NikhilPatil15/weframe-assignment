import Image from 'next/image';
import logo from '../../public/logo.png';
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="bg-white border-t border-gray-300 py-8 px-4">
      <div className="container mx-auto flex flex-wrap justify-between items-start gap-8">
        {/* Logo Section */}
        <div className="w-full sm:w-auto flex flex-col items-start">
          <Image src={logo} alt="Logo" className="w-[133px] h-[65px] mb-4" />
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 flex-grow">
          {/* Infos Pratiques */}
          <div>
            <h4 className="text-sm font-semibold text-gray-800 uppercase font-poppins mb-4">
              Infos Pratiques
            </h4>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>
                <a href="#" className="hover:text-gray-900">
                  À propos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Livraisons & Reprises
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Mode d&apos;emploi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  F.A.Q
                </a>
              </li>
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h4 className="text-sm font-semibold text-gray-800 uppercase font-poppins mb-4">
              Légal
            </h4>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>
                <a href="#" className="hover:text-gray-900">
                  Mentions légales
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  CGU
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  CGV
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Politique de confidentialité
                </a>
              </li>
            </ul>
          </div>

          {/* Mon Compte */}
          <div>
            <h4 className="text-sm font-semibold text-gray-800 uppercase font-poppins mb-4">
              Mon Compte
            </h4>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>
                <a href="#" className="hover:text-gray-900">
                  Accéder à mon compte
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Ma liste d&apos;envie
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Créer un compte
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Mot de passe oublié
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="w-full sm:w-auto flex flex-col items-start sm:items-end">
          <h4 className="text-sm font-semibold text-gray-800 uppercase font-poppins mb-4">
            Nous Suivre
          </h4>
          <div className="flex gap-4">
            <a
              href="#"
              className="border border-gray-400 p-2 rounded-md text-gray-600 hover:text-gray-900 hover:border-gray-900"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              className="border border-gray-400 p-2 rounded-md text-gray-600 hover:text-gray-900 hover:border-gray-900"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              className="border border-gray-400 p-2 rounded-md text-gray-600 hover:text-gray-900 hover:border-gray-900"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
