import React, { PropTypes, Component } from 'react'
import Dropzone from 'react-dropzone'
import request from 'superagent'

/*const Fileupload = (props) => {
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
}*/

class Fileupload extends Component {
    onDrop(files) {
        var file = new FormData()
        file.append('name', files[0])
        var req=request
                    .post('/api/images/')
                    .send(file);
        req.end(function(err, response) {
            console.log("upload done!!!!");
        });
    }

    render() {
        return (
        <div>
            <Dropzone onDrop={this.onDrop}>
                <div>Try dropping some files here, or click to select files to upload.</div>
            </Dropzone>
        </div>
        )
    }
}

export default Fileupload