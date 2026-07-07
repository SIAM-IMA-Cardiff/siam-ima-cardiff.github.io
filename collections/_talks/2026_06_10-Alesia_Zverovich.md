---
layout: talk
title: "Sparse kernel density estimation using stochastic particle flows."
talk_date: 2026-06-10 14:00
speaker: Alesia Zverovich
location: Abacws 1.04
---

This talk focuses on particle-flow-based strategies for the sparse approximation of kernel-based functions. The proposed approach relies on a two-stage procedure: first, a data-restricted sequential sampling algorithm is used to construct an initial weighted sample, which is next locally optimised using stochastic gradient descent, emulating a charged-particle flow phenomenon. This enables, for instance, the sparse approximation of kernel density estimates in large-scale settings, where handling the full estimates would otherwise be numerically prohibitive. More generally, the considered approach can be applied to any function that can be expressed as a sum of kernels, such as functions arising in kernel regression. The effectiveness of the proposed strategies is illustrated on a series of examples.