import React from 'react'
import { storiesOf } from '@storybook/react'
import { number, color } from '@storybook/addon-knobs'
import { DualRing } from './'

const sizeOptions = {
  range: true,
  min: 50,
  max: 200,
  step: 1
}

const speedOptions = {
  range: true,
  min: 0.01,
  max: 10,
  step: 0.02
}

const widthOptions = {
  range: true,
  min: 1,
  max: 20,
  step: 1
}

storiesOf('DualRing', module)
  .add('default', (): JSX.Element => <DualRing />)
  .add(
    'custom',
    (): JSX.Element => (
      <DualRing
        size={number('Size', 150, sizeOptions)}
        color={color('Color', '#4CA7FD')}
        speed={number('Speed', 1, speedOptions)}
        width={number('Width', 4, widthOptions)}
      />
    )
  )
