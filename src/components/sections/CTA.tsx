"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, MessageSquare, ArrowRight } from "lucide-react";
import Link from "next/link";

export function CTA() {
  return (
    <section id="contato" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Pronto para renovar seu ambiente?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-primary-foreground/80 mb-10"
          >
            Peça agora seu orçamento gratuito e descubra como a R S INOVART PINTURAS pode 
            trazer mais cor e vida para o seu espaço com acabamento premium.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Button size="lg" className="text-lg h-16 px-10 group shadow-xl bg-green-600 hover:bg-green-700 text-white border-none" asChild>
              <Link href="https://wa.me/5541984967461" target="_blank">
                <MessageSquare className="mr-2 h-6 w-6" />
                WhatsApp: (41) 98496-7461
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-8 text-sm text-primary-foreground/60"
          >
            Resposta rápida em até 24 horas úteis.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
