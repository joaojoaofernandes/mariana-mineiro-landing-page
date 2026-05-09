import { Button } from "@/components/ui/button"
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
} from "lucide-react"

const contactInfo: {
  icon: typeof Phone
  label: string
  value: string
  href: string
  fullWidth?: boolean
}[] = [
  {
    icon: MapPin,
    label: "Consulta Presencial",
    value: "Clinica Sorridente",
    href: "https://maps.google.com/?q=Cl%C3%ADnica+Dent%C3%A1ria+Sorridente",
  },
  {
    icon: Phone,
    label: "Telemóvel",
    value: "+351 964 232 405",
    href: "tel:+351964232405",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "marianamineiro.nutricionista@gmail.com",
    href: "mailto:marianamineiro.nutricionista@gmail.com",
    fullWidth: true,
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
                  className={`group flex items-start gap-4 bg-card rounded-2xl border border-border/50 p-6 transition-all duration-300 hover:shadow-md hover:border-primary/20 ${item.fullWidth ? "sm:col-span-2" : ""}`}
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
                  href="https://wa.me/351964232405"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                <MessageCircle className="size-5" />
                Mandar Mensagem WhatsApp
              </a>
            </Button>
          </div>

          {/* Map */}
          <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-sm min-h-[320px]">
            <iframe
              src="https://www.google.com/maps/place/Cl%C3%ADnica+Dent%C3%A1ria+Sorridente/@39.9166564,-8.6330732,17z/data=!3m1!4b1!4m6!3m5!1s0xd226726312b4627:0x5a3fa3e81dd8ac9a!8m2!3d39.9166524!4d-8.6282023!16s%2Fg%2F11j_w058nb?hl=pt-BR&entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D"
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
