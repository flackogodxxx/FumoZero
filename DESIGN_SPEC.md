# 🎨 Design Spec - Fumo Zero Landing Page

## 📐 Layout Geral

### Estrutura da Página
```
┌─────────────────────────────────┐
│         HERO SECTION            │
│  (Headline + CTA + Visual)     │
├─────────────────────────────────┤
│      SOCIAL PROOF SECTION       │
│  (Stats + Testimonials)         │
├─────────────────────────────────┤
│       BENEFITS SECTION          │
│  (6 Cards com ícones)           │
├─────────────────────────────────┤
│      HOW IT WORKS SECTION       │
│  (3 Passos visuais)             │
├─────────────────────────────────┤
│       URGENCY SECTION           │
│  (Dark background + CTA)        │
├─────────────────────────────────┤
│         CTA SECTION             │
│  (Primary CTA destacado)        │
├─────────────────────────────────┤
│         FAQ SECTION             │
│  (Accordion colapsável)         │
├─────────────────────────────────┤
│      FINAL CTA SECTION          │
│  (Dark variant)                 │
├─────────────────────────────────┤
│         FOOTER                  │
│  (Links + Copyright)            │
└─────────────────────────────────┘
```

## 🎨 Paleta de Cores

### Cores Principais
- **Primary Green**: `#16a34a` (primary-600)
  - Uso: Botões principais, destaques, links
  - Psicologia: Saúde, bem-estar, crescimento

- **Accent Orange**: `#f97316` (accent-500)
  - Uso: Badges, elementos de urgência
  - Psicologia: Energia, ação, urgência

- **Dark Gray**: `#111827` (dark-900)
  - Uso: Textos principais, backgrounds escuros
  - Psicologia: Profissionalismo, seriedade

### Gradientes
- **Hero Background**: `from-primary-50 via-white to-accent-50`
- **Button Primary**: `from-primary-600 to-primary-500`
- **Urgency Section**: `from-dark-900 via-dark-800 to-dark-900`

## 📝 Tipografia

### Fontes
- **Display (Títulos)**: Poppins (600, 700, 800, 900)
- **Body (Textos)**: Inter (400, 500, 600, 700)

### Hierarquia
- **H1**: 3xl (1.875rem) → 5xl (3rem) → 6xl (3.75rem)
  - Hero headline: 4xl → 5xl → 6xl
  - Peso: 800-900

- **H2**: 3xl → 4xl → 5xl
  - Seções principais: 3xl → 4xl → 5xl
  - Peso: 700-800

- **H3**: 2xl → 3xl
  - Subtítulos: 2xl
  - Peso: 600-700

- **Body**: base (1rem) → lg (1.125rem) → xl (1.25rem)
  - Textos: base → lg
  - Descrições: base
  - Peso: 400-500

## 🧩 Componentes

### Botão Primário (CTA)
```
┌─────────────────────────────┐
│  [Quero Começar Agora]      │
└─────────────────────────────┘

Especificações:
- Background: Gradiente verde (primary-600 → primary-500)
- Cor do texto: Branco
- Padding: py-4 px-8
- Border radius: rounded-xl (12px)
- Font size: text-lg (1.125rem)
- Font weight: semibold (600)
- Shadow: shadow-lg → shadow-xl (hover)
- Transform: scale-105 (hover)
- Transition: duration-300
```

### Card de Benefício
```
┌─────────────────────────────┐
│        [Ícone]              │
│                             │
│    Título do Benefício      │
│                             │
│  Descrição do benefício...  │
└─────────────────────────────┘

Especificações:
- Background: Branco
- Border: border-primary-100
- Padding: p-6
- Border radius: rounded-2xl (16px)
- Shadow: shadow-lg → shadow-xl (hover)
- Transform: scale-105 (hover)
- Grid: 1 col (mobile) → 2 cols (tablet) → 3 cols (desktop)
```

### Card de Depoimento
```
┌─────────────────────────────┐
│  ★★★★★                      │
│                             │
│  "Texto do depoimento..."   │
│                             │
│  Nome - Localidade          │
│  [✓ Verificado]             │
└─────────────────────────────┘

Especificações:
- Background: Gradiente (primary-50 → white)
- Border: border-primary-100
- Padding: p-6
- Border radius: rounded-2xl
- Shadow: shadow-lg
```

