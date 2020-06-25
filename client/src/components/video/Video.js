import React, { useState } from 'react';
import { increaseLikesAsync, selectVideoDetails } from './VideoSlice';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PauseIcon from '@material-ui/icons/Pause';
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import ReactPlayer from 'react-player';
import Timer from 'react-compound-timer'
import { useSelector, useDispatch } from 'react-redux';

export default function Video() {
  const dispatch = useDispatch();
  const [playing, setPlaying] = useState(false);
  const { likes, views } = useSelector(selectVideoDetails);

  const handlePlayPause = (play, pause) => {
    if (playing) {
      pause();
    } else {
      play();
    }

    setPlaying(!playing);
  }

  return (
    <Card className="video-container">
      <CardContent>
        <ReactPlayer
          className="video-player"
          url='http://clips.vorwaerts-gmbh.de/VfE_html5.mp4'
          playing={playing}
        />
        <CardActions>
          <div className="card-actions-container">
            <div className="play-container">
              <Timer
                initialTime={0}
                startImmediately={false}
              >
                {({ start, pause }) => (
                  <>
                    <span><Timer.Hours />:<Timer.Minutes />:<Timer.Seconds /></span>
                    <IconButton onClick={() => handlePlayPause(start, pause)} aria-label="play/pause">
                      {playing ? <PauseIcon /> : <PlayArrowIcon />}
                    </IconButton>
                  </>
                )}
              </Timer>
            </div>
            <div className="likes-container">
              <span className="likes">{likes}</span>
              <IconButton onClick={() => dispatch(increaseLikesAsync())} aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
            </div>
            <span className="views">{views}</span>
            <RemoveRedEyeIcon className="eye-icon" />
          </div>
        </CardActions>
      </CardContent >
    </Card >
  );
}