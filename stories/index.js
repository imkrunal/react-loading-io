import React from 'react'
import { storiesOf } from '@storybook/react'
import { css } from '@emotion/core'
import { Eclipse, Rolling, DualRing, Ball, Spinner } from '../src'

storiesOf('Spinners', module)
  .add('All', () => (
    <div
      css={css`
        display: flex;
      `}
    >
      <Eclipse size={64} />
      <Rolling size={64} />
      <DualRing size={64} />
      <Ball size={64} />
      <Spinner size={80} />
    </div>
  ))
  .add('Eclipse', () => <Eclipse />)
  .add('Rolling', () => <Rolling />)
  .add('DualRing', () => <DualRing />)
  .add('Ball', () => <Ball />)
  .add('Spinner', () => <Spinner />)
