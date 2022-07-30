/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
    
    let answer = []
    let adjList = new Map()
    
    //create adj list
    for(let account of accounts) {
        let name = account[0]
        let firstEmail = account[1]
        
        for(let i = 2; i < account.length; i++) {
            let email = account[i]
            if(adjList.has(firstEmail) == false) {
                adjList.set(firstEmail,[])
            }
            adjList.get(firstEmail).push(email)
            if(adjList.has(email) == false) {
                adjList.set(email,[])
            }
            adjList.get(email).push(firstEmail)
        }
    }
    //console.log(adjList)
    let visited = new Set()
    
    let dfs = (email, emails) => {
        visited.add(email)
        emails.push(email)
        let neighbors = adjList.get(email) || []
        for(let e of neighbors) {
            if(visited.has(e) != true) {
                dfs(e, emails)
            }
        }
    } 
    
    for(let account of accounts) {
        let name = account[0]
        let firstEmail = account[1]
        if(visited.has(firstEmail) == false) {
            let emails = []
            dfs(firstEmail, emails)
            emails.sort()
            emails.unshift(name)
            answer.push(emails)
        }
    }
    return answer
};