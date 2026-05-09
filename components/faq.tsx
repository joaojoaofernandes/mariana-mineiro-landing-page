"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "A consulta pode ser online?",
    answer:
      "Sim! Ofereco atendimento online com a mesma qualidade do presencial. As consultas sao realizadas por videochamada em uma plataforma segura, e voce recebe todo o material por e-mail.",
  },
  {
    question: "O plano alimentar e restritivo?",
    answer:
      "De forma alguma. Minha abordagem e baseada em equilibrio e prazer. O plano e personalizado para sua rotina, preferencias e objetivos, sem cortar alimentos ou criar restricoes desnecessarias.",
  },
  {
    question: "Voce aceita convenio?",
    answer:
      "Atualmente trabalho com atendimento particular. Porem, emito recibo para que voce possa solicitar o reembolso ao seu plano de saude, caso ele ofereça essa possibilidade.",
  },
  {
    question: "Quanto tempo dura a consulta?",
    answer:
      "A primeira consulta dura em media 60 minutos, para que eu possa conhecer seu historico completo. As consultas de retorno duram cerca de 30 a 40 minutos.",
  },
  {
    question: "Preciso fazer exames antes da consulta?",
    answer:
      "Nao e obrigatorio, mas e recomendado trazer exames recentes caso os tenha. Se necessario, posso solicitar exames complementares durante o acompanhamento.",
  },
  {
    question: "Com que frequencia sao os retornos?",
    answer:
      "Geralmente, os retornos sao agendados a cada 15 a 30 dias no inicio do tratamento, podendo ser espaçados conforme sua evolucao e necessidades.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center flex flex-col gap-4 mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-primary">
            Perguntas Frequentes
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight text-foreground text-balance">
            Tire suas duvidas
          </h2>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-border/60 py-1"
            >
              <AccordionTrigger className="text-base font-medium text-foreground hover:text-primary hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
