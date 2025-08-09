import { useGSAP } from '@gsap/react';
import React, { use } from 'react'
import { SplitText } from 'gsap/all';
import gsap from 'gsap';

const About = () => {
    useGSAP(() => {
        const titleSplit = SplitText.create('#about h2', {
            type: 'words'
        })

        const scrollTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#about",
                start: "top center",
            }
        })

        scrollTimeline
            .from(titleSplit.words, {
                yPercent: 100,
                opacity: 0,
                duration: 1,
                ease:'expo.out',
                stagger: 0.02
            })
            .from('.top-grid div, .bottom-grid div', {
                opacity:0,
                duration: 1,
                ease:'power1.inOut',
                stagger: 0.04
            }, '-=0.5')
    });
  return (
    <div id='about'>
        <div className='mb-16 md:px-0 px-5'>
            <div className='content'>
                <div className='md:col-span-8'>
                    <p className='badge'>Best Cocktails</p>
                    <h2>
                        Where every detail matters <span className="text-white">-</span>
                        from muddle to garnish
                    </h2>
                </div>
                <div className='sub-content'>
                    <p>
                        At Mojito, we believe that every cocktail tells a story. Our passion for mixology is reflected in every sip, where the perfect balance of flavors meets the art of presentation. From the freshest ingredients to the meticulous crafting of each drink, we ensure that your experience is nothing short of extraordinary.
                        <br /><br />
                        Join us on a journey through the world of cocktails, where innovation meets tradition, and every glass is a masterpiece waiting to be savored.
                    </p>

                    <div>
                        <p className='md:text-3xl text-xl font-bold'>
                            <span>4.5</span>/5
                        </p>
                        <p className='text-sm text-white-100'>
                            More than +12000 reviews 
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className='top-grid'>
            <div className='md:col-span-3'>
                <div className='noisy'></div>
                <img src='/images/abt1.png' alt='grid-img-1'></img>
            </div>

            <div className='md:col-span-6'>
                <div className='noisy'></div>
                <img src='/images/abt2.png' alt='grid-img-2'></img>
            </div>

            <div className='md:col-span-3'>
                <div className='noisy'></div>
                <img src='/images/abt5.png' alt='grid-img-5'></img>
            </div>
        </div>

        <div className='bottom-grid'>
            <div className='md:col-span-8'>
                <div className='noisy'></div>
                <img src='/images/abt3.png' alt='grid-img-3'></img>
            </div>
            <div className='md:col-span-4'>
                <div className='noisy'></div>
                <img src='/images/abt4.png' alt='grid-img-4'></img>
            </div>
        </div>
    </div>
  )
}

export default About