"use client";

import { motion } from "framer-motion";
import { ClipboardList, Calculator, PaintBucket, Key } from "lucide-react";

const steps = [
  {
    title: "Orçamento",
    description: "Visita técnica para avaliação do local e levantamento de necessidades.",
    icon: ClipboardList,
  },
  {
    title: "Planejamento",
    description: "Definição de cronograma, materiais e paleta de cores personalizada.",
    icon: Calculator,
  },
  {
    title: "Execução",
    description: "Pintura profissional com foco em detalhes e mínima interferência na sua rotina.",
    icon: PaintBucket,
  },
  {
    title: "Entrega",
    description: "Vistoria final, limpeza completa e entrega do ambiente renovado.",
    icon: Key,
  },
];

export function Process() {
  return (
    <section id="processo" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Nosso <span className="text-primary">Processo</span> de Trabalho
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground"
          >
            Transparência e organização do primeiro contato à entrega das chaves.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-6 shadow-xl relative">
                  <step.icon className="h-8 w-8" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-xs font-bold border-2 border-white">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
