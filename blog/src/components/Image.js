import React from "react"
import { StaticImage } from "gatsby-plugin-image"

function Image() {
  return (
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <StaticImage
        src="../images/example.png"
        width={300}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="Gatsby logo"
        style={{ marginBottom: `1.45rem` }}
      />
    </div>
  )
}

export default Image
