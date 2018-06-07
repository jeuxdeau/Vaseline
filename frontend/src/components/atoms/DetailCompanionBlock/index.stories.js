import React from 'react'
import { storiesOf } from '@kadira/storybook'
import DetailCompanionBlock from '.'

storiesOf('DetailCompanionBlock', module)
  .add('default', () => (
    <DetailCompanionBlock>Hello</DetailCompanionBlock>
  ))
  .add('reverse', () => (
    <DetailCompanionBlock reverse>Hello</DetailCompanionBlock>
  ))
