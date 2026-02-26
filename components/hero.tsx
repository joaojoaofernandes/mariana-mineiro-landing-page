import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-secondary blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text content */}
          <div className="flex flex-col gap-8 text-center lg:text-left order-2 lg:order-1">
            <div className="flex flex-col gap-4">
              <p className="text-sm font-medium tracking-widest uppercase text-primary">
                Nutricionista Clinica e Funcional
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] tracking-tight text-foreground text-balance">
                Cuidando da sua alimentacao com{" "}
                <span className="text-primary italic">equilibrio</span> e{" "}
                <span className="text-primary italic">leveza</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0 text-pretty">
                Uma abordagem acolhedora e personalizada para transformar sua
                relacao com a comida e alcançar o bem-estar que voce merece.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-8 h-12 text-base shadow-lg shadow-primary/20"
              >
                <a href="#contato">Agendar Consulta</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-primary/30 text-primary hover:bg-primary/5 px-8 h-12 text-base"
              >
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="size-5" />
                  Falar no WhatsApp
                </a>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-[2rem] border border-primary/10 rotate-3" />
              <div className="absolute -inset-8 rounded-[2.5rem] border border-primary/5 -rotate-2" />
              <div className="relative rounded-[1.5rem] overflow-hidden shadow-2xl shadow-primary/10">
                <Image
                  src="/images/hero-nutritionist.jpg"
                  alt="Dra. Camila Almeida, Nutricionista"
                  width={600}
                  height={750}
                  className="w-full h-auto object-cover aspect-[4/5]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
