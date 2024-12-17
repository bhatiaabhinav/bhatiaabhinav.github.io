## Adaptive Rollout Length for Model-Based RL Using Model-Free Deep RL

Bhatia, A., Thomas, PS., & Zilberstein, S. (2022). In _arXiv preprint arXiv:2206.02380_.<br>
<small>
TL;DR: Meta-level deep RL to adapt the rollout-length in model-based RL non-myopically based on feedback from the learning process, such as accuracy of the model, learning progress and scarcity of samples.

[PDF](files/BTZarxiv22.pdf)
</small>



### Abstract
Model-based reinforcement learning promises to learn an optimal policy from fewer interactions with the environment compared to model-free reinforcement learning by learning an intermediate model of the environment in order to predict future interactions. When predicting a sequence of interactions, the _rollout length_, which limits the prediction horizon, is a critical hyperparameter as accuracy of the predictions diminishes in the regions that are further away from real experience. As a result, with a longer rollout length, an overall worse policy is learned in the long run. Thus, the hyperparameter provides a trade-off between quality and efficiency.

In this work, we frame the problem of tuning the rollout length as a meta-level sequential decision-making problem that optimizes the final policy learned by model-based reinforcement learning given a fixed budget of environment interactions by adapting the hyperparameter dynamically based on feedback from the learning process, such as accuracy of the model and the remaining budget of interactions. We use model-free deep reinforcement learning to solve the meta-level decision problem and demonstrate that our approach outperforms common heuristic baselines on two well-known reinforcement learning environments.


