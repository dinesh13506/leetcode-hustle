/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
var criticalConnections = function(n, connections) {
  const adjacency = {}
  for (let i = 0; i < n; i++) {
    adjacency[i] = []
  }

  for (let [node1, node2] of connections) {
    adjacency[node1].push(node2)
    adjacency[node2].push(node1)
  }

  const dfsNumber = new Array(n).fill(0)
  // this is what we called oldestReachable
  // the lowest number reachable by dfs from a node
  const dfsLow = new Array(n).fill(0)
  const criticalEdges = []
  let timestamp = 0

  function tarjan(node, parent) {
    timestamp++
    dfsNumber[node] = timestamp
    dfsLow[node] = timestamp

    for (let neighbor of adjacency[node]) {
      if (neighbor === parent) continue
      if (!dfsNumber[neighbor]) tarjan(neighbor, node)

      // resetting oldestReachable if neighbor can cycle back
      dfsLow[node] = Math.min(dfsLow[node], dfsLow[neighbor])

      // if neighbor cannot reach back to me or oldest, we have a critical edge
      if (dfsLow[neighbor] > dfsNumber[node]) criticalEdges.push([node, neighbor])
    }
  }

  tarjan(0, null, adjacency, criticalEdges)

  return criticalEdges
}