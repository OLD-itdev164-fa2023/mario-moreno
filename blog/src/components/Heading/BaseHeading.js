import { Heading } from "rebass"
import React from "react"
import PropTypes from "prop-types"

function BaseHeading({ children, ...rest }) {
  return <Heading {...rest}>{children}</Heading>
}

BaseHeading.propTypes = {
  children: PropTypes.node.isRequired,
}

export { BaseHeading }
