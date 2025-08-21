import React from 'react'
export default function Title() {
  const linkedin = 'linkedin.com/in/davelowqx';

  const [showEmail, setShowEmail] = React.useState(false);
  const [showNum, setShowNum] = React.useState(false);

  return (
    <>
      <h1 className="font-bold text-2xl">DAVE LOW</h1>
      <div className="flex font-light">
        <div
          className={`${!showEmail && 'cursor-pointer bg-gray-100'}`}
          onClick={() => !showEmail && setShowEmail(true)}
        >
          {showEmail ? 'davelowqx' + '[at]g' + 'mail.' + 'com' : 'email'}
        </div>
        &nbsp;&nbsp;•&nbsp;&nbsp;
        <div
          className={`${!showNum && 'cursor-pointer bg-gray-100'}`}
          onClick={() => !showNum && setShowNum(true)}
        >
          {showNum ? '+' + '65 ' + '881' + (5+2) + '958' + (2+2) : 'phone'}
        </div>
        &nbsp;&nbsp;•&nbsp;&nbsp;
        <span>
          <a
            href={`https://{linkedin}`}
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            {linkedin}
          </a>
        </span>
      </div>
    </>
  )
}
