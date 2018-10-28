import React from 'react'

import '../styles/Button.scss';

const Button = ({ link, children, alt = 'primary' } = {}) => {

  const classStyle = (alt === 'primary') ? 'btn btn-primary' : 'btn btn-second';

  return (
    <div>
      <a className={classStyle} href={link}>{children}</a>
    </div>
  )
}

export default Button