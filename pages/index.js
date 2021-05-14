import Image from "next/image";
import {Fragment} from "react";
import PersonalInformation from "../components/personal-information/personal-information";
import ExternalProfiles from "../components/external-profiles/external-profiles";
import Timeline from "../components/timeline/timeline";
import {faGithub, faLinkedin, faStackOverflow} from "@fortawesome/free-brands-svg-icons";
import SkillProgressBar from "../components/skill-progress-bar/skill-progress-bar";
import OverallCircularBar from "../components/overall-circular-bar/overall-circular-bar";

const profiles = [
    {
        id: 0,
        href: "https://github.com/darge98",
        icon: faGithub
    },
    {
        id: 1,
        href: "https://www.linkedin.com/in/mattia-d-argenio-16a934152",
        icon: faLinkedin
    },
    {
        id: 2,
        href: "https://stackoverflow.com/users/9390208/unicorn365?tab=profile",
        icon: faStackOverflow
    }
];

export default function Home() {
    return (
        <Fragment>
            <main className="profile-page pt-6">
                <section className="relative block h-500-px">
                    <div className="absolute top-0 w-full h-full bg-center bg-cover profile-img">
                        <div className="relative flex justify-center z-50">
                            <Image src="/images/profile.jpg" className="rounded-full" height={100} width={100}/>
                        </div>
                        <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"/>
                    </div>
                    <div
                        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
                        style={{transform: "translateZ(0)"}}>
                    </div>
                </section>
                <section className="relative py-16 bg-blueGray-200">
                    <div className="container mx-auto px-4">
                        <div
                            className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg">
                            <div className="px-6">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                                        <div className="py-6 px-3 mt-32 sm:mt-0">
                                            <button
                                                className="bg-blueGray-700 active:bg-blueGray-600 uppercase font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                            >
                                                <a href="mailto:mattia.darge@gmail.com">Contact Me</a>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-4/12 px-4 lg:order-1">
                                        <ExternalProfiles profiles={profiles}/>
                                    </div>
                                </div>
                                <div className="text-center mt-12">
                                    <PersonalInformation name="Mattia D'Argenio" address="Parma, Italy"
                                                         schoolInfo="I.T.I.S Leonardo Da Vinci (PR)"
                                                         workInfo="Web Developer"/>
                                </div>
                                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                                    <div className="flex flex-wrap justify-center">
                                        <div className="w-full lg:w-9/12 px-4">
                                            <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                                                I'm a <b>Software Developer</b> and I'm always looking for personal improvement.
                                                I love study new technology and I love find a solution for your problem.
                                                I start develop when I was 17 years old in a Technical Institute.
                                                I finished school in 2017 and I started work in the same year.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="mt-5 py-7 border-t border-blueGray-200 w-full flex flex-col justify-center align-center">
                                    <div className="flex flex-col md:flex-row justify-evenly">
                                        <div className="mb-5 md:mb-5">
                                            <h3 className="text-3xl font-semibold leading-normal mb-2 text-blueGray-700 mb-5 text-center">
                                                Education
                                            </h3>
                                            <div className="container w-full">
                                                <Timeline>
                                                    <Timeline.Item date="2020" label="Certified Vaadin 14 Developer"/>
                                                    <Timeline.Item date="2012-2017"
                                                                   label="Graduated at ITIS Leonardo da Vinci (PR)"/>
                                                </Timeline>
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="text-3xl font-semibold leading-normal mb-2 text-blueGray-700 mb-5 text-center">
                                                Experience
                                            </h3>
                                            <div className="container w-full">
                                                <Timeline>
                                                    <Timeline.Item date="2018-now"
                                                                   label="Fullstack Developer at Blue Eyes Solutions"/>
                                                    <Timeline.Item date="2017-2018"
                                                                   label="Backend Developer at Sopra Steria"/>
                                                </Timeline>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div
                                    className="mt-5 py-7 border-t border-blueGray-200 w-full flex flex-col justify-center align-center">
                                    <h3 className="text-3xl font-semibold leading-normal mb-2 text-blueGray-700 mb-5 text-center">
                                        Skills
                                    </h3>
                                    <div className="flex flex-col md:flex-row px-2">
                                        <div className="mb-5 mt-5 md:mt-0 md:mr-3 w-full">
                                            <h4 className="text-2xl font-semibold leading-normal mb-2 text-blueGray-700 mb-5 text-center">
                                                Frameworks & Library
                                            </h4>
                                            <div className="flex flex-col">
                                                <SkillProgressBar label="Angular" progress="90" bgColor='#DD0031'/>
                                                <SkillProgressBar label="RxJS" progress="80" bgColor='#B1008F'/>
                                                <SkillProgressBar label="React" progress="75" bgColor='#61dbfb'/>
                                                <SkillProgressBar label="NGRX" progress="75" bgColor='#533B56'/>
                                                <SkillProgressBar label="Vaadin" progress="75" bgColor='#0CBCFF'/>
                                                <SkillProgressBar label="Spring Boot" progress="65" bgColor='#72A64F'/>
                                                <SkillProgressBar label="Net Core" progress="50" bgColor='#9C8ADB'/>
                                            </div>
                                        </div>
                                        <div className="mb-5 md:ml-3 w-full">
                                            <h4 className="text-2xl font-semibold leading-normal mb-2 text-blueGray-700 mb-5 text-center">
                                                Languages
                                            </h4>
                                            <div className="flex flex-col">
                                                <SkillProgressBar label="Typescript" progress="90" bgColor='#3278C5'/>
                                                <SkillProgressBar label="Javascript" progress="85" bgColor='#F4DD1A'/>
                                                <SkillProgressBar label="Java" progress="70" bgColor='#D30000'/>
                                                <SkillProgressBar label="C#" progress="70" bgColor='#BF8ABB'/>
                                            </div>
                                        </div>
                                    </div>
                                    {/*<div className="mt-5 mb-5 pb-7 flex sm:flex-col justify-center ">*/}
                                    {/*    <div style={{height: '100px', width: '100px'}}>*/}
                                    {/*        <OverallCircularBar percentage='80' label="Web Development"/>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </Fragment>
    )
}
