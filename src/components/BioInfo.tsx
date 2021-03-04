import styles from '../styles/components/BioInfo.module.css';

export function BioInfo() {
   return (
      <div className={styles.bioInfoContainer}>
         <div>
            <h2>Sobre</h2>

            <p>Apaixonado por tecnologia em geral, procuro novos desafios para aprender e aprimorar meus conhecimentos.</p>
            <p>Atualmente cursando Análise e Desenvolvimento de Sistemas na Universidade Anhembi Morumbi, estou a procura do meu primeiro estágio, onde pretendo melhorar minhas habilidades técnicas e aprender como uma equipe de desenvolvimento trabalha.</p>
            <p>Futuramente quero entrar no mercado de desenvolvimento de jogos.</p>
         </div>

         <div>
            <h2>Competências</h2>

            <ul>
               <li>Criação e Solução de Sistemas.</li>
               <li>Desenvolvimento Front End com HTML5/CSS3, REACT, NEXT.JS entre outras tecnologias.</li>
               <li>Conhecimento intermediário em ferramentas de design. (Figma, Photoshop, Lightroom, Premiere, Corel Draw)</li>
               <li>Fluência em Inglês</li>
            </ul>
         </div>
      </div>
   )
}