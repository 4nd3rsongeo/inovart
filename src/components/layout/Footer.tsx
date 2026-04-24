import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Link href="/" className="relative h-12 w-40 block">
              <Image
                src="/assets/logo-inovart.jpg"
                alt="R S INOVART PINTURAS Logo"
                fill
                className="object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-white/60 text-sm">
              Especialistas em pintura residencial e comercial premium. 
              Transformando ambientes com inovação e arte.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-sm hover:text-primary transition-colors">
                Instagram
              </Link>
              <Link href="#" className="text-sm hover:text-primary transition-colors">
                Facebook
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><Link href="#inicio" className="hover:text-white transition-colors">Início</Link></li>
              <li><Link href="#diferenciais" className="hover:text-white transition-colors">Diferenciais</Link></li>
              <li><Link href="#portfolio" className="hover:text-white transition-colors">Portfólio</Link></li>
              <li><Link href="#processo" className="hover:text-white transition-colors">Processo</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>Pintura Residencial</li>
              <li>Pintura Comercial</li>
              <li>Texturas e Acabamentos</li>
              <li>Limpeza Pós-Obra</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>Rua da Inovação, 123 - Centro<br />São Paulo - SP</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href="tel:+5541984967461" className="hover:text-white transition-colors">
                  (41) 98496-7461
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span>contato@rsinovart.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-xs text-white/40">
          <p>© {new Date().getFullYear()} R S INOVART PINTURAS. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
