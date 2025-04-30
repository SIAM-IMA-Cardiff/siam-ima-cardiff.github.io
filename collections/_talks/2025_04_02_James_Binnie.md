---
layout: talk
title: "Dimension Estimation"
talk_date: 2025-04-02 14:00
speaker: James Binnie
location: Abacws 3.38
---

It is a standard assumption that datasets in high dimension have an internal structure which means that they in fact lie on, or near, subsets of a lower dimension.
A variety of dimension estimators have been developed to take advantage of this; yet there is little guidance on how to reliably use these estimators. We find that dimension estimators fit into different families according to the geometric information used to compute them. We carry out an extensive survey of the robustness of these estimators, including those based on persistent homology and magnitude. We account for the choice of their hyperparameters, the presence of noise, and the presence of curvature. We find that hyperparameter selection can overfit to data and generalise poorly to different geometries and levels of noise, making it difficult to determine how to apply an estimator without additional prior knowledge. In this talk I will go through the notion of dimension, motivations for dimension estimation, the types of estimators and examples thereof and results of our experiments.