/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from 'react'

import Layout from './src/layouts/layout'
import Player from './src/components/Player'

export const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  console.log('PROPS SSR', props)
  const {
    pageContext: { allAudioFiles, audioFile },
  } = props

  return (
    <Layout {...props}>
      <Player
        selectedKey={audioFile && audioFile.key}
        audioFiles={allAudioFiles}
      >
        {(play, isValidFileKey) =>
          React.cloneElement(element, {
            play: play,
            isValidFileKey: isValidFileKey,
          })
        }
      </Player>
    </Layout>
  )
}
