## Tuning the Hyperparameters of Anytime Planning: A Deep Reinforcement Learning Approach
Bhatia, A., Svegliato, J., & Zilberstein, S. (2021). In _ICAPS Workshop on Heuristics and Search for Domain-independent Planning_.<br>
<small>
TL;DR: Deep RL to control hyperparameters of anytime algorithms at runtime to optimize quality of the final solution. Good results on _Anytime A*_ search algorithm.

[PDF](files/BSZhsdip2021.pdf)
[Talk](https://www.youtube.com/watch?v=6oiFsbbYOLM)
</small>


### Abstract
Many anytime algorithms have adjustable hyperparameters that affect their speed and accuracy. However, while existing work on metareasoning has focused on deciding when to interrupt an anytime algorithm and act on the current solution, there has not been much work on tuning the hyperparameters of an anytime algorithm at runtime. This paper introduces a decision-theoretic metareasoning approach that can optimize both the hyperparameters and the stopping point of adjustable algorithms with deep reinforcement learning. First, we propose a generalization of an anytime algorithm called an adjustable algorithm that has hyperparameters that can be tuned at runtime. Next, we offer a meta-level control technique that monitors and controls an adjustable algorithm by using deep reinforcement learning. Finally, we demonstrate that an application of our approach to anytime weighted A* is effective on a range of common benchmark problems.

<p style="text-align:center">
<iframe style="center; width: 80%; height: auto; aspect-ratio: 16/9" src="https://www.youtube.com/embed/6oiFsbbYOLM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</p>

---

A follow-up paper at ICAPS 2022: [Tuning the Hyperparameters of Anytime Planning: A Metareasoning Approach with Deep Reinforcement Learning](#publications/BSNZicaps22)