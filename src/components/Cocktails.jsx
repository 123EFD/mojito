import { cocktailLists, mockTailLists } from '../../constants'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import CocktailCard from './CocktailCard'

const Cocktails = () => {
  useGSAP(() => {
    const parallaxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktails",
        start: "top 30%",
        end: "bottom 80%",
        scrub: true
      }
    });

    parallaxTimeline
      .from('#c-left-leaf', {
        x:-100, y:100
      })
      .from('#c-right-leaf', {
        x:100, y:100
      })
  });

  return (
    <section id= "cocktails" className='noisy'>
      <img src="/images/cocktail-left-leaf.png" alt='l-leaf' id="c-left-leaf"></img>
      <img src="/images/cocktail-right-leaf.png" alt='r-leaf' id="c-right-leaf"></img>

      <div className='cocktails-container'>
        <div className='popular-cocktails'>
          <h2>Most Popular Cocktails:</h2>
          <div className='cocktails-grid'>
            {cocktailLists.map((cocktail) => (
              <CocktailCard key={cocktail.name} {...cocktail} />
            ))}
          </div>
        </div>

        <div className='popular-mocktails'>
          <h2>Most Loved Mocktails:</h2>
          <div className='cocktails-grid'>
            {mockTailLists.map((mocktail) => (
              <CocktailCard key={mocktail.name} {...mocktail} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cocktails