import '../styles/intro.scss';
import Typist from 'react-typist';
import { useEffect, useRef } from 'react';
import 'react-typist/dist/Typist.css';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ButtonGroup from '@mui/material/ButtonGroup';
import TwitterIcon from '@mui/icons-material/Twitter';
import FadeInSection from './fadeinsection';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import InstagramIcon from '@mui/icons-material/Instagram';

const theme = createTheme({
    palette: {
        primary: {
            main: '#FFF',
        },
        secondary: {
            main: '#11cb5f',
        },
    },
});

const handleLearnMoreClick = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
}

export default function Intro() {

    // Initialise the GSAP ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    const introRef = useRef();

    useEffect(() => {
        gsap.to(introRef.current, {
            x: "100vw",
            opacity: 0,
            scrollTrigger: {
                trigger: "#intro",
                scrub: 2,
                start: "top top",
                end: "bottom top",
                pin: true,
            }
        });
    }, []);

    return (
        <div id="intro-wrapper">
            <section id="intro" ref={introRef}>
                <div className="intro-content-wrapper">
                    <h1 className='intro-header section-header-lighter'><Typist avgTypingDelay={120}>grfn.sh<Typist.Backspace count={7} delay={200} />Hello, Thomas here. </Typist></h1>
                    <FadeInSection>
                        <h2 className="intro-subtitle">Full-Stack Web Developer</h2>
                        <div className="intro-social-media-links">
                            <div className="intro-social-media-link-wrapper">
                                <Link href="https://twitter.com/barksploit" className="intro-social-media-link" target="_blank" rel="noopener">
                                    <TwitterIcon />
                                </Link>
                                <Link href="https://twitter.com/barksploit" className="intro-social-media-link" target="_blank" rel="noopener">
                                    <TwitterIcon />
                                </Link>
                            </div>
                            <div className="intro-social-media-link-wrapper">
                                <Link href="https://github.com/barksploit" className="intro-social-media-link" target="_blank" rel="noopener">
                                    <GitHubIcon />
                                </Link>
                                <Link href="https://github.com/barksploit" className="intro-social-media-link" target="_blank" rel="noopener">
                                    <GitHubIcon />
                                </Link>
                            </div>
                            <div className="intro-social-media-link-wrapper">
                                <Link href="https://www.linkedin.com/in/thomas-anthony-griffin/" className="intro-social-media-link" target="_blank" rel="noopener">
                                    <LinkedInIcon />
                                </Link>
                                <Link href="https://www.linkedin.com/in/thomas-anthony-griffin/" className="intro-social-media-link" target="_blank" rel="noopener">
                                    <LinkedInIcon />
                                </Link>
                            </div>
                            <div className="intro-social-media-link-wrapper">
                                <Link href="https://www.instagram.com/barksploit/" className="intro-social-media-link" target="_blank" rel="noopener">
                                    <InstagramIcon />
                                </Link>
                                <Link href="https://www.instagram.com/barksploit/" className="intro-social-media-link" target="_blank" rel="noopener">
                                    <InstagramIcon />
                                </Link>
                            </div>
                        </div>
                        <ThemeProvider theme={theme}>
                            <ButtonGroup variant="outlined" aria-label="outlined primary button group">
                                <Button onClick={() => window.location = 'mailto:tom@grfn.sh'}>Contact me</Button>
                                <Button onClick={() => { handleLearnMoreClick() }}>Learn more</Button>
                            </ButtonGroup>
                        </ThemeProvider>
                    </FadeInSection>
                </div>
            </section>
        </div>
    );
}