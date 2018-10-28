import React from 'react'

import '../styles/Paragraph.css';

const Paragraph = ({ paragraph }) => {
  const p = paragraph.content.map((text, index) => (<p key={index}>{text}</p>))

  return (
  <div className="paragraph">
      {p}
  </div>)
}

export default Paragraph