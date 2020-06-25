import React, { useState } from 'react';
import { increaseLikesAsync } from './VideoSlice';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PauseIcon from '@material-ui/icons/Pause';
import ReactPlayer from 'react-player';

export default function Video() {
  const [playing, setPlaying] = useState(false);

  const handlePlayPause = () => {
    setPlaying(!playing);
  }

  return (
    <Card className="video-container">
      <CardContent>
        <ReactPlayer
          url='http://clips.vorwaerts-gmbh.de/VfE_html5.mp4'
          playing={playing}
        />
        <CardActions>
          <IconButton onClick={handlePlayPause} aria-label="play/pause">
            {playing ? <PauseIcon /> : <PlayArrowIcon />}
          </IconButton>
          <IconButton onClick={increaseLikesAsync} aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
        </CardActions>
      </CardContent>
    </Card>
  );
}