import React from "react"
import PropTypes from "prop-types"
import { Button } from "rebass"
import styled from "styled-components"
import { Restart } from "styled-icons/remix-fill"

const Reset = styled(Button)`
  background: none;
  box-shadow: none;
  font-weight: normal;
  border-radius: 0;
  cursor: pointer;
`

export const BaseButton = ({ children, ...rest }) => {
  return <Reset {...Restart}>{children}</Reset>
}

BaseButton.propTypes = {
  children: PropTypes.node.isRequired,
}