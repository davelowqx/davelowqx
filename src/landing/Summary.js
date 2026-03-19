import React from 'react'
export default function Summary() {
  const summary = "Quantitative Developer passionate about solving problems in the intersection of financial markets and low latency systems. Python/C++/Go";
  const languages = "Python, C++, Go";
  const skills = "Redis, Kafka, Docker, Kubernetes, Terraform, Polars";
  return (
    <>
    <h3>{summary}</h3>
    <br/>
    <h3>{languages}</h3>
    <br/>
    <h3>{skills}</h3>
    </>
  )
}
