import '../styles/about.scss';
import FadeInSection from './fadeinsection';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: '#FFF',
        },
        secondary: {
            // This is green.A700 as hex.
            main: '#11cb5f',
        },
    },
});

export default function About() {

    const technologies = [
        {
            label: "PHP 8+",
            avatarsrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png",
        },
        {
            label: "Laravel 9+",
            avatarsrc: "https://seeklogo.com/images/L/laravel-logo-9B01588B1F-seeklogo.com.png",
        },
        {
            label: "Javascript ES6+",
            avatarsrc: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
        },
        {
            label: "React",
            avatarsrc: "https://reactjs.org/logo-og.png",
        },
        {
            label: "MySQL",
            avatarsrc: "https://www.logo.wine/a/logo/MySQL/MySQL-Logo.wine.svg",
        },
        {
            label: "HTML5 & CSS3",
            avatarsrc: "https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png",
        },
        {
            label: "WordPress",
            avatarsrc: "https://cdn.cdnlogo.com/logos/w/65/wordpress.svg",
        },
        {
            label: "SCSS/SASS",
            avatarsrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png",
        },
        {
            label: "AWS",
            avatarsrc: "https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png",
        },
    ];

    return (
        <section id="about">
            <div className="about-content-wrapper">
                <FadeInSection>
                    <h1>&lt;about&gt;</h1>



                    <p style={{ lineHeight: "2em" }}>I am a Junior Web and Software Developer based in the South West UK. I specialise in Full-Stack Web Development. I graduated with a First-Class Honours BSc degree in Applied Computing from UWE Bristol in 2022. I plan on going back to University to hopefully achieve a Masters degree in Cyber Security.</p>

                    <p>Here are some things I've worked with:</p>
                    <ThemeProvider theme={theme}>
                        <Stack direction="row" spacing={1} style={{ flexWrap: "wrap", marginTop: "50px", justifyContent: "space-around" }}>

                            {technologies.map((tech_item, i) => {
                                return (
                                    <FadeInSection key={i} delay={`${i + 1}00ms`}>
                                        <Chip className="about-worked-with-chip" avatar={<Avatar sx={{ bgcolor: "#FFF !important", margin: "0" }} alt="Natacha" src={tech_item.avatarsrc} />} label={tech_item.label} color="primary" variant="outlined" />
                                    </FadeInSection>
                                );
                            })}
                        </Stack>
                    </ThemeProvider>
                </FadeInSection>
            </div>
        </section>
    );
}