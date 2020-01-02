import React from "react"

const Hero = ({ text, image }) => (
  <section className="bg-primary font-body" style={{ height: `400px` }}>
    <div className="w-2/3 mx-auto flex justify-between pt-16">
      <h2 className="w-1/2 text-white font-bold text-2xl mr-12">{text}</h2>
      <div className="w-1/2" style={{ height: `300px` }}>
        {image}
      </div>
    </div>
  </section>
)

export default Hero
