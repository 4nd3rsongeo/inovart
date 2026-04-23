"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section id="inicio" className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/16052b48-f5a4-4c9e-a930-f273960eb91d.jpg"
          alt="Pintura Residencial de Alto Padrão"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-secondary/70 backdrop-brightness-75" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-white">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary-foreground text-sm font-medium mb-6 backdrop-blur-sm">
              <CheckCircle2 className="h-4 w-4" />
              Especialistas em Pintura Premium
            </span>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Transformamos seu ambiente com <span className="text-primary">inovação</span> e precisão.
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl">
              A InovArt oferece soluções completas em pintura residencial e comercial, 
              focando no acabamento impecável e na satisfação total de nossos clientes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg h-14 px-8 group" asChild>
                <Link href="#contato">
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg h-14 px-8 bg-white/5 hover:bg-white/10 border-white/20" asChild>
                <Link href="#portfolio">Ver Portfólio</Link>
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-12 flex items-center gap-8 text-white/60"
          >
            <div>
              <p className="text-2xl font-bold text-white">10+</p>
              <p className="text-xs uppercase tracking-wider">Anos de Experiência</p>
            </div>
            <div className="h-8 w-px bg-white/20" />
            <div>
              <p className="text-2xl font-bold text-white">500+</p>
              <p className="text-xs uppercase tracking-wider">Projetos Entregues</p>
            </div>
            <div className="h-8 w-px bg-white/20" />
            <div>
              <p className="text-2xl font-bold text-white">100%</p>
              <p className="text-xs uppercase tracking-wider">Garantia de Qualidade</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
      >
        <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-current rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
