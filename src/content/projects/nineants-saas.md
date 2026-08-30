---
title: "Workflow Automation SaaS — Solo Built"
description: "Workflow automation SaaS built by one developer. Python APIs, React frontend, MongoDB, Docker on Azure, plus production, monitoring, and user onboarding."
tags: ["Python", "React", "MongoDB", "Docker", "Azure"]
featured: true
order: 1
date: 2024-10-01
role: "Solo Developer"
---

## The problem

The product is anonymized since it is company IP, built during my time at Automation Boutique. It automates operational workflows for businesses through a web interface. As the only developer on the project, every early architecture decision was mine, from the data model to the deployment pipeline, and those choices shaped everything that came after.

## What I built

The backend is a set of Python APIs that handle workflow definitions, execution, and user management. MongoDB stores the workflow data, which fit well because workflow structures vary a lot between customers, and a flexible document model made that easier to handle. The React frontend talks to these APIs and gives users a clean way to build and track their automations.

## How it works

Everything runs in Docker containers on Azure. Containerizing from the start kept deployments predictable and made it straightforward to move between environments, and when something breaks, the container setup makes it clear where the problem lives.

Shipping the product was only half the work. I also run it in production, which means handling deploys, watching monitoring dashboards, and fixing bugs as they come in from real users. Onboarding new users became part of my job too. I walked customers through setup, collected their feedback, and used it to prioritize work, since small annoyances for users turned out to matter more than impressive features nobody asked for.

Working on the platform end to end taught me the full lifecycle of a SaaS product, from the first schema sketch to a paying customer running their business on it. It remains the project where I touched the widest range of problems, and the one that pushed me to grow the fastest as an engineer.
