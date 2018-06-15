import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { SearchPage } from 'components'

storiesOf('SearchPage', module)
  .add('default', () => (
    <SearchPage />
  ))
