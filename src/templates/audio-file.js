import React from 'react'
import { Link } from 'gatsby'

const styles = {
  link: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    textDecoration: 'none',
    // border: '2px solid currentColor',
    borderRadius: '50%',
    position: 'absolute',
    width: '2em',
    height: '2em',

    right: 0,
    top: 0,
  },
}

export default ({ pageContext: { audioFile } }) => (
  <>
    <Link style={styles.link} to="/">
      <span>x</span>
    </Link>
  </>
)
