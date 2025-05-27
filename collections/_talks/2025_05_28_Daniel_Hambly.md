---
layout: talk
title: "Determining paths of a fixed length "
talk_date: 2025-05-28 14:00
speaker: Daniel Hambly
location: Abacws 1.04
---

This talk addresses the NP-hard problem of finding fixed-length s-t paths in arc-weighted graphs - specifically, identifying a path from a source node s to a target node t whose length is as close to a given value k. Unlike many existing approaches that focus on paths with exactly k nodes, our work considers the length of the path as the total of the arc weights. To tackle this problem, we introduce two heuristic algorithms: a local search approach that iteratively produces candidate paths, and a backtracking-based method that leverages heuristics to guide the selection of the next node during exploration.