## 📱 Breakpoints

- **Mobile**: < 640px (default, mobile-first)
- **Tablet**: ≥ 768px (md:)
- **Desktop**: ≥ 1024px (lg:)
- **Large Desktop**: ≥ 1280px (xl:)

## 🎬 Animações

### Fade In
- Duração: 0.6s
- Easing: ease-in-out
- Uso: Elementos principais

### Slide Up
- Duração: 0.6s
- Easing: ease-out
- Uso: Cards, seções

### Hover Scale
- Transform: scale(1.05)
- Duração: 300ms
- Uso: Botões, cards

### Pulse
- Duração: 3s
- Iteração: infinita
- Uso: Background decorations

## 📏 Espaçamento

### Seções
- Padding vertical: py-16 (mobile) → md:py-24 (desktop)
- Padding horizontal: px-4 (mobile) → sm:px-6 → lg:px-8

### Container
- Max width: max-w-7xl (1280px)
- Margin: mx-auto (centralizado)

### Gaps
- Grid gap: gap-6 → md:gap-8 → lg:gap-12
- Flex gap: gap-4 → gap-6

## 🖼️ Imagens

### Hero Visual
- Aspect ratio: 1:1 (mobile) → 4:3 (desktop)
- Border radius: rounded-3xl
- Shadow: shadow-2xl
- Placeholder: 400x400px mínimo

### Screenshots (Social Proof)
- Aspect ratio: 1:1
- Grid: 2 cols (mobile) → 4 cols (desktop)
- Border radius: rounded-xl

## 🎯 Microinterações

### Botões
- Hover: scale(1.05) + shadow-xl
- Active: scale(0.95)
- Focus: outline ring

### FAQ Accordion
- Expand: height auto + fade in
- Collapse: height 0 + fade out
- Ícone: rotate 180deg

### Scroll Animations
- Trigger: Intersection Observer
- Threshold: 0.3 (30% visível)
- Animation: fade in + slide up

## 📊 Grids

### Benefits Grid
- Mobile: 1 coluna
- Tablet: 2 colunas
- Desktop: 3 colunas

### Testimonials Grid
- Mobile: 1 coluna
- Desktop: 3 colunas

### How It Works
- Mobile: 1 coluna (stacked)
- Desktop: 3 colunas (horizontal)

## 🔍 Detalhes de Design

### Sombras
- Cards: shadow-lg
- Botões: shadow-lg → shadow-xl (hover)
- Hero visual: shadow-2xl

### Bordas
- Botões: rounded-xl (12px)
- Cards: rounded-2xl (16px)
- Hero visual: rounded-3xl (24px)

### Opacidades
- Background decorations: opacity-30
- Textos secundários: text-dark-600 (opacity implícita)
- Overlays: bg-white/10

## 🎨 Estados Visuais

### Hover
- Botões: scale + shadow increase
- Cards: scale + shadow increase
- Links: color change

### Focus
- Outline: ring-2 ring-primary-500
- Visible em navegação por teclado

### Active
- Botões: scale(0.95)
- Feedback tátil

## 📐 Medidas Específicas

### Hero
- Altura mínima: 100vh (mobile) → auto (desktop)
- Padding: section-padding padrão

### CTAs
- Altura mínima do botão: 56px (py-4 = 16px top + 16px bottom + 24px texto)
- Largura: w-full (mobile) → w-auto (desktop)

### FAQ
- Padding do item: p-6
- Altura máxima do conteúdo: auto (expandido)

---

## 🖥️ Para Recriar no Figma

1. **Criar Frame**: 375px (mobile) e 1440px (desktop)
2. **Definir Grid**: 12 colunas, 8px gutter
3. **Criar Color Styles**: Todas as cores do design-system.json
4. **Criar Text Styles**: H1, H2, H3, Body, etc.
5. **Componentes**: Botões, Cards, Inputs
6. **Auto Layout**: Usar para espaçamento consistente
7. **Variants**: Criar variantes para A/B testing

---

**Última atualização**: Espec completo para desenvolvimento e design 🎨


