import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const Fileupload = ({ children, ...props }) => {

  let formData = new FormData();
  const onSubmit = () => {

  }

  return (
    <div>
        <h1>upload your photo</h1>
        <input
            type="file"
            multiple={false}
            ref={(input) => { this.inputElement = input; }}
            accept=".jpg,.jpeg,.png"
            onChange={this.handleChange}
          />
        <button onClick={this.handleSubmit}>submit</button>
    </div>
  )
}

Fileupload.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}

export default Fileupload
