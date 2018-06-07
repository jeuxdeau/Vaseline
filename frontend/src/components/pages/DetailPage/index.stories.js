import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { DetailPage } from 'components'

storiesOf('DetailPage', module)
  .add('default', () => (
    <DetailPage />
  ))
