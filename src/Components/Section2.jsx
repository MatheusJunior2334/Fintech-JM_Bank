import style from '../CSS/Section2.module.css';

import Homem_img from '../Images/Homem_img.png';
import Cartao_anuidade from '../Images/Cartão_anuidade.png';
import Transacao_segura from '../Images/Transação_segura.png';
import Renegociar_divida from '../Images/Renegociar_dívidas.png';
import Celular_cartao from '../Images/Celular_Cartão.png';
import Celular_cartao_responsivo from '../Images/Celular_Cartão_responsivo.png';

function Section2() {
    return (
        <section id={style.section2}>
            <article>
                <div id={style.section2_part1}>
                    <img src={Homem_img} alt='Imagem de um homem branco com um celular nas mãos' />
                </div>
                <div id={style.section2_part2}>
                    <h1>O banco ideal para você está aqui!</h1>
                    <p>Dê uma olhada nos nossos serviços pensados exclusivamente para você</p>
                    <div id={style.blocos_organizacao}>
                        <div className={style.blocos}>
                            <img src={Cartao_anuidade} alt="Cartão sem anuidade" />
                            <p>Cartão sem anuidade</p>
                        </div>
                        <div className={style.blocos} id={style.segura} >
                            <img src={Transacao_segura} alt="Transações seguras" />
                            <p>Transações 100% seguras</p>
                        </div>
                        <div className={style.blocos}>
                            <img src={Renegociar_divida} alt="Possibilidade de renegociar dívidas" />
                            <p>Acordo para renegociação de dívida</p>
                        </div>
                    </div>
                </div>
            </article>
            <article id={style.section2_article2}>
                <div id={style.section2_part3}>
                    <div>
                        <h1>Peça o seu cartão e abra a sua conta agora mesmo</h1>
                        <p>Faça parte da nossa comunidade, peça o seu cartão e desfrute dos nossos serviços diferenciados</p>
                        <button>Pedir meu cartão</button>
                    </div>
                </div>
                <div id={style.section2_part4}>
                    <img src={Celular_cartao} alt="Imagem mostrando o nosso app e cartão" id={style.cartao_normal} />
                    <img src={Celular_cartao_responsivo} alt="Imagem mostrando o nosso app e cartão" id={style.cartao_responsivo} />
                </div>
            </article>
        </section>
    )
}

export default Section2