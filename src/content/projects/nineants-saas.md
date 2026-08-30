---
title: "Workflow Automation SaaS — Solo Built"
description: "Workflow automation SaaS built by one developer. Python APIs, React frontend, MongoDB, Docker on Azure, plus production, monitoring, and user onboarding."
tags: ["Python", "React", "MongoDB", "Docker", "Azure"]
featured: true
order: 1
date: 2024-10-01
---

This is a workflow automation SaaS platform I built as a solo developer during my time at Automation Boutique. The product lets businesses automate their operational workflows through a web interface, with Python APIs on the backend and a React frontend on top.

Being the only developer on the project meant every early architecture decision was mine. I designed the data model in MongoDB, decided how the backend services would be split, and set up the deployment pipeline. Those early choices shaped everything that came after, so I tried to keep the system simple to change while still solid enough to grow.

The backend is a set of Python APIs that handle workflow definitions, execution, and user management. MongoDB stores the workflow data, which fit well because workflow structures vary a lot between customers and a flexible document model made that easier to handle. The React frontend talks to these APIs and gives users a clean way to build and track their automations.

Everything runs in Docker containers on Azure. Containerizing from the start kept deployments predictable and made it straightforward to move between environments. When something breaks, the container setup makes it clear where the problem lives.

Shipping the product was only half the work. I also run it in production, which means handling deploys, watching monitoring dashboards, and fixing bugs as they come in from real users. Production has a way of teaching lessons that development never does, and this project gave me plenty of them.

Onboarding new users became part of my job too. I walked customers through setup, collected their feedback, and used it to improve the product. Talking directly with the people using the software changed how I prioritized work, since small annoyances for users turned out to matter more than impressive features nobody asked for.

Working on the platform end to end taught me the full lifecycle of a SaaS product, from the first schema sketch to a paying customer running their business on it. It remains the project where I touched the widest range of problems, and the one that pushed me to grow the fastest as an engineer.
