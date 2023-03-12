import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return <Wrapper>
        <div className='footer'>
            <div className='top'>
                <div>
                    <h1>ProfilTex</h1>
                    <p>&copy; {new Date().getFullYear()} All rights reserved</p>
                </div>
                <div>
                    <a href='./'>
                        <i className='fa-brands fa-facebook-square'></i>
                    </a>
                    <a href='./'>
                        <i className='fa-brands fa-instagram-square'></i>
                    </a>
                    <a href='./'>
                        <i className='fa-brands fa-behance-square'></i>
                    </a>
                    <a href='./'>
                        <i className='fa-brands fa-twitter-square'></i>
                    </a>
                </div>
            </div>
            <div className='bottom'>
                <div>
                    <h4>Контакти</h4>
                    <a href='/contact'>10001 Україна м. Житомир вул. І. Сльоти, 49</a>
                </div>
                <div>
                    <h4>Відділ продажу продукції:</h4>
                    <a href='/'>067-411-26-95</a>
                    <a href='/'>067-496-70-40</a>

                </div>
                <div>
                    <h4>Відділ логістики:</h4>
                    <a href='/'>067-215-90-50</a>
                    <a href='/'>098-312-66-65</a>
                </div>
                <div>
                    <h4>Довідка</h4>
                    <a href='/contact'>Підтримка</a>
                    <a href='/contact'>Вирішення проблем</a>
                </div>
            </div>
        </div>
    </Wrapper>
}

const Wrapper = styled.footer`
  .footer {
    padding: 4rem 6rem;
    background: var(--clr-black);
    color: var(--clr-primary-5);
  }

  .top {
    display: flex;
    align-items: center;
    text-align: start;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .top i {
    color: var(--clr-primary-5);
    font-size: 2rem;
    margin-left: 1rem;
  }

  .top i:hover {
    color: #166569;
  }

  .bottom {
    padding-top: 2rem;
    text-align: start;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .bottom div {
    display: flex;
    flex-direction: column;
  }

  .bottom h4 {
    font-size: 1.3rem;
    padding: 1rem 0 .8rem 0;
  }

  .bottom a {
    text-decoration: none;
    color: var(--clr-primary-5);
    padding-bottom: 0.4rem;
    font-size: 1.1rem;
  }


  @media screen and (max-width: 850px) {
    .footer {
      padding: 4rem 2rem;
    }

    .footer i {
      margin: 1rem 1rem 0 0;
    }

    .bottom div {
      width: 50%;
    }
  }
`

export default Footer
