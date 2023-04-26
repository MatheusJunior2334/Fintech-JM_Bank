import style from '../CSS/Section4.module.css';
import Mulher_2 from '../Images/Mulher_2.png';

function Section4() {
    return (
        <section id={style.section4}>
            <article>
                <div id={style.section4_part1}>
                   <img src={Mulher_2} alt='imagem de mulher negra com óculos apontando para as nossas redes sociais' />
                </div>
                <div id={style.section4_part2}>
                    <h1>Fique sempre <span className={style.text_color}>ligado</span> em nós</h1>
                    <p>Fique por dentro das nossas novidades nos seguindo pelas redes sociais</p>
                    <div className={style.blocos}>
                        <div className={style.blocos_blue}></div>
                        <div className={style.blocos_white}></div>
                    </div>
                    <div className={style.blocos}>
                        <div className={style.blocos_white}></div>
                        <div className={style.blocos_blue}></div>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default Section4