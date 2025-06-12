## RL$^3$: Boosting Meta Reinforcement Learning via RL inside RL$^2$

Bhatia, A., Nashed, SB., & Zilberstein, S. In _NeurIPS Workshop on Generalization in Planning_ (2023), In _Reinforcement Learning Conference_ (2025)<br> 
<small>
TL;DR: Incorporating task-specific Q-value estimates as inputs to a meta-RL policy can lead to improved generalization and better performance over longer adaptation periods.

[PDF](../files/BNZarxiv2024.pdf)
[Slides](../files/BNZgenplan23_slides.pdf)
[Code](https://github.com/bhatiaabhinav/RL3)
[Talk](https://neurips.cc/virtual/2023/79868)
</small>



### Abstract
Meta reinforcement learning (meta-RL) methods such as RL$^2$ have emerged as promising approaches for learning data-efficient RL algorithms tailored to a given task distribution. However, they show poor asymptotic performance and struggle with out-of-distribution tasks because they rely on sequence models, such as recurrent neural networks or transformers, to process experiences rather than summarize them using general-purpose RL components such as value functions. In contrast, traditional RL algorithms are data-inefficient as they do not use domain knowledge, but do converge to an optimal policy in the limit. We propose RL$^3$, a principled hybrid approach that incorporates action-values, learned per task via traditional RL, in the inputs to meta-RL. We show that RL$^3$ earns greater cumulative reward in the long term compared to RL$^2$ while drastically reducing meta-training time and generalizes better to out-of-distribution tasks. Experiments are conducted on both custom and benchmark discrete domains from the meta-RL literature that exhibit a range of short-term, long-term, and complex dependencies.




#### RL$^3$ vs RL$^2$ Demo
<p style="text-align:center">
<iframe style="center; width: 80%; height: auto; aspect-ratio: 16/9" src="https://www.youtube.com/embed/eLA_S1BQUYM" title="RL² vs RL³ Demo | RL³:  Boosting Meta RL via RL inside RL²" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</p>


