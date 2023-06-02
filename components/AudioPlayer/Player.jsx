import React, {useState} from 'react';
import Box from '@mui/material/Box';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import CloseIcon from '@mui/icons-material/Close';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Fade from 'react-reveal/Fade';
import Image from "next/image";

function Player() {
  const [Source, Set_Source] = useState('/audio.mp3');
  const [Toggle_player, Set_Toggle_player] = useState(false);
  return (
    <>
      <Box sx={{position: 'fixed', left: '20px', bottom: '20px', zIndex: 20, display: {md: 'block', xs: 'none'}}}>
        <Box
          onClick={() => {
            Set_Toggle_player(true);
            Set_Source('audio.mp3')
          }}
          sx={Toggle_player ? {display: 'none'} : {
            width: '80px',
            height: '80px',
            overflow: 'hidden',
            borderRadius: '50%',
            background: 'linear-gradient(180deg, #FBD005 0%, #F58320 86.46%)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            "&:hover": {transform: 'scale(0.9)'},
            "&:hover svg": {transform: 'scale(1.3)'}
          }}>
          <Image alt={'taisen'} src={'/logo motion website.gif'} width={80} height={80} unoptimized={true}/>
          {/*<PlayArrowIcon sx={{fontSize: '40px', transition: 'all 0.3s ease',}}/>*/}
        </Box>

        <Fade cascade left>
          <Box sx={Toggle_player ? {
            position: 'relative',
            opacity: 0.6,
            transition: 'all 0.3s ease',
            "&:hover": {opacity: 1}
          } : {display: 'none'}}>
            <Box sx={{borderRadius: '6px', overflow: 'hidden', width: '400px', height: '100px'}}>
              <AudioPlayer
                src={Source}
                autoPlayAfterSrcChange={false}
                style={{
                  background: 'linear-gradient(180deg, #FBD005 0%, #F58320 86.46%)',
                  width: '100%',
                  height: '100%'
                }}
              />
            </Box>
            <Box onClick={() => {
              Set_Toggle_player(false);
              Set_Source('/audio.mp3')
            }} sx={{
              width: '30px',
              height: '30px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '50%',
              background: '#FBD005',
              position: 'absolute',
              top: '-15px',
              right: '-10px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              "&:hover svg": {transform: 'scale(1.3)'}
            }}>
              <CloseIcon sx={{color: '#16021F', transition: 'all 0.3s ease'}}/>
            </Box>
          </Box>
        </Fade>
      </Box>
    </>
  )
}

export default Player
