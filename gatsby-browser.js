/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from 'react'

import Layout from './src/layouts/layout'
import Player from './src/components/Player'

export const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  console.log('PROPS Browser', props)
  const {
    pageContext: { allAudioFiles, audioFile },
  } = props

  return (
    <Layout {...props}>
      <Player
        selectedKey={audioFile && audioFile.key}
        audioFiles={allAudioFiles}
      >
        {({ play, pause, isPlaying, isValidAudioFileKey }) =>
          React.cloneElement(element, {
            play: play,
            pause: pause,
            isPlaying: isPlaying,
            isValidAudioFileKey: isValidAudioFileKey,
            selectedKey: audioFile && audioFile.key,
          })
        }
      </Player>
    </Layout>
  )
}
