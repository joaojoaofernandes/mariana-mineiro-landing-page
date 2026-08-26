import { CalendarCheck, ClipboardCheck, Utensils, TrendingUp } from "lucide-react"

const steps = [
  {
    icon: CalendarCheck,
    number: "01",
    title: "Começamos por te conhecer",
    description: "Irás receber um questionário inicial para conhecer os teus objetivos, hábitos, preferências e rotina.",
  },
  {
    icon: ClipboardCheck,
    number: "02",
    title: "Contruímos a tua estratégia",
    description:
      "Na primeira consulta, analisamos o teu contexto e definimos os primeiros objetivos e estratégias a implementar.",
  },
  {
    icon: Utensils,
    number: "03",
    title: "Ajustamos",
    description:
      "Acompanhamos a tua evolução, identificamos dificuldades e ajustamos a estratégia sempre que necessário.",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Contruímos autonomia",
    description:
      "O objetivo é que desenvolvas conhecimento, flexibilidade e confiança para fazer escolhas de forma autónoma.",
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center flex flex-col gap-4 mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-primary">
            Mais do que um Plano Alimentar
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight text-foreground text-balance">
            A tua jornada em 4 passos
          </h2>
        </div>

        {/* Steps */}
        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-primary/20" />

          {steps.map((step, i) => (
            <div key={step.number} className="relative flex flex-col items-center text-center gap-5">
              {/* Number circle */}
              <div className="relative z-10 flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground font-serif text-lg shadow-lg shadow-primary/20">
                {step.number}
              </div>
              {/* Dot connector for mobile between items */}
              {i < steps.length - 1 && (
                <div className="sm:hidden w-px h-8 bg-primary/20 -mt-3 -mb-3" />
              )}
              <div className="flex flex-col gap-2">
                <h3 className="font-serif text-xl text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
