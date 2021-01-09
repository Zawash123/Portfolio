import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'
import {graphql, StaticQuery} from 'gatsby'
import styled, {keyframes} from 'styled-components'
import AnimationContainer from 'components/animation-container'


class ContactPersonal extends React.Component {


    render() {

        const Section = styled.section`
            position: relative;
            overflow: hidden;
            background-color: #000;
            padding: 100px 0;
        `



        const ContactCol = styled(Col)`
            min-height: 600px;
            max-height: 600px;
            padding: 0;
            display: flex;
            align-items: right;
        `

        const gradientAnimation = keyframes`
            0% {
                background-position: 15% 0%;
            }
            50% {
                background-position: 85% 100%;
            }
            100% {
                background-position: 15% 0%;
            }
        `

        const Gradient = styled.div`
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0;
            clip-path: polygon(0% 100%, 10px 100%, 10px 10px, calc(100% - 10px) 10px, calc(100% - 10px) calc(100% - 10px), 10px calc(100% - 10px), 10px 100%, 100% 100%, 100% 0%, 0% 0%);
            background: linear-gradient(120deg, #04e5e5, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
            background-size: 300% 300%;
            animation: ${gradientAnimation} 5s ease-in-out infinite;
        `


        const Map = styled.iframe`
            border: none;
            height: 100%;
            width: 100%;
        `

        const IconRow = styled(Row)`
            margin-top: 150px;
        `

        const IconCol = styled(Col)`
            @media (max-width: 500px) {
              margin-bottom: 140px;
            }
        `

        const IconContainer = styled.div`
            width: 150px;
            height: 150px;
            margin: auto;
            padding: 35px;
            text-align: center;
            position: relative;
            bottom: 75px;
            background: linear-gradient(120deg, #04e5e5, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
            background-size: 300% 300%;
            animation: ${gradientAnimation} 5s ease-in-out infinite;
            border-radius: 150px;
            transition: .5s;
        `

        const InfoPart = styled.div`
            min-height: 250px;
            background-color: #111;
            border: 2px solid #444;
        `
        const Icon = styled.img`
            height: 70px;
            width: 70px;
            object-fit: contain;
        `

        const InfoTitle = styled.h4`
            font-size: 35px;
            color: #fff;
            font-family: Teko;
            text-align: center;
        `

        const Info = styled.div`
            position: relative;
            bottom: 30px;
        `

        const InfoLinkContainer = styled.div`
            text-align: center;
        `

        const InfoLink = styled.a`
            color: #04e5e5;
            transition: .5s;
            &:hover {
              color: #fff;
              text-decoration: none;
            }
        `


        return (
            <Section id="contact">
                <Container>

                    <IconRow>
                        <IconCol md={4}>
                            <AnimationContainer animation="fadeIn" delay={500}>
                                <InfoPart>
                                    <IconContainer>
                                        <Icon src={this.props.emailIcon.childImageSharp.fluid.src} alt="email"/>
                                    </IconContainer>
                                    <Info>
                                        <InfoTitle>
                                            Github
                                        </InfoTitle>
                                        <InfoLinkContainer>
                                            <InfoLink href="https://github.com/Zelgai123">
                                                Visit here
                                            </InfoLink>
                                        </InfoLinkContainer>
                                    </Info>
                                </InfoPart>
                            </AnimationContainer>
                        </IconCol>
                        <IconCol md={4}>
                            <AnimationContainer animation="fadeIn" delay={1000}>
                                <InfoPart>
                                    <IconContainer>
                                        <Icon src={this.props.phoneIcon.childImageSharp.fluid.src} alt="phone"/>
                                    </IconContainer>
                                    <Info>
                                        <InfoTitle>
                                            LinkedIn
                                        </InfoTitle>
                                        <InfoLinkContainer>
                                            <InfoLink href="https://www.linkedin.com/in/zelgai-nemati-1b543619a/">
                                                Visit here
                                            </InfoLink>
                                        </InfoLinkContainer>
                                    </Info>
                                </InfoPart>
                            </AnimationContainer>
                        </IconCol>
                        <IconCol md={4}>
                            <AnimationContainer animation="fadeIn" delay={1500}>
                                <InfoPart>
                                    <IconContainer>
                                        <Icon src={this.props.mapIcon.childImageSharp.fluid.src} alt="map"/>
                                    </IconContainer>
                                    <Info>
                                        <InfoTitle>
                                            Xing
                                        </InfoTitle>
                                        <InfoLinkContainer>
                                            <InfoLink target="_blank"
                                                      href="https://www.xing.com/profile/Zelgai_Nemati/portfolio">
                                                Visit here
                                            </InfoLink>
                                        </InfoLinkContainer>
                                    </Info>
                                </InfoPart>
                            </AnimationContainer>
                        </IconCol>
                    </IconRow>
                </Container>
            </Section>
        )
    }

}

export default props => (
    <StaticQuery
        query={graphql`
    query {
      emailIcon: file(relativePath: {eq: "icons/email2.png"}) {
        childImageSharp {
          fluid(maxWidth: 500) {
            src
          }
        }
      }
      mapIcon: file(relativePath: {eq: "icons/map.png"}) {
        childImageSharp {
          fluid(maxWidth: 500) {
            src
          }
        }
      }
      phoneIcon: file(relativePath: {eq: "icons/phone.png"}) {
        childImageSharp {
          fluid(maxWidth: 500) {
            src
          }
        }
      }
    }
    `}
        render={({
                     emailIcon,
                     mapIcon,
                     phoneIcon
                 }) => <ContactPersonal
            emailIcon={emailIcon}
            mapIcon={mapIcon}
            phoneIcon={phoneIcon}
            {...props} />}
    />
)