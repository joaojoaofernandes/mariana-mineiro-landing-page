import {
  Apple,
  Salad,
  Stethoscope,
  Dumbbell,
  MonitorSmartphone,
} from "lucide-react"

const services = [
  {
    icon: Apple,
    title: "Emagrecimento Saudavel",
    description:
      "Estrategias individualizadas e sustentaveis para perda de peso com saude e sem restricoes radicais.",
  },
  {
    icon: Salad,
    title: "Reeducacao Alimentar",
    description:
      "Transforme sua relacao com a comida, aprenda a fazer escolhas conscientes e prazerosas no dia a dia.",
  },
  {
    icon: Stethoscope,
    title: "Nutricao Clinica",
    description:
      "Acompanhamento nutricional para condicoes clinicas como diabetes, hipertensao e intolerâncias.",
  },
  {
    icon: Dumbbell,
    title: "Nutricao Esportiva",
    description:
      "Planos alimentares otimizados para desempenho, recuperacao e composicao corporal.",
  },
  {
    icon: MonitorSmartphone,
    title: "Atendimento Online",
    description:
      "Consultas presenciais e online com a mesma qualidade, cuidado e atencao aos detalhes.",
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center flex flex-col gap-4 mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-primary">
            Servicos
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight text-foreground text-balance">
            Como posso te ajudar
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed text-pretty">
            Cada servico e pensado para atender suas necessidades de forma
            personalizada e acolhedora.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative bg-card rounded-2xl border border-border/50 p-8 flex flex-col gap-5 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20 hover:-translate-y-1"
            >
              <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/15">
                <service.icon
                  className="size-6 text-primary"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="font-serif text-xl text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
