import React from 'react'
import { storiesOf } from '@kadira/storybook'
import CompanionUpdateBlock from '.'

storiesOf('CompanionUpdateBlock', module)
  .add('default', () => (
    <CompanionUpdateBlock>Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.</CompanionUpdateBlock>
  ))
  .add('reverse', () => (
    <CompanionUpdateBlock reverse>Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.</CompanionUpdateBlock>
  ))
  .add('palette', () => (
    <CompanionUpdateBlock palette="primary">Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.</CompanionUpdateBlock>
  ))
  .add('palette reverse', () => (
    <CompanionUpdateBlock palette="primary" reverse>
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </CompanionUpdateBlock>
  ))
  .add('palette opaque', () => (
    <CompanionUpdateBlock palette="primary" opaque>
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </CompanionUpdateBlock>
  ))
  .add('palette opaque reverse', () => (
    <CompanionUpdateBlock palette="primary" opaque reverse>
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </CompanionUpdateBlock>
  ))
