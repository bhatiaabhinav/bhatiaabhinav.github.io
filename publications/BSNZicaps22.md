## Tuning the Hyperparameters of Anytime Planning: A Metareasoning Approach with Deep Reinforcement Learning

Bhatia, A., Svegliato, J., Nashed, S. B., & Zilberstein, S. (2022). In _Proceedings of the International Conference on Automated Planning and Scheduling_.<br>
<small>
TL;DR: Deep RL to determine optimal stopping point _and_ hyperparameters of anytime algorithms at runtime to optimize _utility_ of the final solution. Good results on _Anytime A*_ search algorithm and _RRT*_ motion planning algorithm.

[PDF](/files/BSNZicaps22.pdf)
[Poster](/files/BSNZicaps22_poster.pdf)
[Code](https://github.com/bhatiaabhinav/Metareasoning.jl)
[Talk](https://www.youtube.com/watch?v=sQE5AUTDJ38)
</small>

### Abstract
Anytime planning algorithms often have hyperparameters that can be tuned at runtime to optimize their performance.  While work on metareasoning has focused on when to interrupt an anytime planner and act on the current plan, the scope of metareasoning can be expanded to tuning the hyperparameters of the anytime planner at runtime. This paper introduces a general, decision-theoretic metareasoning approach that optimizes both the stopping point and hyperparameters of anytime planning. We begin by proposing a generalization of the standard meta-level control problem for anytime algorithms. We then offer a meta-level control technique that monitors and controls an anytime algorithm using deep reinforcement learning. Finally, we show that our approach boosts performance on a common benchmark domain that uses anytime weighted A* to solve a range of heuristic search problems and a mobile robot application that uses RRT* to solve motion planning problems.

<p style="text-align:center">
<iframe style="center; width: 80%; height: auto; aspect-ratio: 16/9" src="https://www.youtube.com/embed/sQE5AUTDJ38" title="Tuning Hyperparameters of Anytime Planning: A Metareasoning Approach with Deep RL - ICAPS 2022" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</p>