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
                src="/images/photo.jpg"
                alt="Dra. Camila Almeida em seu consultorio"
                width={600}
                height={700}
                className="w-full h-auto object-cover aspect-[4/5]"
              />
            </div>
            {/* Floating credential badge */}
            <div className="absolute -bottom-6 -right-4 md:right-8 bg-card rounded-2xl shadow-lg px-6 py-4 border border-border/50">
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Cédula</p>
              <p className="font-serif text-lg text-foreground">CP 6152N</p>
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
                <span className="text-primary">Nutricionista Mariana Mineiro</span>
              </h2>
            </div>

            <p className="text-muted-foreground leading-relaxed text-lg text-pretty">
              Acredito que não existe uma alimentação perfeita, existe a alimentação que melhor se adapta a cada pessoa.
              Por isso, o acompanhamento nutricional começa por conhecer a tua realidade: os teus objetivos, hábitos, preferências, rotina e dificuldades. A partir daí, construímos, em conjunto, estratégias que possas aplicar.
              Quero ajudar-te a perceber como fazer melhores escolhas, como adaptar a alimentação a diferentes situações e como tornar essas mudanças parte do teu dia a dia.
            </p>

            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <GraduationCap className="size-5 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-medium text-foreground">Formacão Académica</p>
                  <p className="text-sm text-muted-foreground">
                    Licenciada em Ciências da Nutrição na Faculdade de Ciências da Nutrição da Universidade do Porto.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Award className="size-5 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-medium text-foreground">Percurso Profissional</p>
                  <p className="text-sm text-muted-foreground">
                    Nutricionista em Nutrição Clínica e Desportiva em contexto de ginásio, box de crossfit, clínica privada e online.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Award className="size-5 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-medium text-foreground">Formações</p>
                  <p className="text-sm text-muted-foreground">
                    Antropometrista Isak Nível 1
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Nutrição Desportiva
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Gestão de peso
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
