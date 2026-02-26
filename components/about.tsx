import Image from "next/image"
import { GraduationCap, Award, Heart } from "lucide-react"

export function About() {
  return (
    <section id="sobre" className="py-24 lg:py-32 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/about-nutritionist.jpg"
                alt="Dra. Camila Almeida em seu consultorio"
                width={600}
                height={700}
                className="w-full h-auto object-cover aspect-[4/5]"
              />
            </div>
            {/* Floating credential badge */}
            <div className="absolute -bottom-6 -right-4 md:right-8 bg-card rounded-2xl shadow-lg px-6 py-4 border border-border/50">
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Registro</p>
              <p className="font-serif text-lg text-foreground">CRN-3 12345</p>
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <p className="text-sm font-medium tracking-widest uppercase text-primary">
                Sobre Mim
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight text-foreground text-balance">
                Olá, eu sou a{" "}
                <span className="text-primary">Dra. Camila Almeida</span>
              </h2>
            </div>

            <p className="text-muted-foreground leading-relaxed text-lg text-pretty">
              Sou apaixonada por ajudar pessoas a encontrarem o equilibrio na
              alimentacao. Minha missão é mostrar que comer bem pode ser simples,
              prazeroso e transformador. Cada paciente é unico, e por isso cada
              plano é criado com carinho e baseado em ciencia.
            </p>

            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <GraduationCap className="size-5 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-medium text-foreground">Formacao Academica</p>
                  <p className="text-sm text-muted-foreground">
                    Graduada em Nutricao pela USP, com especializacao em Nutricao
                    Clinica e Funcional pela UNIFESP.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Award className="size-5 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-medium text-foreground">Especializacoes</p>
                  <p className="text-sm text-muted-foreground">
                    Nutricao Funcional, Nutricao Esportiva, Fitoterapia Aplicada
                    e Comportamento Alimentar.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Heart className="size-5 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-medium text-foreground">Minha Abordagem</p>
                  <p className="text-sm text-muted-foreground">
                    Acredito em uma nutricao sem radicalismos, focada em
                    habitos sustentaveis e no prazer de comer bem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
