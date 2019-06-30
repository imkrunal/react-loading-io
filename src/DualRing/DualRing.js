import React from 'react'
import PropTypes from 'prop-types'
import { css, keyframes } from '@emotion/core'
import { convertToPx } from '../helpers'

const dualring = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

class DualRing extends React.Component {
  render () {
    const { size, sizeUnit, thickness, color, speed } = this.props
    let scale
    if (sizeUnit === 'em' || sizeUnit === 'rem') {
      scale = convertToPx(size) / 200
    } else {
      scale = size / 200
    }
    const translate = size * scale
    const border = thickness * 2

    return (
      <div>
        <div
          css={css`
            position: relative;
            width: ${`${size}${sizeUnit}`} !important;
            height: ${`${size}${sizeUnit}`} !important;
            transform: translate(
                -${`${translate}${sizeUnit}`},
                -${`${translate}${sizeUnit}`}
              )
              scale(${scale})
              translate(
                ${`${translate}${sizeUnit}`},
                ${`${translate}${sizeUnit}`}
              );
          `}
        >
          <div
            css={css`
              position: absolute;
              animation: ${dualring} ${speed}s linear infinite;
              width: 160px;
              height: 160px;
              top: 20px;
              left: 20px;
              border-radius: 50%;
              border: ${border}px solid ${color};
              border-color: ${color} transparent ${color} transparent;
            `}
          ></div>
        </div>
      </div>
    )
  }
}

DualRing.propTypes = {
  size: PropTypes.number,
  sizeUnit: PropTypes.string,
  color: PropTypes.string,
  thickness: PropTypes.number,
  speed: PropTypes.number
}

DualRing.defaultProps = {
  size: 200,
  sizeUnit: 'px',
  color: '#f08d43',
  thickness: 4,
  speed: 1
}

export default DualRing