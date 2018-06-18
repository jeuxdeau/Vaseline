import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const Fileupload = (props) => {

  let file;
  const fileChangedHandler = () => {
    file = event.target.files[0]
  }

  return (
    <div>
      <input type="file" onChange={fileChangedHandler} />
      <button onClick={uploadHandler}>Upload!</button>
    </div>
  )
}

Fileupload.propTypes = {
  //reverse: PropTypes.bool,
  //children: PropTypes.node,
}

export default Fileupload
