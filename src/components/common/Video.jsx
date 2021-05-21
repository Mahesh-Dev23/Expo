import React from 'react'

function Video() {
    return (
        <div>
            <video width='400' controls id='achieveVid'><source src={`video/${1}`} type='video/mp4'/></video>
        </div>
    )
}

export default Video
