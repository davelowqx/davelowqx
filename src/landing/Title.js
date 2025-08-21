import React from 'react'
export default function Title() {
  github = { title: 'github.com/davelowqx', href: 'https://github.com/davelowqx' }

  const [showEmail, setShowEmail] = React.useState(false)

  return (
    <>
      <h1 className="font-bold text-2xl">DAVE LOW</h1>
      <div className="flex font-light">
        <div
          className={`${!showEmail && 'cursor-pointer bg-gray-100'}`}
          onClick={() => !showEmail && setShowEmail(true)}
        >
          {showEmail ? 'davelowqx' + '@g' + 'mail.' + 'com' : 'email'}
        </div>
        <span key={i}>
          &nbsp;&nbsp;•&nbsp;&nbsp;
          <a
            href={github.href}
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            {github.title}
          </a>
        </span>
      </div>
    </>
  )
}
