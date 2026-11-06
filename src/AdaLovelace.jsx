
import AdaPintura from "./img/adaPintura.png";
import AdaCrianca from "./img/adaCrianca.png";
import AdaTabela from "./img/adaTabela.png";

function AdaLovelace() {
  return (
    <div className="min-h-screen bg-[#8a71c9]">

      {/* TÍTULO */}
      <header className="py-8 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-[#fff]">
          Ada Lovelace
        </h1>
      </header>

      {/* MENU */}
      <nav className="bg-[#ff6cb5] px-4 py-4">
        <ul className="flex flex-wrap justify-center gap-6 md:gap-10">
            <li>
                <a
                    href="#infancia"
                    className="text-white hover:text-green-400 transition m-20">
                    Infância
                </a>
            </li>

            <li>
             <a
              href="#juventude"
              className="text-white hover:text-red-400 transition">
              Juventude
            </a>
          </li>

          <li>
            <a
              href="#vida-adulta"
              className="text-white hover:text-yellow-400 transition m-20">
                Vida Adulta
            </a>
          </li>
        </ul>
      </nav>

         {/* CONTEÚDO PRINCIPAL */}
        <main className="max-w-5xl mx-auto px-5 py-10">

            {/* INTRODUÇÃO */}
            <section className="mb-12">
            <p className="text-base md:text-lg leading-relaxed md-6  text-[#fff]">
                Augusta Ada King, condessa de Lovelace, nasceu em Londres
                em 1815. Mais conhecida como Ada Lovelace, foi a primeira
                pessoa a escrever um algoritmo para ser processado por uma
                máquina na história da computação.
            </p>
            
            <img src={AdaPintura}
               alt="pintura colorida de Ada Lovelace"
               className="w-full max-w-md mx-auto rounded-lg shadow-md"/>
            </section>

              {/* INFÂNCIA */}
        <section id="infancia" className="mb-12 scroll-mt-6">

          <h2 className="text-2xl md:text-3xl font-bold text-[#04ff9f] mb-6">
            Infância
          </h2>

          
          <p className="text-base md:text-lg leading-relaxed mb-4 text-[#fff]">
            Seu pai era o poeta romântico Lord Byron, conhecido por
            seus exageros e comportamentos incomuns para a época.
            Sua mãe era a rica e culta Annabella Milbanke, apaixonada
            por matemática e pouco paciente com as maluquices do marido.
          </p>

          <p className="text-base md:text-lg leading-relaxed mb-4 text-[#fff]">
            Lord Byron bebia demais, o que resultou no divórcio quando
            Ada tinha apenas cinco semanas de vida. Annabella, mãe solo,
            preocupava-se em garantir que Ada não ficasse parecida com
            o pai. Investiu em sua educação rigorosa, contratando os
            melhores professores.
         </p>

          <p className="text-base md:text-lg leading-relaxed mb-6 text-[#fff] ">
            Ada era fascinada por matemática e poesia. Aos doze anos,
            encantou-se pela engenharia mecânica e escreveu um livro
            chamado Flyology (ou Voologia), com desenhos de um plano
            para a construção de uma máquina de voar.
          </p>
         
           <img
            src={AdaCrianca}
            alt="Pintura de Ada criança segurando um desenho"
            className="w-full max-w-md mx-auto rounded-lg shadow-md"/>
        
        </section>

          
        {/* JUVENTUDE */}
        <section id="juventude" className="mb-12 scroll-mt-6">

          <h2 className="text-2xl md:text-3xl font-bold text-[#FF9E9E] mb-6">
            Juventude
          </h2>

           <p className="text-base md:text-lg leading-relaxed mb-4  text-[#fff]">
            Aos 17 anos, Ada foi apresentada à corte e passou a ser
            convidada para festas na cidade. Seu jeito inteligente e
            rápido atraiu muitos admiradores, mas ela se interessou
            pelo matemático Charles Babbage, que lhe contou sobre
            sua invenção: a máquina diferencial, capaz de realizar
            grandes cálculos.
          </p>
          
            <p className="text-base md:text-lg leading-relaxed  text-[#fff]">
            Charles gostou da jovem, pois ela era uma das poucas
            pessoas que se interessavam e entendiam suas invenções.
            Ao conhecer a máquina diferencial, Ada percebeu muitas
            possibilidades que nem mesmo Charles havia imaginado.
          </p>

         </section>

          {/* VIDA ADULTA */}
        <section id="vida-adulta" className="mb-12 scroll-mt-6">

          <h2 className="text-2xl md:text-3xl font-bold text-[#ffe36d] mb-6">
            Vida adulta
          </h2>

          <p className="text-base md:text-lg leading-relaxed mb-4  text-[#fff]">
            Charles era viúvo e lutava por investimentos para seus
            projetos. Ada se casou e teve três filhos. Na época,
            isso significava que deveria abandonar os estudos e
            dedicar-se à família. Mesmo assim, continuava trocando
            cartas com Charles e resolvendo problemas matemáticos
            à noite, após as crianças dormirem.
          </p>

          <p className="text-base md:text-lg leading-relaxed mb-4  text-[#fff]">
            Tempos depois, Charles criou o Engenho Analítico,
            uma máquina capaz de analisar dados e guardar
            informações na memória. Para divulgar sua invenção,
            precisava traduzir artigos em francês, e Ada era
            a pessoa perfeita para realizar esse trabalho.
          </p>

          <p className="text-base md:text-lg leading-relaxed mb-4  text-[#fff]">
            Enquanto traduzia o conteúdo, Ada fazia anotações
            próprias e imaginava inúmeras possibilidades para
            a máquina. Suas anotações ficaram maiores do que
            o próprio artigo.
          </p>

          <p className="text-base md:text-lg leading-relaxed mb-6  text-[#fff]">
            Charles queria que a máquina resolvesse problemas
            matemáticos. Ada pensava em algo muito maior:
            os números poderiam representar letras e notas
            musicais. Ela escreveu instruções detalhadas
            explicando como o Engenho Analítico deveria
            processar cálculos. Assim, Ada criou o primeiro
            programa de computador da história, muito antes
            da existência dos computadores modernos.
          </p>

          <img
            src={AdaTabela}
            alt="Pintura de Ada jovem ao lado de uma tabela com algoritmos"
            className="w-full max-w-md mx-auto rounded-lg shadow-md"/>

        </section>

      </main>
        
          {/* RODAPÉ */}
      <footer className="bg-[#ff6cb5] text-white text-center py-6 px-4">
        <p className="text-sm">
          Ada Lovelace — Mulher que fez história na tecnologia
        </p>
      </footer>
       
        
       </div>  
  );
}  

export default AdaLovelace
