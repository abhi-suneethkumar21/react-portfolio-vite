// src/data/experience.js
const exp = [
  {
    role: "Software Engineer 2",
    company: "Epsilon",
    range: "Jul 2025 — Present",
    location: "Bangalore, IN",
    points: [
      "Designed and deployed production-grade RAG pipelines on Amazon Bedrock Knowledge Bases with OpenSearch vector indices, using semantic chunking, hybrid search, and reranking; reduced end-to-end latency from 30s to 10s handling ~300 RPM.",
      "Built LLM-powered agent workflows using Bedrock Inline Agents with custom Action Groups, and architected a runtime-configurable agent framework via MCP servers on AgentCore Runtime for dynamic tool and knowledge injection.",
      "Engineered a distributed incident communication platform on AWS ECS/Fargate with a many-to-many subscription system for multi-channel notifications, eliminating 80% of manual coordination across teams.",
      "Epsilon India Impact Award finalist across 3 independently nominated solutions; received commendation from the Managing Director.",
    ],
  },
  {
    role: "Software Engineer 1",
    company: "Epsilon",
    range: "Aug 2023 — Jun 2025",
    location: "Bangalore, IN",
    points: [
      "Lead development of SRE Insights dashboard used across Delivery, Engineering & Ops.",
      "Built SLA Dashboard with client-focused tracking; sole front-end developer.",
      "Deployments via Docker + Nginx on Linux, GoCD/AWS Fargate; added telemetry & analytics.",
      "Recognized in multiple SaaSOps All Hands for impactful contributions.",
    ],
  },
];

export default exp;
