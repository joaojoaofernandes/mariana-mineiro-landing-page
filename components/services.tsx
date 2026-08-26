import {
  Apple,
  Salad,
  Dumbbell,
  Activity
} from "lucide-react"

const services = [
  {
    icon: Apple,
    title: "Emagrecimento",
    description:
      "Acompanhamento nutricional para a perda de massa gorda, através de estratégias realistas e sustentáveis, sem depender de restrições.",
  },
  {
    icon: Dumbbell,
    title: "Hipertrofia Muscular",
    description:
      "Estratégias para o ganho de massa muscular, com foco não só na estética, mas também na saúde e autonomia ao longo do envelhecimento.",
  },
  {
    icon: Activity,
    title: "Performance Desportiva",
    description:
      "Estratégias adaptadas ao teu treino e objetivos, com foco no desempenho, recuperação e otimização da composição corporal.",
  },
  {
    icon: Salad,
    title: "Reeducação Alimentar",
    description:
      "Para quem procura mais clareza nas escolhas alimentares e a construir maior autonomia e flexibilidade alimentar.",
  },
]

export function Services() {
  return (
    <section id="serviços" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center flex flex-col gap-4 mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-primary">
            Serviços
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight text-foreground text-balance">
            O que podemos trabalhar
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed text-pretty">
            O acompanhamento pode ser adaptado a diferentes objetivos e fases da vida.
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
