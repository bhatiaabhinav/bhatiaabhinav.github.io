## Resource Constrained Deep Reinforcement Learning

Bhatia, A., Varakantham, P., & Kumar, A. (2019). In _Proceedings of the International Conference on Automated Planning and Scheduling_.<br>
<small>
TL;DR: Deep RL to optimize constrained resource allocation at city scale. Good results on realistic datasets.

[PDF](files/BVKicaps2019.pdf)
[Talk](https://www.youtube.com/embed/qGLRxfKD40s?start=2529&end=3816)
</small>



### Abstract
In urban environments, resources have to be constantly matched to the "right" locations where customer demand is present. For instance, ambulances have to be matched to base stations regularly so as to reduce response time for emergency incidents in ERS (Emergency Response Systems); vehicles (cars, bikes among others) have to be matched to docking stations to reduce lost demand in shared mobility systems. Such problems are challenging owing to the demand uncertainty, combinatorial action spaces and constraints on allocation of resources (e.g., total resources, minimum and maximum number of resources at locations and regions).

Existing systems typically employ myopic and greedy optimization approaches to optimize resource allocation. Such approaches typically are unable to handle surges or variances in demand patterns well. Recent work has demonstrated the ability of Deep RL methods in adapting well to highly uncertain environments. However, existing Deep RL methods are unable to handle combinatorial action spaces and constraints on allocation of resources. To that end, we have developed three approaches on top of the well known actor-critic approach, DDPG (Deep Deterministic Policy Gradient) that are able to handle constraints on resource allocation. We also demonstrate that they are able to outperform leading approaches on simulators validated on semi-real and real data sets.

<p style="text-align:center">
<iframe style="center; width: 80%; height: auto; aspect-ratio: 16/9" src="https://www.youtube.com/embed/qGLRxfKD40s?start=2529&end=3816" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</p>