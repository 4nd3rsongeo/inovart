# Contexto do Projeto: InovArt Pinturas - Landing Page

## 1. Visão Geral
Criação de uma landing page de alto padrão para a **InovArt**, uma empresa especializada em pintura residencial e comercial premium. O objetivo é converter visitantes em leads via WhatsApp e exibir o portfólio.

## 2. Stack Tecnológica (Obrigatória)
* **Framework:** Next.js 14+ (App Router)
* **Linguagem:** TypeScript
* **Estilização:** Tailwind CSS (foco em design minimalista e moderno)
* **Componentes:** Radix UI ou Shadcn/ui (para acessibilidade e polimento)
* **Animações:** Framer Motion (essencial para o aspecto "dinâmico")
* **Ícones:** Lucide React

## 3. Ativos (Assets Locais)
* **Imagens:** Localizadas em `/public/assets/`
* **Logo:** `/public/assets/logo-inovart.png`
* **Fotos de Projetos:** Utilizar as fotos da pasta assets para compor uma galeria dinâmica (Masonry Grid ou Carousel).

## 4. Estrutura da Página (Seções)
1.  **Hero Section:** Impactante, com sobreposição de texto sobre uma imagem de alta qualidade, botão de Call to Action (CTA) com efeito hover.
2.  **Diferenciais (Features):** Grid de 3 ou 4 colunas destacando: "Acabamento Premium", "Limpeza Pós-Obra", "Prazo Garantido".
3.  **Galeria de Portfólio:** Seção dinâmica utilizando as fotos da pasta assets. Implementar efeito de "fade-in" ao dar scroll.
4.  **Processo de Trabalho:** Timeline vertical ou horizontal explicando do orçamento à entrega.
5.  **Depoimentos:** Cards com design limpo.
6.  **Rodapé:** Informações de contato e links sociais.

## 5. Diretrizes de Design & UX
* **Paleta de Cores:** Sugerir cores que remetam a inovação e limpeza (ex: Azul profundo, Cinza espacial e Branco puro).
* **Tipografia:** Sans-serif moderna (Inter ou Geist).
* **Interatividade:** - Header "Sticky" que muda de cor ao rolar.
    - Animações de entrada para cada seção usando Framer Motion.
    - Imagens otimizadas com o componente `next/image`.

## 6. Regras de Código
* Manter componentes pequenos e reutilizáveis em `/components`.
* Utilizar a convenção de `server components` por padrão, deixando interatividade apenas para `client components` específicos.
* O objeto 