import React from 'react'
export default function Summary() {
  const summary = "I'm deeply obsessed with solving problems, particularly in the intersection of financial markets and low-latency systems. Constantly in pursuit of new challenges and dedicated to lifelong learning.";
  return (
    <>
      <h2 className="font-bold text-lg">SUMMARY</h2>
      <hr className="mb-2.5" />
      <h3>{summary}</h3>
    </>
  )
}
