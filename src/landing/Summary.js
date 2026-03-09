import React from 'react'
export default function Summary() {
  const summary = "Quantitative Developer passionate about solving problems in the intersection of financial markets and low latency systems. Comfortable with Python/C++.";
  return (
    <>
      <h2 className="font-bold text-lg">SUMMARY</h2>
      <hr className="mb-2.5" />
      <h3>{summary}</h3>
    </>
  )
}
