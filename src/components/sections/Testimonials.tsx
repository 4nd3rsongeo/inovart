"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Ricardo Silva",
    role: "Proprietário Residencial",
    text: "A equipe da InovArt superou todas as expectativas. O acabamento das paredes ficou perfeito e eles entregaram a casa impecavelmente limpa.",
    rating: 5,
  },
  {
    name: "Ana Oliveira",
    role: "Arquiteta",
    text: "Trabalho com a InovArt em diversos projetos. A precisão técnica e o respeito aos prazos são diferenciais raros no mercado de pintura.",
    rating: 5,
  },
  {
    name: "Marcos Souza",
    role: "Gerente Comercial",
    text: "Pintamos nossa loja com eles. Execução rápida e profissional, sem atrapalhar o funcionamento do nosso negócio. Recomendo fortemente.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            O que dizem nossos <span className="text-primary">Clientes</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground"
          >
            A satisfação de quem já transformou seus ambientes com a InovArt.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-md bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                  <Quote className="h-16 w-16 text-primary" />
                </div>
                <CardContent className="pt-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 italic mb-6 relative z-10">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-bold text-slate-900">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
