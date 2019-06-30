import React from 'react'
import serializer from 'jest-emotion'
import renderer from 'react-test-renderer'
import { Rolling } from '..'

expect.addSnapshotSerializer(serializer)

it('rolling renders correctly', () => {
  const tree = renderer.create(<Rolling />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('px converts', () => {
  const tree = renderer.create(<Rolling size={10} sizeUnit="em" />).toJSON()
  expect(tree).toMatchSnapshot()
})