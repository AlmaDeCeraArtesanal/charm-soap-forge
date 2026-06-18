# Plan: Landing "Crea, Emprende y Transforma tu Vida con la Jabonería Artesanal"

Construir una landing one-page de alta conversión en TanStack Start + React + Tailwind v4, siguiendo al pie de la letra el brief proporcionado (paleta pastel, tipografías Quicksand/Nunito, 16 secciones, fondos CSS sin imágenes, CTAs a Hotmart).

## Alcance

- Página única en `src/routes/index.tsx` (reemplaza el placeholder actual).
- Sin backend, sin base de datos, sin auth — es una landing estática de marketing.
- Todas las imágenes se sirven desde las URLs CloudFront indicadas con `<img loading="lazy">`.
- Todos los CTA apuntan a `https://pay.hotmart.com/N100915799Q?checkoutMode=10` (`target="_blank" rel="noopener"`).

## Estructura de archivos

```text
src/
  routes/
    index.tsx                 # head() con SEO + <LandingPage />
  components/landing/
    Navbar.tsx                # sticky glassmorphism
    Hero.tsx                  # sección 2
    NarrativeIntro.tsx        # sección 3
    ForYou.tsx                # sección 4
    CourseContent.tsx         # sección 5
    PriceBanner.tsx           # sección 6 (banner CTA inicial)
    Bonuses.tsx               # sección 7
    ModulesAccordion.tsx      # sección 8 (useState)
    PriceSection.tsx          # sección 9
    Certificate.tsx           # sección 10
    Testimonials.tsx          # sección 11
    UrgencyCTA.tsx            # sección 12
    Guarantee.tsx             # sección 13
    FAQ.tsx                   # sección 14 (useState)
    FinalCTA.tsx              # sección 15
    Footer.tsx                # sección 16
    Blob.tsx                  # blob decorativo reutilizable
    CTAButton.tsx             # botón CTA con gradiente y glow
    SectionReveal.tsx         # wrapper con IntersectionObserver fade-in
  styles.css                  # añade variables CSS, fuentes, utilidades
  routes/__root.tsx           # añade <link> a Google Fonts (Quicksand + Nunito)
```

## Detalles técnicos

- **Fuentes**: cargadas vía `<link rel="stylesheet">` en `__root.tsx` head (NO `@import` URL en `styles.css` — Tailwind v4/Lightning CSS no resuelve URLs remotas). Registrar `--font-display: "Quicksand"` y `--font-body: "Nunito"` en `@theme` de `styles.css`.
- **Variables CSS**: añadir el bloque `:root` del brief (`--bg-primary`, `--rosa-pastel`, `--cta-gradient`, etc.) en `styles.css`. Exponerlas también vía `@theme inline` cuando necesite generar utilidades Tailwind (ej. `bg-bg-lavanda`).
- **Fondos**: cada sección usa `style={{ background: 'var(--bg-...)' }}` o gradiente CSS. Cero `background-image` con URL.
- **Blobs**: componente `<Blob>` posicionado absoluto, `border-radius:50%`, `filter:blur(80px)`, dentro de contenedores `overflow-hidden relative`.
- **Acordeones**: `ModulesAccordion` (9 ítems) y `FAQ` (7 ítems) con `useState<number | null>` para el índice abierto, header con número/badge + título + `ChevronDown` rotando 180°, contenido con transición de altura.
- **Scroll-reveal**: hook `useInView` con `IntersectionObserver` (`threshold: 0.15`, `once: true`) aplicando clases `opacity-0 translate-y-5` → `opacity-100 translate-y-0` con `transition-all duration-700`.
- **CTA**: componente `<CTAButton>` con gradiente `var(--cta-gradient)`, `border-radius:50px`, glow `var(--glow-cta)`, hover `scale-105`. Tamaños `md` / `xl`.
- **Iconos**: `lucide-react` (CheckCircle2, ChevronDown, ShieldCheck, Star, Clock, Gift, Award, Lock, Instagram, Facebook, Youtube). Ya está disponible.
- **Imágenes**: `<img>` con `loading="lazy"`, `className="rounded-[20px] shadow-[var(--card-shadow)] max-w-full h-auto"`. Las del hero llevan rotación leve (`rotate-[3deg]` / `-rotate-3`).
- **Responsive**: mobile-first con `grid-cols-1 md:grid-cols-2`, menú navbar colapsa a botón hamburguesa simple (solo abre/cierra con state — sin librería).
- **SEO** (`index.tsx` head): title "Curso de Jabonería Artesanal | Crea, Emprende y Transforma tu Vida" (<60), description del subtítulo del hero (<160), og:title, og:description, og:image apuntando a la imagen hero principal, twitter:card summary_large_image. H1 único en el Hero.

## Contenido

Todo el copy, listas, módulos (9), bonos (5), FAQ (7) y testimonios se incluyen literal según el brief. Los testimonios serán 3 tarjetas con nombres genéricos creíbles (María G., Andrea P., Carolina R.) ya que el brief no provee texto exacto — texto breve y verosímil sobre la experiencia con el curso.

## Verificación

- Confirmar build limpio (auto-ejecutado por el harness).
- Revisar preview con `browser--view_preview` para validar layout desktop y mobile.
- Verificar que las imágenes externas cargan y que los CTA abren Hotmart.

## Fuera de alcance

- No se conecta Lovable Cloud (no hay datos de usuario, formularios, ni auth).
- No se implementa checkout propio — todo el pago corre en Hotmart.
- No se hacen variantes A/B ni analítica.
