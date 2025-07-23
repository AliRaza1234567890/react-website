import React from 'react'
import MultiplePizzas from '../assets/multiplePizzas.jpeg'
import '../styles/About.css'

function About () {
  return (
    <div className='about'>
      <div className='aboutTop' style={{ backgroundImage: `url(${MultiplePizzas})` }}>
      </div>
      <div className='aboutBottom'>
        <h1>ABOUT US</h1>
        <p>
          In restaurants, pizza can be baked in an oven with fire bricks above the heat source, an electric deck oven, a conveyor belt oven, or in traditional style in a wood
          or coal-fired brick oven. The pizza is slid into the oven on a long paddle, called "peel", and baked directly on hot bricks, a screen (a round metal grate,
          typically aluminum), or whatever the oven surface is. Before use, a peel is typically sprinkled with cornmeal to allow the pizza to easily slide on and off
          it.When made at home, a pizza can be baked on a pizza stone in a regular oven to reproduce some of the heating effect of a brick oven. Cooking directly
          on a metal surface results in too rapid heat transfer to the crust, burning it.Some home chefs use a wood-fired pizza oven, usually installed outdoors.
        </p>
      </div>
    </div>
  )
}

export default About
