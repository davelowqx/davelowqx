import React from 'react'
export default function Title() {
  const links = [
    { title: 'github.com/davelowqx', href: 'https://github.com/davelowqx' },
    {
      title: 'linkedin.com/in/davelowqx',
      href: 'https://linkedin.com/in/davelowqx',
    },
  ]
  const [showEmail, setShowEmail] = React.useState(false)

  return (
    <>
      <h1 className="font-bold text-2xl">DAVE LOW</h1>
      <div className="flex font-light">
        <div
          className={`${!showEmail && 'cursor-pointer bg-gray-100'}`}
          onClick={() => !showEmail && setShowEmail(true)}
        >
          {showEmail ? 'davelowqx[at]gmail' : 'email'}
        </div>
        {links.map(({ title, href }, i) => (
          <span key={i}>
            &nbsp;&nbsp;•&nbsp;&nbsp;
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              {title}
            </a>
          </span>
        ))}
      </div>
    </>
  )
}
