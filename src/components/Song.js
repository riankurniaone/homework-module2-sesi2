import React, {Component} from "react";

const ContainerSong = ({url, SongTitle, Artist}) => {
  return(
    <div className="song_wrapper">
    <div className="song_title">
    <h2>{SongTitle}</h2>
    <div className="song_artist">
    <p>{Artist}</p>
    <div className="song_image">
      <img src={url} />
      <div><button id="btnSelect" type="submit">
            Select
          </button>
      </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default ContainerSong;