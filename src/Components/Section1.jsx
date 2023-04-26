import style from '../CSS/Section1.module.css'

import mulher_ajuda from '../Images/Mulher_ajuda.png';
import seta_vertical from '../Images/Seta_vertical.png'

function Section1() {
    return (
        <section id={style.section1}>
            <article>
                <div id={style.section1_part1}>
                    <div id={style.main_initial}>
                        <h1>Venha <span className={style.text_color}>facilitar</span> e <span className={style.text_color}>otimizar</span> as suas finanças conosco</h1>
                        <p>Descubra melhores maneiras de agilizar as suas transações econômicas em todos os sentidos</p>
                        <button>Abra sua Conta</button>
                    </div>
                </div>
                <div id={style.section1_part2}>
                    <div id={style.central_ajuda}>
                        <div>
                            <img src={mulher_ajuda} alt='imagem de mulher para a central de ajuda' id={style.mulher_ajuda} />
                            <p>Central de Ajuda</p>
                            <img src={seta_vertical} alt='clique para mostrar as opções de ajuda da nossa central' id={style.seta_vertical} />
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default Section1