## On the Benefits of Randomly Adjusting Anytime Weighted A*

Bhatia, A., Svegliato, J., & Zilberstein, S. (2021). In _Proceedings of the International Symposium on Combinatorial Search_.<br>
<small>
TL;DR: _Randomized Weighted A\*_ tunes the weight in _Anytime Weighted A\*_ randomly at runtime and outperforms every static weighted baseline.

[PDF](../files/BSZsocs21.pdf)
[Poster](../files/BSZsocs21_poster.pdf)
[Code](https://github.com/bhatiaabhinav/AnytimeWeightedAStar.jl)
[Talk](https://slideslive.com/38965417?slide=1)
</small>


### Abstract
_Anytime Weighted A\*_---an anytime heuristic search algorithm that uses a weight to scale the heuristic value of each node in the open list---has proven to be an effective way to manage the trade-off between solution quality and computation time in heuristic search. Finding the best weight, however, is challenging because it depends on not only the characteristics of the domain and the details of the instance at hand, but also the available computation time. We propose a randomized version of this algorithm, called _Randomized Weighted A\*_, that randomly adjusts its weight at runtime and show a counterintuitive phenomenon: RWA* generally performs as well or better than AWA* with the best static weight on a range of benchmark problems. The result is a simple algorithm that is easy to implement and performs consistently well without any offline experimentation or parameter tuning.


<p style="text-align:center">
<iframe style="center; width: 80%; height: auto; aspect-ratio: 16/9" src="https://slideslive.com/embed/presentation/38965417?slide=1" allow="autoplay; fullscreen" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-top-navigation" frameborder="0" scrolling="no"></iframe>
</p>