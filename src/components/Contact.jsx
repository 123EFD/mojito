import React from "react";
import { openingHours } from "../../constants";
import { socials } from "../../constants";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const Contact = () => {
    useGSAP(() => {
        const titleSplit = SplitText.create('#contact h2', {
            type: "words",
        });

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#contact',
                start: 'top center',
            },
            ease: "power1.inOut"
        })

        timeline
            .from(titleSplit.words, {
                yPercent: 100,
                opacity: 0,
                stagger: 0.02
            })
            .from('#contact h3, #contact p', {
                yPercent: 100,
                opacity: 0,
                stagger: 0.02
            })
            .to('#f-right-leaf', {
                y: '-50%',
                duration: 1,
                ease: "power1.inOut"
            })
            .to('#f-left-leaf', {
                y: '-50%',
                duration: 1,
                ease: "power1.inOut"
            }, '<')
        })
    return (
        <footer id="contact">
        <img
            src="/images/footer-right-leaf.png"
            alt="leaf-right"
            id="f-right-leaf"
        ></img>
        <img
            src="/images/footer-left-leaf.png"
            alt="leaf-left"
            id="f-left-leaf"
        ></img>

        <div className="content">
        <h2>Where to find us</h2>
        <div>
            <h3>Visit Our Bar</h3>
            <p>456, Raq Blvd , San Francisco, CA 94103</p>
            </div>
            <div>
            <h3>Contact Us</h3>
            <p>Email: info@mojito.com</p>
            <p>Phone: (123) 456-7890</p>
            </div>
            <div>
            <h3>Open Everyday!</h3>
            {openingHours.map((time) => (
                <p key={time.day}>
                {time.day}: {time.time}
                </p>
            ))}
            </div>
            <div>
            <h3>Follow Us</h3>
            <p>Stay connected on social media for the latest updates!</p>
            <div className="flex-center gap-5">
                {socials.map((social) => (
                <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                >
                    <img src={social.icon} alt={social.name} />
                </a>
                ))}
            </div>
            </div>
        </div>
        </footer>
    );
};

export default Contact;
