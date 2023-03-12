import React, {Component} from "react";
import Carousel from 'react-bootstrap/Carousel'
import about_1 from "../images/about_1.jpg";
import about_2 from "../images/about-2.jpg";
import about_3 from "../images/about-3.jpg";
import about_4 from "../images/about-4.jpg";
import about_5 from "../images/about-5.jpg";
import about_6 from "../images/about-6.jpg";
import about_7 from "../images/about-7.jpg";
import about_8 from "../images/about-8.jpg";
import about_9 from "../images/about-9.jpg";
import about_10 from "../images/about-10.jpg";
import about_11 from "../images/about-11.jpg";
import about_12 from "../images/about-12.jpg";
import about_13 from "../images/about-13.jpg";
import about_14 from "../images/about-14.jpg";
import about_15 from "../images/about-15.jpg";
import styled from "styled-components";

export default class CarouselBox extends Component {
    render() {
        return (
            <Wrapper>
            <Carousel>
                <Carousel.Item>
                    <img className='d-block w-100'
                         src={about_1}
                         alt='About-1'
                    />
                    <Carousel.Caption>
                        <h3>portfolio</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='d-block w-100'
                         src={about_2}
                         alt='About-2'
                    />
                    <Carousel.Caption>
                        <h3>portfolio</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='d-block w-100'
                         src={about_3}
                         alt='About-3'
                    />
                    <Carousel.Caption>
                        <h3>portfolio</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='d-block w-100'
                         src={about_4}
                         alt='About-4'
                    />
                    <Carousel.Caption>
                        <h3>portfolio</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='d-block w-100'
                         src={about_5}
                         alt='About-5'
                    />
                    <Carousel.Caption>
                        <h3>portfolio</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='d-block w-100'
                         src={about_6}
                         alt='About-6'
                    />
                    <Carousel.Caption>
                        <h3>portfolio</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='d-block w-100'
                         src={about_7}
                         alt='About-7'
                    />
                    <Carousel.Caption>
                        <h3>portfolio</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='d-block w-100'
                         src={about_8}
                         alt='About-8'
                    />
                    <Carousel.Caption>
                        <h3>portfolio</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='d-block w-100'
                         src={about_9}
                         alt='About-9'
                    />
                    <Carousel.Caption>
                        <h3>portfolio</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='d-block w-100'
                         src={about_10}
                         alt='About-10'
                    />
                    <Carousel.Caption>
                        <h3>portfolio</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='d-block w-100'
                         src={about_11}
                         alt='About-11'
                    />
                    <Carousel.Caption>
                        <h3>portfolio</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='d-block w-100'
                         src={about_12}
                         alt='About-12'
                    />
                    <Carousel.Caption>
                        <h3>portfolio</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='d-block w-100'
                         src={about_13}
                         alt='About-13'
                    />
                    <Carousel.Caption>
                        <h3>portfolio</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='d-block w-100'
                         src={about_14}
                         alt='About-14'
                    />
                    <Carousel.Caption>
                        <h3>portfolio</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='d-block w-100'
                         src={about_15}
                         alt='About-15'
                    />
                    <Carousel.Caption>
                        <h3>portfolio</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </Wrapper>
        )
    }
}
const Wrapper = styled.section`
  padding: 5rem 0;
`