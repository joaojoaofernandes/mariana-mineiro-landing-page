import { UserCheck, ClipboardList, RefreshCw, Target, HeartHandshake } from "lucide-react"

const differentials = [
  {
    icon: UserCheck,
    title: "Atendimento Personalizado",
    description: "Cada consulta e unica, focada nas suas necessidades e objetivos.",
  },
  {
    icon: ClipboardList,
    title: "Plano Alimentar Individualizado",
    description: "Cardapios criados especialmente para voce e sua rotina.",
  },
  {
    icon: RefreshCw,
    title: "Acompanhamento Continuo",
    description: "Suporte constante para ajustes e evolucao ao longo do tempo.",
  },
  {
    icon: Target,
    title: "Estrategias Realistas",
    description: "Metas alcançaveis e sustentaveis, sem radicalismos.",
  },
  {
    icon: HeartHandshake,
    title: "Suporte Proximo",
    description: "Estou sempre disponivel para tirar duvidas e te motivar.",
  },
]

export function Differentials() {
  return (
    <section id="diferenciais" className="py-24 lg:py-32 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center flex flex-col gap-4 mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-primary">
            Diferenciais
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight text-foreground text-balance">
            Por que me escolher
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {differentials.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center gap-4"
            >
              <div className="flex size-16 items-center justify-center rounded-full bg-primary/10">
                <item.icon className="size-7 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-lg text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
