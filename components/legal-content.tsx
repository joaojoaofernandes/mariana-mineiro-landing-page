function H(props: { children: React.ReactNode }) {
  return (
    <h3 className="font-serif text-base text-foreground mt-6 first:mt-0">
      {props.children}
    </h3>
  )
}

function P(props: { children: React.ReactNode }) {
  return (
    <p className="text-sm text-muted-foreground leading-relaxed mt-2">
      {props.children}
    </p>
  )
}

function OL(props: { items: React.ReactNode[] }) {
  return (
    <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-muted-foreground leading-relaxed">
      {props.items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ol>
  )
}

function UL(props: { items: React.ReactNode[] }) {
  return (
    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground leading-relaxed">
      {props.items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  )
}

function A(props: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      className="underline underline-offset-2 hover:text-primary transition-colors"
    >
      {props.children}
    </a>
  )
}

export function TermsContent() {
  return (
    <div>
      <H>1. Termos</H>
      <P>
        Ao acessar ao site <A href="https://marianamineironutri.pt">Mariana Mineiro Nutri</A>, concorda em
        cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável
        pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos,
        está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis
        de direitos autorais e marcas comerciais aplicáveis.
      </P>

      <H>2. Uso de Licença</H>
      <P>
        É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no
        site Mariana Mineiro Nutri, apenas para visualização transitória pessoal e não comercial. Esta é a
        concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:
      </P>
      <OL
        items={[
          'modificar ou copiar os materiais;',
          'usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);',
          'tentar descompilar ou fazer engenharia reversa de qualquer software contido no site Mariana Mineiro Nutri;',
          'remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou',
          "transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.",
        ]}
      />
      <P>
        Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser
        rescindida por Mariana Mineiro Nutri a qualquer momento. Ao encerrar a visualização desses materiais ou
        após o término desta licença, você deve apagar todos os materiais baixados em sua posse, seja em
        formato eletrónico ou impresso.
      </P>

      <H>3. Isenção de responsabilidade</H>
      <OL
        items={[
          "Os materiais no site da Mariana Mineiro Nutri são fornecidos 'como estão'. Mariana Mineiro Nutri não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.",
          'Além disso, o Mariana Mineiro Nutri não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a esses materiais ou em sites vinculados a este site.',
        ]}
      />

      <H>4. Limitações</H>
      <P>
        Em nenhum caso o Mariana Mineiro Nutri ou seus fornecedores serão responsáveis por quaisquer danos
        (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios)
        decorrentes do uso ou da incapacidade de usar os materiais em Mariana Mineiro Nutri, mesmo que Mariana
        Mineiro Nutri ou um representante autorizado da Mariana Mineiro Nutri tenha sido notificado oralmente ou
        por escrito da possibilidade de tais danos. Como algumas jurisdições não permitem limitações em
        garantias implícitas, ou limitações de responsabilidade por danos consequentes ou incidentais, essas
        limitações podem não se aplicar a você.
      </P>

      <H>5. Precisão dos materiais</H>
      <P>
        Os materiais exibidos no site da Mariana Mineiro Nutri podem incluir erros técnicos, tipográficos ou
        fotográficos. Mariana Mineiro Nutri não garante que qualquer material em seu site seja preciso, completo
        ou atual. Mariana Mineiro Nutri pode fazer alterações nos materiais contidos em seu site a qualquer
        momento, sem aviso prévio. No entanto, Mariana Mineiro Nutri não se compromete a atualizar os materiais.
      </P>

      <H>6. Links</H>
      <P>
        O Mariana Mineiro Nutri não analisou todos os sites vinculados ao seu site e não é responsável pelo
        conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por Mariana Mineiro
        Nutri do site. O uso de qualquer site vinculado é por conta e risco do usuário.
      </P>

      <H>Modificações</H>
      <P>
        O Mariana Mineiro Nutri pode revisar estes termos de serviço do site a qualquer momento, sem aviso
        prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.
      </P>

      <H>Lei aplicável</H>
      <P>
        Estes termos e condições são regidos e interpretados de acordo com as leis do Mariana Mineiro Nutri e
        você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.
      </P>
    </div>
  )
}

export function PrivacyContent() {
  return (
    <div>
      <P>
        A sua privacidade é importante para nós. É política do Mariana Mineiro Nutri respeitar a sua privacidade
        em relação a qualquer informação sua que possamos coletar no site{' '}
        <A href="https://marianamineironutri.pt">Mariana Mineiro Nutri</A>, e outros sites que possuímos e
        operamos.
      </P>
      <P>
        Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço.
        Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que
        estamos coletando e como será usado.
      </P>
      <P>
        Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado.
        Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e
        roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
      </P>
      <P>
        Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando
        exigido por lei.
      </P>
      <P>
        O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não
        temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas
        respectivas <A href="https://politicaprivacidade.com/">políticas de privacidade</A>.
      </P>
      <P>
        Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não
        possamos fornecer alguns dos serviços desejados.
      </P>
      <P>
        O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de
        privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário
        e informações pessoais, entre em contacto connosco.
      </P>

      <H>Compromisso do Usuário</H>
      <P>
        O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o Mariana Mineiro Nutri
        oferece no site e com caráter enunciativo, mas não limitativo:
      </P>
      <UL
        items={[
          'Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;',
          'Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, jogos de sorte ou azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;',
          'Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do Mariana Mineiro Nutri, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados.',
        ]}
      />

      <H>Mais informações</H>
      <P>
        Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem
        certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos
        recursos que você usa em nosso site.
      </P>
      <P>Esta política é efetiva a partir de 19 de agosto de 2026, 09:58.</P>
    </div>
  )
}
