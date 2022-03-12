1. the whole idea is based on topological sorting.
2. In topological sorting if A ---> B then B job will be finished once A is finished.
3. And Indegree plays a very important role in dependency graph. if indegree of a node is zero it means that there is no edge pointing on it. It means there is no depedency on it. So we can easily execute the jobs with zero dependencies.
4. Once a job with zero depdendecy is finsihed then all the job dependents on it will have indegress decremented by 1. If any of the job now has indegree 0, it will be pushed to queue for processing.

5. If no of jobs executed in topological sort is less that number of nodes then there is a cycle in graph.