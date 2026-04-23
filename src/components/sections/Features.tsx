"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, Clock, Paintbrush } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Acabamento Premium",
    description: "Utilizamos as melhores técnicas e materiais do mercado para um resultado impecável e duradouro.",
    icon: Sparkles,
  },
  {
    title: "Limpeza Pós-Obra",
    description: "Sua única preocupação será apreciar o novo visual. Entregamos o ambiente limpo e organizado.",
    icon: ShieldCheck,
  },
  {
    title: "Prazo Garantido",
    description: "Respeitamos seu tempo. Cronograma rigoroso com entrega na data combinada, sem atrasos.",
    icon: Clock,
  },
  {
    title: "Consultoria de Cores",
    description: "Ajudamos você a escolher a paleta ideal para cada ambiente, harmonizando estética e funcionalidade.",
    icon: Paintbrush,
  },
];

export function Features() {
  return (
    <section id="diferenciais" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Por que escolher a <span className="text-primary">InovArt</span>?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground"
          >
            Combinamos tradição e inovação para entregar o melhor serviço de pintura que você já experimentou.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow bg-slate-50">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
