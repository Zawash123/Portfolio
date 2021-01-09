import React from 'react'
import styled, {keyframes} from 'styled-components'
import Progress from 'components/progress'
import Timeline from 'sections/about/parts/Timeline'

class TabsPart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tab: "skills"
        }
    }

    render() {
        const TabContainer = styled.div`
            min-height: 400px;
            margin-top: 20px;
            @media (max-width:767px) {
                margin-top: 50px;
                padding: 0 20px;
            }
        `
        const TabSelectors = styled.div`
            display: flex;
        `

        const ColorAnimation = keyframes`
            0%  {border-color: #04e5e5;}
            10% {border-color: #f37055;}
            20% {border-color: #ef4e7b;}
            30% {border-color: #a166ab;}
            40% {border-color: #5073b8;}
            50% {border-color: #04e5e5;}
            60% {border-color: #07b39b;}
            70% {border-color: #6fba82;}
            80% {border-color: #5073b8;}
            90% {border-color: #1098ad;}
            100% {border-color: #f37055;}
        `
        const TabSelector = styled.button`
            color: #fff;
            font-size: 20px;
            font-weight: bold;
            background-color: transparent;
            border: none;
            margin: 0 10px 0 0;
            border-bottom: 2px solid #fff;
            transition: .5s;
            &:hover, &.active {
                animation: ${ColorAnimation} 10s infinite alternate;
            }
            &:focus {
                outline: none;
            }
            @media (max-width: 767px) {
                font-size: 18px;
            }
        `

        const Tabs = styled.div`
            margin-top: 20px;
        `

        const Fade = keyframes`
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        `

        const Tab = styled.div`
            display: none;
            animation: ${Fade} 1s forwards;
        `

        return (
            <TabContainer>
                <TabSelectors>
                    <TabSelector className={this.state.tab === "skills" ? "active" : ""}
                                 onClick={() => this.setState({tab: "skills"})}>
                        Skills
                    </TabSelector>
                    <TabSelector className={this.state.tab === "experience" ? "active" : ""}
                                 onClick={() => this.setState({tab: "experience"})}>
                        Experience
                    </TabSelector>
                    <TabSelector className={this.state.tab === "education" ? "active" : ""}
                                 onClick={() => this.setState({tab: "education"})}>
                        Education
                    </TabSelector>
                </TabSelectors>
                <Tabs>
                    <Tab style={{
                        display: this.state.tab === "skills" ? "block" : "none"
                    }}>
                        <a href="https://www.w3.org/html/" target="_blank"> <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                            alt="html5" width="40" height="40"/> </a>
                        &emsp;
                        <a href="https://www.w3schools.com/css/" target="_blank"> <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                            alt="css3" width="40" height="40"/> </a>
                        <Progress value={80}/>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                            alt="javascript" width="40" height="40"/> </a>
                        &emsp;
                        <a href="https://nodejs.org" target="_blank"> <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                            alt="nodejs" width="40" height="40"/> </a>
                        <Progress value={90}/>
                        <a href="https://reactjs.org/" target="_blank"> <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                            alt="react" width="40" height="40"/> </a>
                        &emsp;
                        <a href="https://redux.js.org" target="_blank"> <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
                            alt="redux" width="40" height="40"/> </a>
                        <Progress value={80} text/>
                        <a href="https://www.python.org" target="_blank"> <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
                            alt="python" width="40" height="40"/> </a>
                        <Progress value={90}/>
                        <a href="https://www.mongodb.com/" target="_blank"> <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
                            alt="mongodb" width="40" height="40"/> </a>
                        <Progress value={80}/>
                        <a href="https://git-scm.com/" target="_blank"> <img
                            src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40"
                            height="40"/> </a>
                        &emsp;
                        <a href="https://www.linux.org/" target="_blank"> <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg"
                            alt="linux" width="40" height="40"/> </a>
                        &emsp;
                        <a href="https://www.gnu.org/software/bash/" target="_blank"> <img
                            src="https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg" alt="bash" width="40"
                            height="40"/> </a>
                        &emsp;
                        <a href="https://circleci.com" target="_blank"> <img
                            src="https://www.vectorlogo.zone/logos/circleci/circleci-icon.svg" alt="circleci" width="40"
                            height="40"/> </a>
                        <Progress value={80}/>

                    </Tab>
                </Tabs>
                <Tabs>
                    <Tab style={{
                        display: this.state.tab === "experience" ? "block" : "none"
                    }}>
                        <Timeline data={{
                            "2020 - 2021": {
                                title: "Quality Assurance Apprentice",
                                institution: "CTS Eventim Solutions GmbH",
                                description: ""
                            },
                            "2021 - now": {
                                title: "Software Developer Internationales Sales and Partner Management",
                                institution: "Contact Software GmbH",
                                description: ""
                            }
                        }
                        }
                        />
                    </Tab>
                    <Tab style={{
                        display: this.state.tab === "education" ? "block" : "none"
                    }}>
                        <Timeline data={{
                            "2018 - now": {
                                title: "Systems-Engineering Study",
                                institution: "University of Bremen",
                                description: "Specialization in the field of embedded systems and system software."
                            },

                        }
                        }
                        />
                    </Tab>
                </Tabs>
            </TabContainer>
        )
    }
}

export default TabsPart