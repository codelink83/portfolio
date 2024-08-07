import project6 from '.././assets/project1.png'
import project2 from '.././assets/project2.png'
import project3 from '.././assets/project3.png'
import project4 from '.././assets/project4.png'
import project5 from '.././assets/project5.png'
import react from '.././assets/react.png'
import express from '.././assets/express.png'
import express2 from '.././assets/express2.png'
import nodejs from '.././assets/nodejs.png'
import mongodb from '.././assets/mongodb.png'
import javascript from '.././assets/javascript.png'
import html from '.././assets/html-icon.png'
import css from '.././assets/css.png'
import tailwind from '.././assets/tailwind.png'
import bootstrap from '.././assets/bootstrap.png'
import portfolio from '.././assets/portfolio2.png'

const Portfolio = () => {
 
  return (
    <div className="mt-12" id="portfolio">
      <h1 className="text-5xl text-blue-500 text-center mt-5">Portfolio</h1>
      <hr className="w-[150px] bg-blue-500 border-none h-1 mx-auto mt-3 mb-12" />
      <section className="flex justify-between items-center flex-wrap gap-y-12 sm:justify-around px-5 ">
        <div className="card shadow-lg w-[450px]">
          <a href="https://codelink83.github.io/portfolio/" target="blanck">
            <img className="w-[450px] hover:rounded-xl hover:scale-[1.025] duration-300 hover:shadow-[0_2px_0px_2px_skyblue]" src={portfolio} alt="" />
          </a>
          

          <div className="card-body bg-white py-5 text-center shadow">
            <p className="text-xs text-gray-600 my-2">muhammad ilyas - portfolio</p>
            <h1 className="text-gray-600 my-3 text-2xl">My Portfolio</h1>
            <div className="skill-icon flex gap-3 justify-center mb-5 my-4">
              <p className="w-14 h-14 rounded-lg flex justify-center items-center shadow-lg hover:shadow-blue bg-gray-100 hover:shadow-blue-300 hover:translate-3 duration-300"><img className="w-8 h-8" src={react} alt="" /></p>
              <p className="w-14 h-14 flex justify-center items-center shadow-lg hover:shadow-blue-300 hover:translate-2 duration-300 bg-gray-100"><img className="w-14" src={nodejs} alt="" /></p>
              <p className="w-14 h-14 flex justify-center items-center shadow-lg bg-gray-100 hover:shadow-blue-300 hover:translate-2 duration-300"><img className="w-12" src={express2} alt="" /></p>
              
              <p className="w-14 h-14 flex justify-center items-center shadow-lg bg-gray-100 hover:shadow-blue-300 hover:translate-2 duration-300"><img className="w-12" src={tailwind} alt="" /></p>
            </div>
          </div>
        </div>
        <div className="card shadow-lg w-[450px]">
          <a href="https://codelink83.github.io/scs/" target='blanck'>
            <img className="w-[450px] hover:rounded-xl hover:scale-[1.025] duration-300 hover:shadow-[0_2px_0px_2px_skyblue]" src={project2} alt="" />
          </a>
          
          <div className="card-body bg-white py-5 text-center shadow">
            <p className="text-xs text-gray-600 my-2">SCS - WEB APP in React-js</p>
            <h1 className="text-gray-600 my-3 text-2xl">Sumi Collection Store</h1>
            <div className="skill-icon flex gap-3 justify-center mb-5 my-4">
              <p className="w-14 h-14 rounded-lg flex justify-center items-center shadow-lg hover:shadow-blue bg-gray-100 hover:shadow-blue-300 hover:translate-3 duration-300"><img className="w-8 h-8" src={react} alt="" /></p>
              <p className="w-14 h-14 flex justify-center items-center shadow-lg hover:shadow-blue-300 hover:translate-2 duration-300 bg-gray-100"><img className="w-14" src={nodejs} alt="" /></p>
              <p className="w-14 h-14 flex justify-center items-center shadow-lg bg-gray-100 hover:shadow-blue-300 hover:translate-2 duration-300"><img className="w-12" src={express2} alt="" /></p>
              <p className="w-14 h-14 flex justify-center items-center shadow-lg bg-gray-100 hover:shadow-blue-300 hover:translate-2 duration-300"><img className="w-8 h-8" src={bootstrap} alt="" /></p>
            </div>
          </div>
        </div>
        <div className="card shadow-lg w-[450px]">
          <a href="https://codelink83.github.io/jessy/" target='blanck'>
             <img className="w-[450px] hover:rounded-xl hover:scale-[1.025] duration-300 hover:shadow-[0_2px_0px_2px_skyblue]" src={project3} alt="" />
          </a>
         

          <div className="card-body bg-white py-5 text-center shadow">
            <p className="text-xs text-gray-600 my-2">Jessy - web</p>
            <h1 className="text-gray-600 my-3 text-2xl">Custom Desing in html-css-js</h1>
            <div className="skill-icon flex gap-3 justify-center mb-5 my-4">
              <p className="w-14 h-14 flex justify-center items-center shadow-lg bg-gray-100 hover:shadow-blue-300 hover:translate-2 duration-300"><img className="w-8 h-8" src={html} alt="" /></p>
              <p className="w-14 h-14 flex justify-center items-center shadow-lg bg-gray-100 hover:shadow-blue-300 hover:translate-2 duration-300"><img className="w-8 h-8" src={css} alt="" /></p>
              <p className="w-14 h-14 flex justify-center items-center shadow-lg bg-gray-100 hover:shadow-blue-300 hover:translate-2 duration-300"><img className="w-8 h-8" src={javascript} alt="" /></p>
              
            </div>
          </div>
        </div>
        <div className="card shadow-lg w-[450px]">
          <a href="https://codelink83.github.io/burger_web/" target='blanck'>
          <img className="w-[450px] hover:rounded-xl hover:scale-[1.025] duration-300 hover:shadow-[0_2px_0px_2px_skyblue]" src={project4} alt="" />
          </a>
          <div className="card-body bg-white py-5 text-center shadow">
            <p className="text-xs text-gray-600 my-2">Burger website</p>
            <h1 className="text-gray-600 my-3 text-2xl"> React and Tailwind css</h1>
            <div className="skill-icon flex gap-3 justify-center mb-5 my-4">
              <p className="w-14 h-14 rounded-lg flex justify-center items-center shadow-lg hover:shadow-blue bg-gray-100 hover:shadow-blue-300 hover:translate-3 duration-300"><img className="w-8 h-8" src={react} alt="" /></p>
              <p className="w-14 h-14 flex justify-center items-center shadow-lg hover:shadow-blue-300 hover:translate-2 duration-300 bg-gray-100"><img className="w-14" src={nodejs} alt="" /></p>
             
            
              <p className="w-14 h-14 flex justify-center items-center shadow-lg bg-gray-100 hover:shadow-blue-300 hover:translate-2 duration-300"><img className="w-12" src={tailwind} alt="" /></p>
            </div>
          </div>
        </div>
        <div className="card shadow-lg w-[450px]">
          <a href="https://codelink83.github.io/Educity/" target='blanck'>
          <img className="w-[450px] hover:rounded-xl hover:scale-[1.025] duration-300 hover:shadow-[0_2px_0px_2px_skyblue]" src={project5} alt="" />
          </a>
          <div className="card-body bg-white py-5 text-center shadow">
            <p className="text-xs text-gray-600 my-2">Education website</p>
            <h1 className="text-gray-600 my-3 text-2xl">React and CSS</h1>
            <div className="skill-icon flex gap-3 justify-center mb-5 my-4">
              <p className="w-14 h-14 rounded-lg flex justify-center items-center shadow-lg hover:shadow-blue bg-gray-100 hover:shadow-blue-300 hover:translate-3 duration-300"><img className="w-8 h-8" src={react} alt="" /></p>
              <p className="w-14 h-14 flex justify-center items-center shadow-lg hover:shadow-blue-300 hover:translate-2 duration-300 bg-gray-100"><img className="w-14" src={nodejs} alt="" /></p>
              <p className="w-14 h-14 flex justify-center items-center shadow-lg bg-gray-100 hover:shadow-blue-300 hover:translate-2 duration-300"><img className="w-12" src={css} alt="" /></p>
             
            </div>
          </div>
        </div>
        <div className="card shadow-lg w-[450px]">
          <a href="https://codelink83.github.io/food_del/" target='blank'>
            <img className="w-[450px] hover:rounded-xl hover:scale-[1.025] duration-300 hover:shadow-[0_2px_0px_2px_skyblue]" src={project6} alt="" />
          </a>
          <div className="card-body bg-white py-5 text-center shadow">
            <p className="text-xs text-gray-600 my-2"> Food App</p>
            <h1 className="text-gray-600 my-3 text-2xl">React and CSS</h1>
            <div className="skill-icon flex gap-3 justify-center mb-5 my-4">
              <p className="w-14 h-14 rounded-lg flex justify-center items-center shadow-lg hover:shadow-blue bg-gray-100 hover:shadow-blue-300 hover:translate-3 duration-300"><img className="w-8 h-8" src={react} alt="" /></p>
              <p className="w-14 h-14 flex justify-center items-center shadow-lg hover:shadow-blue-300 hover:translate-2 duration-300 bg-gray-100"><img className="w-14" src={nodejs} alt="" /></p>
              <p className="w-14 h-14 flex justify-center items-center shadow-lg bg-gray-100 hover:shadow-blue-300 hover:translate-2 duration-300"><img className="w-12" src={express2} alt="" /></p>
              <p className="w-14 h-14 flex justify-center items-center shadow-lg bg-gray-100 hover:shadow-blue-300 hover:translate-2 duration-300"><img className="w-8 h-8" src={css} alt="" /></p>
              
            </div>
          </div>
        </div>
        
      </section>
    </div>
  );
};

export default Portfolio;
