import React from 'react'
export default function Summary() {
  const summary = "Quantitative Developer passionate about solving problems in the intersection of financial markets and low latency systems.";
  const languages = "Python, C++, Go";
  const technologies = "Redis, Kafka, Docker, Kubernetes, Terraform, Polars";
  return (
    <>
    <h3>{summary}</h3>
    <h3><span className="font-semibold">Languages:</span> {languages}</h3>
    <h3><span className="font-semibold">Technologies:</span> {technologies}</h3>
    </>
  )
}
