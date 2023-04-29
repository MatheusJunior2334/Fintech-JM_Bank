import style from '../CSS/Section4.module.css';
import Mulher_2 from '../Images/Mulher_2.png';
import Mulher_2_responsivo from '../Images/Mulher_2_responsivo.png'
import instagram_section4 from '../Images/Instagram_fale_conosco.png';
import facebook_section4 from '../Images/Facebook_fale_conosco.png';
import github_section4 from '../Images/GitHub_fale_conosco.png';
import linkedin_section4 from '../Images/Linkedin_fale_conosco.png';

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
                    <div id={style.section4_img_responsivo}>
                        <img src={Mulher_2_responsivo} alt='Mulher negra de blusinha rosa apontando para baixo' />
                    </div>
                    <div className={style.blocos}>
                        <div className={style.blocos_blue}>
                            <div>
                                <img src={instagram_section4} alt='clique para acessar o nosso instagram' />
                                <label>Veja o nosso histórico pelo Instagram</label>
                            </div>
                        </div>
                        <div className={style.blocos_white}>
                            <div>
                                <img src={facebook_section4} alt='clique para acessar o nosso facebook' />
                                <label>Acompanhe nossas novidades pelo <span className={style.text_color}>Facebook</span></label>
                            </div>
                        </div>
                    </div>
                    <div className={style.blocos}>
                        <div className={style.blocos_white}>
                            <div>
                                <img src={github_section4} alt='clique para acessar o nosso github' />
                                <label>Acesse o nosso repositório no <span className={style.text_color}>GitHub</span></label>
                            </div>
                        </div>
                        <div className={style.blocos_blue}>
                            <div>
                                <img src={linkedin_section4} alt='clique para acessar o nosso linkedin' />
                                <label>Veja as nossas atividades pelo Linkedin</label>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default Section4