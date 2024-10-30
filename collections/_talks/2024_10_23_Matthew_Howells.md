---
layout: talk
title: "Clinical Pathway Modelling of a Trauma & Orthopaedics Department"
talk_date: 2024-10-23 14:00
speaker: Matthew Howells
location: Abacws 3.38
---

The disruptions caused by COVID-19 continue to exacerbate backlogs in elective patient care across many countries, particularly in specialties like Orthopaedics. Orthopaedics faces dual pressures from these backlogs and an ageing population, necessitating efficient solutions. This research, conducted in collaboration with Cardiff and Vale University Health Board’s Trauma & Orthopaedics (T&O) department, aims to model the clinical pathways (CPs) within the specialty to alleviate system-wide pressures.
Clinical pathways are structured processes that standardize healthcare procedures for managing specific conditions or medical interventions. In this study, we apply the ALERGIA algorithm—used for learning probabilistic automata—to generalize the CPs provided by the T&O department. By doing so, we are able to allow for the inclusion of potential CPs that may not have been explicitly observed in the dataset. Furthermore, the algorithm aids in filtering out pathways considered statistically insignificant, enhancing the robustness and relevance of the extracted CPs.
We then use these refined CPs to parameterize a discrete-event simulation (DES) of the orthopaedic surgical pathway, helping staff make informed decisions on demand and capacity planning. This DES model is combined with a system dynamics (SD) simulation that assesses the burden of orthopaedic conditions in Primary Care, forming a sequential hybrid model. The model will enable hospital staff to make more informed decisions on demand and capacity planning, to help find strategies to alleviate the treatment backlog and improve care outcomes.