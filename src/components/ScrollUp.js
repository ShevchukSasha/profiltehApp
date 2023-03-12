import React from 'react'
import styled from 'styled-components'

const ScrollUp = () => {
    return (
        <Wrapper>
            <a href='#' className='scrollup'>
                <i className="uil uil-arrow-up scrollup__icon"></i>
            </a>
        </Wrapper>
    )
}
const Wrapper = styled.section`
  .scrollup {
    position: fixed;
    right: 2.5rem;
    bottom: 3rem;
    background-color: #ccc1c1;
    opacity: 0.8;
    padding: 0.3rem 0.5rem;
    border-radius: 0.4rem;
    z-index: 10;
    transition: .4s;
  }

  .scrollup__icon {
    font-size: 1.5rem;
    color: #000000;
  }

  .scrollup:hover {
    background-color: var(--clr-primary-1);
  }`
export default ScrollUp