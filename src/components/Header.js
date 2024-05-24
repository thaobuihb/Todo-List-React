import React from 'react'

function Header({title, subTitle}) {
  return (
    <h1 id="title">
        {title}
        <span className="title-span">{subTitle}</span>
      </h1>
  );
}

export default Header