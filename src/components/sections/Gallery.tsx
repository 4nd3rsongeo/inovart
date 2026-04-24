"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ZoomIn } from "lucide-react";

const images = [
  "/assets/16052b48-f5a4-4c9e-a930-f273960eb91d.jpg",
  "/assets/1d858f92-8dff-4780-b893-0ced61806537.jpg",
  "/assets/20443b63-5a32-4772-8f96-a1188e3480f8.jpg",
  "/assets/2c8687cb-283b-4edd-889a-14757e32ba57.jpg",
  "/assets/3ce82202-d497-4f9f-a177-906da6ef2821.jpg",
  "/assets/40b7c930-7514-45c7-8698-b4cada2756d7.jpg",
  "/assets/5d28dbc4-13be-4302-a896-a9c66da8d2ed.jpg",
  "/assets/6e577df5-2e6d-45ee-9083-364a11aac3a6.jpg",
  "/assets/79c8d3ea-4a0c-4dc1-803d-a8d18074cbaa.jpg",
  "/assets/80311e4b-94dc-4841-b2ec-b51ba5686e66.jpg",
  "/assets/a8e2ba2f-3a86-4e1f-b437-357e49914a75.jpg",
  "/assets/ad9a5a90-497a-4100-8ed8-7a49db184d0c.jpg",
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="portfolio" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Nosso <span className="text-primary">Portfólio</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground"
            >
              Conheça alguns dos nossos projetos recentes e veja a qualidade do acabamento que entregamos em cada detalhe.
            </motion.p>
          </div>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="relative group overflow-hidden rounded-xl bg-slate-200 break-inside-avoid"
            >
              <Dialog>
                <DialogTrigger asChild>
                  <button className="w-full relative aspect-auto cursor-zoom-in">
                    <Image
                      src={src}
                      alt={`Projeto R S INOVART PINTURAS ${index + 1}`}
                      width={500}
                      height={500}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <ZoomIn className="text-white h-8 w-8" />
                    </div>
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-[95vw] md:max-w-[90vw] h-[85vh] p-0 bg-black/95 border-none flex items-center justify-center overflow-hidden">
                  <div className="relative w-full h-full">
                    <Image
                      src={src}
                      alt={`Projeto R S INOVART PINTURAS ${index + 1}`}
                      fill
                      className="object-contain"
                      sizes="95vw"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
