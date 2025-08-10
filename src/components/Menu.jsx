"use client";
import { useRef, useState } from "react";
import { allCocktails } from "../../constants/index.js";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Menu = () => {
    const contentRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);

    useGSAP(() => {
        const parallaxTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: "#menu",
            start: "top 80%",
            end: "bottom 90%",
            scrub: true
        }
        })

        parallaxTimeline
        .from('#m-left-leaf', {
            x:-100, y:100
        })
        .from('#m-right-leaf', {
            x:100, y:100
        })
    
        gsap.fromTo('#title', {opacity: 0}, {opacity: 1, duration: 1});
        gsap.fromTo('.cocktail img', {opacity: 0 , xPercent: -100}, {
            xPercent: 0 , opacity: 1, duration: 1, ease: "power1.inOut"
        })
        gsap.fromTo('.details h2', {yPercent:100, opacity: 0}, {
            yPercent: 0, opacity:100, ease: 'power1.inOut'
        })
        gsap.fromTo('.details p', {yPercent:100, opacity: 0}, {
            yPercent: 0, opacity:100, ease: 'power1.inOut'
        })
    }, [currentIndex]);

    const totalCocktails = allCocktails.length;

    const goToSlide = (index) => {
        const newIndex = (index + totalCocktails) % totalCocktails;

        setCurrentIndex(newIndex);
    }

    const getCocktailAt = (indexOffset) => {
        return allCocktails[(currentIndex + indexOffset + totalCocktails) % totalCocktails];
    }

    const currentCocktail = getCocktailAt(0);
    const prevCocktail = getCocktailAt(-1);
    const nextCocktail = getCocktailAt(1);

    return (
        <section id="menu" aria-labelledby="menu-heading" className='noisy'>
        <img
            src="/images/slider-left-leaf.png"
            alt="leaf-leaf"
            id="m-left-leaf"
        ></img>
        <img
            src="/images/slider-right-leaf.png"
            alt="right-leaf"
            id="m-right-leaf"
        ></img>

        <h2 id="menu-heading" className="sr-only">
            Cocktail Menu
        </h2>

        <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
            {allCocktails.map((cocktail, index) => {
            const isActive = index === currentIndex;

            return (
                <button
                key={cocktail.id}
                className={`${
                    isActive
                    ? "text-white border-white"
                    : "text-white/50 border-white/50"
                }`} onClick={() => goToSlide(index)}
                >
                {cocktail.name}
                </button>
            );
            })}
        </nav>

        <div className="content">
            <div className="arrows">
                <button className="text-left" onClick={() => goToSlide(currentIndex - 1)}>
                    <span>{prevCocktail.name}</span>
                    <img src="/images/right-arrow.png" alt="right-arrow" aria-hidden="true"></img>
                </button>

                <button className="text-left" onClick={() => goToSlide(currentIndex + 1)}>
                    <span>{nextCocktail.name}</span>
                    <img src="/images/left-arrow.png" alt="left-arrow" aria-hidden="true"></img>
                </button>
            </div>

            <div className="cocktail">
                <img src={currentCocktail.image} className="object-contain"></img>
            </div>

            <div className="recipe">
                <div ref={contentRef} className="info">
                    <p>Recipe for:</p>
                    <p id="title">{currentCocktail.name}</p>
                </div>

                <div className="details">
                    <h2>{currentCocktail.title}</h2>
                    <p>{currentCocktail.description}</p>
                </div>
            </div>
        </div>
        </section>
    );
};

export default Menu;
