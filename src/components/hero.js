import React from "react"

import Button from "../components/button"

const Hero = ({ text, image, cta }) => (
  <section className="bg-primary" style={{ minHeight: `400px` }}>
    <div className="w-4/5 md:w-2/3 mx-auto flex flex-wrap justify-between pt-6 md:pt-16">
      <div>
        <h2 className="w-full md:w-1/2 text-white font-bold text-xl md:text-2xl mr-20 font-body mt-0">
          {text}
        </h2>
        {cta && <Button to={cta.to}>{cta.text}</Button>}
      </div>
      <div
        className="w-full md:w-1/2 items-center"
        style={{ height: `300px`, width: `300px` }}
      >
        {image}
      </div>
    </div>
  </section>
)

export default Hero
