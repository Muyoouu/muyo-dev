---
title: "Treasury Data Platform"
description: "A B2B data platform for treasury teams at Automation Boutique: Python pipelines that collect and clean treasury data, a React dashboard on top, MongoDB and Docker on Azure. I own the technical execution end to end, production deploys included."
tags: ["Python", "React", "MongoDB", "Docker", "Azure"]
featured: true
order: 1
date: 2024-10-01
role: "Software Engineer"
---

## The problem

Treasury teams deal with a stream of numbers coming from everywhere: accounts, transactions, and cash positions spread across banks, entities, and formats. Keeping that picture straight by hand means spreadsheets stitched together at odd hours, and nobody trusts a spreadsheet that only one person knows how to update.

The product takes that data in through pipelines, cleans and structures it, and serves it back through a web dashboard, so the people responsible for the numbers can actually see where things stand. The product itself isn't public, so this datasheet covers how it's built instead of what it looks like.

The team shapes the product together, from what to build next down to the architecture overview. I've owned most of the technical execution since the first commit, and a junior engineer has since joined to share the build.

## What I built

The backend is a set of Python services that handle ingestion, transformation, and storage. Data arrives in different shapes depending on the source, so MongoDB earned its place early: a flexible document model absorbs those differences without a migration for every new feed. The React frontend reads from the APIs and gives treasury teams a way to explore their own data without asking anyone to run a query for them.

## How it works

Everything runs in Docker containers on Azure. Containerizing from the start kept deployments predictable and made it straightforward to move between environments, and when something breaks, the container setup makes it clear where the problem lives.

Shipping the product was only half the work. I also run it in production, which means handling deploys, watching monitoring dashboards, and fixing bugs as they come in from real users. Onboarding new customers became part of my job too. I walked them through setup, collected their feedback, and used it to prioritize work, since small annoyances for users turned out to matter more than impressive features nobody asked for.

Building the platform end to end taught me the full lifecycle of a B2B data product, from the first schema sketch to a paying customer running decisions on it. It remains the project where I touched the widest range of problems, and the one that pushed me to grow the fastest as an engineer.
