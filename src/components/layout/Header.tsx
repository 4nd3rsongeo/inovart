"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useScroll } from "@/lib/hooks/use-scroll";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export function Header() {
  const scrolled = useScroll(20);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-background/80 backdrop-blur-md py-3 border-border"
          : "bg-transparent py-5 border-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="relative h-16 w-64">
          <Image
            src="/assets/logo-inovart.jpg"
            alt="InovArt Logo"
            fill
            className="object-contain"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="#inicio" className="hover:text-primary transition-colors">Início</Link>
          <Link href="#diferenciais" className="hover:text-primary transition-colors">Diferenciais</Link>
          <Link href="#portfolio" className="hover:text-primary transition-colors">Portfólio</Link>
          <Link href="#processo" className="hover:text-primary transition-colors">Processo</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" className="hidden sm:flex bg-green-600 hover:bg-green-700 text-white border-none" asChild>
            <Link href="https://wa.me/5541984967461" target="_blank">
              <Phone className="mr-2 h-4 w-4" />
              WhatsApp
            </Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="#contato">Orçamento Grátis</Link>
          </Button>
        </div>
      </div>
    </motion.header>
  );
}
