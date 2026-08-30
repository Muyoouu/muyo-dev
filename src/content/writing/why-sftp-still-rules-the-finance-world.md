---
title: "Why SFTP Still Rules the Finance World"
description: "Why legacy SFTP connections remain the backbone of bulk data exchange in B2B finance, and what building treasury software taught me about respecting boring tools."
pubDate: 2025-12-20
url: "https://medium.com/automationboutique/why-sftp-still-rules-the-finance-world-5460fe5db0c0"
tags: [data-engineering, product-management, software-engineering, fintech, finance-and-banking]
---

### Reality check before you even think about implementing AI

![](https://cdn-images-1.medium.com/max/1024/0*cUeUCu6V9Ai51bo8)

*Photo by [Zoshua Colah](https://unsplash.com/@zoshuacolah) on [Unsplash](https://unsplash.com), a hall of books and files… it somewhat resembles an SFTP filesystem 😉*

In every tech circle right now, the conversation is dominated by AI agents, real-time data streams, and the “modern” data stack. It is easy to get the impression that every problem is solved with a vector database or a streaming API.

But if you are building in the world of B2B finance, you quickly run into a funny reality check. Before you can even think about implementing AI, you usually have to figure out how to connect to a legacy protocol called SFTP.

When I moved from accounting into software engineering, I thought I was done with these kinds of legacy tools. Working at a startup building an ETL tool for treasury, I expected everything to be about REST APIs and modern data stacks.

The reality is that once you get into the world of finance and corporate treasury, the “modern” tools often take a backseat. Most crucial data still moves through SFTP. This felt like a step backward at first, but after a year of observations, I’ve realized that these “boring” tools are the standard for very practical reasons.

## The API Shift and Its Real Costs

It is not fair to say that APIs are unstable. There is a huge movement toward modern integration for a reason. APIs allow for instant feedback and real-time reconciliation. If handled properly, they can be much more efficient for modern, event-driven architectures.

However, the logic overhead required to make an API truly reliable for financial bulk data is immense. Retrying a failed API call isn’t always straightforward. If a connection drops during a paginated request of 20,000 records, resuming exactly where you left off is complex to build.

There is also the issue of standardization. While most APIs are “standard,” every financial provider introduces unique quirks, especially regarding authentication and rate limits. Supporting a wide range of providers via API requires tremendous development effort to handle all the edge cases.

## Why “Boring” Still Wins in B2B

In the B2B world, the preference for SFTP, often called Host-to-Host (H2H) connectivity, is a strategic choice.

1. **Reliability is Built-In** 
SFTP is asynchronous by design. You upload a file, such as an MT940 statement, a camt.053 file, or even a simple CSV with thousands of rows. If the connection drops, you just resume the file transfer. You don’t need complex state management logic to know which specific records were processed. The file itself is the state. The provider picks it up when they are ready, which handles the “bulk” nature of finance much more gracefully than a series of HTTP requests.

2. **Straightforward Scaling** 
From an engineering perspective, SFTP is remarkably flexible. You can often use standard libraries or battle-tested tools like OpenSSH and rclone to manage connections for multiple different hosts with very little extra code. With APIs, adding a new provider often means writing a completely new integration layer to handle their specific JSON structure and auth flow. SFTP stays the same regardless of who is on the other end.

3. **The Tangible Audit Trail** 
Coming from an accounting background at PwC, I appreciate a hard audit trail. A file is a physical artifact. It has a hash, a timestamp, and a specific size. You can archive it for years. If an auditor asks why a transaction happened, you can point to the exact file that triggered it. Maintaining that same level of tangible evidence in an API-driven system requires significantly more engineering overhead.

## The Lesson from Excel

This reminds me of why people still love Excel. Despite its limitations with big data and its status as a legacy tool, modern analytics platforms still fail to replace it. Just like Excel, SFTP has a special place in finance because it provides the user with a sense of control and stability.

As a developer who cares about the product side of things, I’ve learned that my job isn’t to fight these legacy workflows, but to respect them. The value isn’t in forcing a provider to change its protocol or telling a treasurer they can’t use a spreadsheet. The goal is to build software that makes these “boring” tools more powerful, secure, and automated.

This has made me think quite a bit about how we actually build for this environment. Over the next few posts, I want to share my experience navigating this space. I plan to cover both the business use cases that make these tools necessary and the engineering patterns required to keep everything secure and efficient.

In the next post, I will get into the technical side of the integration. I will share how to orchestrate a stack using tools like OpenSSH and Python to build a connection that is stable enough to set and forget. We will look at how to handle the “logic overhead” of these legacy connections without overcomplicating the codebase.

