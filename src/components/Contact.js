import React from 'react'
import styled from 'styled-components'
import CarouselBox from "./CarouselBox";

const Contact = () => {
    return (
        <main>
            <Wrapper className='page section section-center'>
                <CarouselBox />
                <article>
                    <div className='title'>
                        <h2>Про компанію</h2>
                        <div className='underline'></div>
                    </div>
                    <p>
                        Ми реалізуємо власну продукцію майже по всій території країни за привабливою ціною.Переваги використання металочерепиці та профнастилу очевидні: широкий спектр використання, простота у монтажі та стійкість до впливу зовнішніх природніх факторів.Використання нашої продукції доцільне як під час дрібних ремонтів, так і масштабних будівництв.
                        Застосування сучасних технологій і досвід високо кваліфікованих спеціалістів забезпечують найвищу якість виробів.
                        Також наша компанія займається оптовим продажем тонколистового металу на всій території України. Виробнича компанія “Профільтех” має досвід продажу продукції власного виробництва на експорт.
                        Співпрацюючи з нами, Ви отримуєте можливість не лише придбати надійні та довговічні матеріали за доступною ціною, а й зробити комфортне та вигідне вкладення власних коштів.
                        Ми гарантуємо якість, доступні ціни та індивідуцальний підхід!
                    </p>
                </article>
            </Wrapper>
        </main>
    )
}
const Wrapper = styled.section`
  padding: 7rem 0;
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`

export default Contact
