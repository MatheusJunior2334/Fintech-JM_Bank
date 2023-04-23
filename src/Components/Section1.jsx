import style from './Section1.module.css'

function Section1() {
    return (
        <section id={style.section1}>
            <article>
                <div id={style.section1_part1}>
                    <div id={style.main_text}>
                        <h1>Venha <span className={style.text_color}>facilitar</span> e <span className={style.text_color}>otimizar</span> as suas finanças conosco</h1>
                        <p>Descubra melhores maneiras de agilizar as suas transações econômicas em todos os sentidos</p>
                    </div>
                    <div id={style.main_button}>
                        <button>Abra sua Conta</button>
                    </div>
                </div>
                <div id={style.section1_part2}></div>
            </article>
        </section>
    )
}

export default Section1