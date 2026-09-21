import React from 'react'
export default function Summary() {
  const summary = "Building market data systems, backtesting and trading infrastructure.";
  const languages = "C++, Python, Go";
  const technologies = "Polars, Redis, Kafka, Docker, Kubernetes, Terraform, Elasticsearch";
  const cloud = "AWS, GCP, Cloudflare";
  return (
    <>
    <h3>{summary}</h3>
    <h3><span className="font-semibold">Languages:</span> {languages}</h3>
    <h3><span className="font-semibold">Technologies:</span> {technologies}</h3>
    <h3><span className="font-semibold">Cloud:</span> {technologies}</h3>
    </>
  )
}
