import React from 'react'
import foodRecipe from '../assets/foodRecipe.png'
import RecipeItems from '../components/RecipeItems'

function Home() {
  return (

    <>
    <section className="home">
        <div className="left">
            <h1>Food Recipe</h1>
            <h5>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</h5>
            <button>Share your recipe</button>
        </div>
        <div className='right'>
            <img src={foodRecipe} width="320px" height="300px" />
        </div>
    </section>
    <div className='bg'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#d4f6e8" fillOpacity="1" d="M0,160L40,176C80,192,160,224,240,224C320,224,400,192,480,160C560,128,640,96,720,101.3C800,107,880,149,960,176C1040,203,1120,213,1200,224C1280,235,1360,245,1400,250.7L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
    </div>

    <div className='recipe'>
        <RecipeItems/>
    </div>
    
    </>
  )
}

export default Home