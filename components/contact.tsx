import { Button } from "@/components/ui/button"
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
} from "lucide-react"

const contactInfo = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "(11) 99999-9999",
    href: "https://wa.me/5511999999999",
  },
  {
    icon: Phone,
    label: "Telefone",
    value: "(11) 3456-7890",
    href: "tel:+551134567890",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "contato@dracamila.com.br",
    href: "mailto:contato@dracamila.com.br",
  },
  {
    icon: MapPin,
    label: "Endereco",
    value: "Av. Paulista, 1234 - Sala 56, São Paulo - SP",
    href: "https://maps.google.com/?q=Av.+Paulista+1234+São+Paulo",
  },
]

export function Contact() {
  return (
    <section id="contato" className="py-24 lg:py-32 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center flex flex-col gap-4 mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-primary">
            Contato
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight text-foreground text-balance">
            Vamos conversar?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed text-pretty">
            Entre em contato e agende sua consulta. Estou pronta para te ajudar
            a alcançar seus objetivos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact info + CTA */}
          <div className="flex flex-col gap-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-start gap-4 bg-card rounded-2xl border border-border/50 p-6 transition-all duration-300 hover:shadow-md hover:border-primary/20"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/15">
                    <item.icon className="size-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="text-sm font-medium text-foreground">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <Button
              asChild
              size="lg"
              className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-10 h-14 text-base shadow-lg shadow-primary/20 w-fit mx-auto lg:mx-0"
            >
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="size-5" />
                Agendar pelo WhatsApp
              </a>
            </Button>
          </div>

          {/* Map */}
          <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-sm min-h-[320px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197554868753!2d-46.65522382414287!3d-23.561414163269963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c7dbdbd06b%3A0x727530c498a3f8fe!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 320 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localizacao do consultorio"
              className="absolute inset-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
