---
layout: talk
title: "Exotic options in fractal activity time models with the Student distribution of log-returns."
talk_date: 2025-05-21 13:00
speaker: Bader Saidan
location: Abacws 1.04
---

Modelling financial price movements is crucial for both investment strategies and derivative pricing, see the fundamental work of (Granger, 2005). (Barndorff-Nielsen, 2001) (Barndorff-Nielsen, 2005) introduced supOU and related models incorporating various dependence structure for option pricing and hedging.
 
Although stochastic models are widely adopted in asset pricing, they face difficulties in accurately capturing the empirical properties of financial returns. These challenges include non-normal, fat-tailed distributions and the dependence structure of squared and absolute returns, commonly referred to as the Taylor effect (Granger, 2005) and (Heyde, 2009). To remedy this issue, (Barndorff, 2012) explored time-changed that use the Lévy processes with Student distribution, normal inverse Gaussian (NIG) distribution and variance-gamma (VG) distributions. It is important to note that while increments of Lévy processes are independent and their marginal distribution is non-Gaussian, but the dependencies of squared returns are not adequately described.
 
We consider the fractal activity geometric Brownian motion (FATGBM) model proposed by (Heyde, 2005). We focus on the FATGBM with Student marginals because log-returns for real data are well fitted by the location scale Student distribution. This model captures key empirical features of returns; the absence of correlation while preserving dependence, as well as distributions with heavier tails and higher peaks compared to the Gaussian distribution. Specifically, it extends geometric Brownian motion by evaluating standard Brownian motion at a random activity time rather than calendar time.
 
It is evident that the activity time process is approximately self-similar. Therefore, we need a method that can incorporate both the required distributional and dependence features as well as the property of asymptotic self-similarity. We note that the inverse gamma distribution is infinitely divisible and self-decomposable and based on that we construct the fractal activity time through Ornstein-Uhlenbeck (OU)-type process which has the inverse gamma distribution. After construction of this fractal activity time, we use so-called skew-correcting martingale that imposes parameter restrictions to ensure that {e^{-rt}S_{t}} is a martingale, which relates to the absence of arbitrage. 
 
We derive options pricing formulae for different derivatives which are digital options or cash-or-nothing, power options which are basically the standard European options (vanilla options) with the underlying asset's price raised to a certain power. Finally, barrier options which are considered as exotic options, we use the Girsanov theorem and the joint conditional density to drive pricing formulae for these options. We run numerical simulation to confirm the derived formulae by using the Monte-Carlo method.