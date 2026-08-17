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
      "Sim! As consultas online são realizadas por videochamada. Após a consulta, recebes todo o material por e-mail.\n" +
        "As consultas presenciais são realizadas na Clínica Dentária Sorridente, em Pombal.\n",
  },
  {
    question: "Em que consiste a avaliação da composição corporal?",
    answer:
      "Nas consultas presenciais, utilizamos uma balança de bioimpedância para avaliar a massa gorda e a massa isenta de gordura. Complementamos com a medição de perímetros corporais e, quando fizer sentido, com a avaliação de pregas cutâneas. Nas consultas online, utilizamos os valores reportados, existindo um guia para as medições em casa.",
  },
  {
    question: "O plano alimentar é restritivo??",
    answer:
      "Não. A abordagem é flexível e personalizada, sem restrições desnecessárias, com foco na construção de hábitos que consigas manter.",
  },
  {
    question: "Quanto tempo dura a consulta?",
    answer:
      "A primeira consulta dura cerca de 60 minutos, permitindo conhecer a tua realidade, objetivos e necessidades e definir a estratégia a seguir.",
  },
  {
    question: "A intervenção nutricional é à base de suplementos?",
    answer:
      "Não. A alimentação é sempre a base do acompanhamento. Quando fizer sentido, a suplementação pode ser considerada, mas será sempre avaliada de forma individual e ao longo do acompanhamento.",
  },
  {
    question: "Com que frequência são as consultas?",
    answer:
      "Idealmente, o acompanhamento começa com consultas mensais. A frequência pode ser ajustada de acordo com a tua evolução, podendo os intervalos ser mais espaçados ao longo do processo.",
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
            Tira as tuas dúvidas
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
