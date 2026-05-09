import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Ana Clara S.",
    initials: "AC",
    text: "A Dra. Camila mudou minha relacao com a comida. Pela primeira vez, sinto que estou comendo bem sem sofrimento. O plano e facil de seguir e se encaixa perfeitamente na minha rotina.",
  },
  {
    name: "Mariana F.",
    initials: "MF",
    text: "Depois de anos tentando dietas malucas, finalmente encontrei uma profissional que me ouviu. Perdi 12kg de forma saudavel e ganhei muito mais disposicao e autoestima.",
  },
  {
    name: "Juliana R.",
    initials: "JR",
    text: "O atendimento e incrivel! Ela realmente se importa com cada detalhe. As consultas online sao super praticas e o suporte pelo WhatsApp me ajuda demais no dia a dia.",
  },
  {
    name: "Fernanda L.",
    initials: "FL",
    text: "Meus exames melhoraram muito depois que comecei o acompanhamento. A abordagem funcional fez toda a diferenca na minha qualidade de vida.",
  },
]

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 lg:py-32 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center flex flex-col gap-4 mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-primary">
            Depoimentos
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight text-foreground text-balance">
            O que minhas pacientes dizem
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card rounded-2xl border border-border/50 p-8 flex flex-col gap-5 shadow-sm"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-4 fill-primary/80 text-primary/80"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground leading-relaxed text-pretty">
                {'"'}
                {t.text}
                {'"'}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-border/50">
                <div className="flex size-10 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-sm font-medium text-primary">
                    {t.initials}
                  </span>
                </div>
                <span className="font-medium text-foreground text-sm">
                  {t.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
