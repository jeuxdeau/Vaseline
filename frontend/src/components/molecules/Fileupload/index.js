import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Wrapper = styled.div`
font-family: ${font('primary')};
color: ${palette('grayscale', 0)};
`

const Fileupload = (props) => {
    let uploadfile;
    const fileChangedHandler = (event) => {
        const target = event.target
		uploadfile = target.files[0]
    }

    const uploadHandler = () => {
        let fileform = {
            "file": uploadfile,
            "remark": 'abc',
            "media": 1
        }
        props.onFileSubmit(fileform);
    }

    return (
        <div>
        <input type="file" onChange={fileChangedHandler} />
        <button onClick={uploadHandler}>Upload!</button>
        </div>
    )
}

export default Fileupload
