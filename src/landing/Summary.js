import React from 'react'
export default function Summary() {
  const summary = "Drawn to challenging problems with high ownership and outsized impact.";
  const languages = "Python, C++, Go";
  const technologies = "Redis, Kafka, Docker, Kubernetes, Terraform, Elasticsearch, Polars";
  return (
    <>
    <h3>{summary}</h3>
    <h3><span className="font-semibold">Languages:</span> {languages}</h3>
    <h3><span className="font-semibold">Technologies:</span> {technologies}</h3>
    </>
  )
}
