import React from 'react'
export default function Summary() {
  const summary = "Obsessed with solving problems, from debugging complex software to restoring classic cars. Always seeking growth and meaningful challenges in pursuit of a life worth living.";
  return (
    <>
      <h2 className="font-bold text-lg">SUMMARY</h2>
      <hr className="mb-2.5" />
      <h3>{summary}</h3>
    </>
  )
}
