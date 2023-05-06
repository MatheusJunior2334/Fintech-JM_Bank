import style from '../CSS/Section3.module.css';

function Section3() {
    return (
        <section id={style.section3}>
            <article>
                <div id={style.section3_part1}>
                    <div>
                        <h1>Faça a <span className={style.text_color}>viagem</span> dos seus sonhos <span className={style.text_color}>conosco</span></h1>
                        <p>Acumule milhas e desbloqueie a possibilidade de conhecer outros países. Inicie essa aventura criando a sua conta gratuitamente</p>
                        <button>Saiba Mais</button>
                    </div>
                </div>
                <div id={style.section3_part2}>
                    <p>Instagram: Mi Alves & Ruby Granger</p>
                </div>
            </article>
        </section>
    )
}

export default Section3