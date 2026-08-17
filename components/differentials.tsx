import { UserCheck, ClipboardList, RefreshCw, Target, HeartHandshake } from "lucide-react"

const differentials = [
  {
    icon: UserCheck,
    title: "Atendimento Personalizado",
    description: "Cada consulta e unica, focada nas suas necessidades e objetivos.",
  },
  {
    icon: ClipboardList,
    title: "Individual",
    description: "Cada pessoa tem objetivos, necessidades e uma rotina diferente. A alimentação deve adaptar-se a ti e não o contrário.",
  },
  {
    icon: RefreshCw,
    title: "Simples",
    description: "Não precisas de complicar a alimentação para obter resultados. Procuramos estratégias práticas e fáceis de aplicar.",
  },
  {
    icon: Target,
    title: "Flexível",
    description: "Nem todos os dias são iguais. Por isso, a alimentação deve permitir adaptações e diferentes escolhas.",
  },
  {
    icon: HeartHandshake,
    title: "Sustentável",
    description: "O objetivo não é criar mudanças que funcionem apenas durante algumas semanas, mas sim construir hábitos que consigas manter a longo prazo.",
  },
]

export function Differentials() {
  return (
    <section id="compromisso" className="py-24 lg:py-32 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center flex flex-col gap-4 mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-primary">
            Compromisso
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight text-foreground text-balance">
            Porque me escolher
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
