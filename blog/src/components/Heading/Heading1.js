import { BaseHeading } from "./BaseHeading"
import React from "react"

const Heading1 = props => {
  return (
    <BaseHeading as="h1" fontSize={[3, 4, 5]} marginBottom={3} {...props} />
  )
}

export { Heading1 as H1 }
