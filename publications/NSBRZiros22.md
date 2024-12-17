## Selecting the Partial State Abstractions of MDPs: A Metareasoning Approach with Deep Reinforcement Learning

Nashed, S.B., Svegliato, J., Bhatia, A., Russell S., Zilberstein, S. (2022). In _IEEE/RSJ International Conference on Intelligent Robots and Systems_.<br>
<small>
TL;DR: Deep RL to select the most informative partial state abstractions for MDPs at runtime to optimize the time-dependent utility of the final solution. Good results on a variety of domains.

[PDF](files/NSBRZiros22.pdf)
</small>


### Abstract
Markov decision processes (MDPs) are a common general-purpose model used in robotics for representing sequential decision-making problems. Given the complexity of robotics applications, a popular approach for approximately solving MDPs relies on state aggregation to reduce the size of the state space but at the expense of policy fidelity—offering a trade-off between policy quality and computation time. Naturally, this poses a challenging metareasoning problem: how can an autonomous system dynamically select different state abstractions that optimize this trade-off as it operates online? In this paper, we formalize this metareasoning problem with a notion of time-dependent utility and solve it using deep reinforcement learning. To do this, we develop several general, cheap heuristics that summarize the reward structure and transition topology of the MDP at hand to serve as effective features. Empirically, we demonstrate that our metareasoning approach outperforms several baseline approaches and a strong heuristic approach on a standard benchmark domain.

