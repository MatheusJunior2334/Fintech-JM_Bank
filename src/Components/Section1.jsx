import style from './Section1.module.css'

function Section1() {
    return (
        <section id={style.section1}>
            <article>
                <div id={style.section1_part1}></div>
                <div id={style.section1_part2}></div>
            </article>
        </section>
    )
}

export default Section1