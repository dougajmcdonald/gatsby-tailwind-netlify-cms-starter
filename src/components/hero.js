import React from "react"

import Button from "../components/button"

const Hero = ({ text, image, cta }) => (
  <section className="bg-primary" style={{ minHeight: `400px` }}>
    <div className="w-4/5 md:w-2/3 mx-auto flex flex-wrap md:justify-between pt-6 md:pt-16">
      <div className="w-full md:w-1/2">
        <h2 className="text-white font-bold text-xl md:text-2xl md:mr-20 font-body mt-0">
          {text}
        </h2>
        {cta && <Button to={cta.to}>{cta.text}</Button>}
      </div>
      <div
        className="w-full md:w-1/2"
        style={{ minHeight: `300px`, minWidth: `300px` }}
      >
        {image}
      </div>
    </div>
  </section>
)

export default Hero
