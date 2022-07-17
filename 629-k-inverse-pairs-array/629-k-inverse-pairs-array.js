const initialize2DArrayNew = (n, m) => { let data = []; for (let i = 0; i < n; i++) { let tmp = Array(m).fill(0); data.push(tmp); } return data; };

const MOD = 1e9 + 7;
const kInversePairs = (n, k) => {
    let dp = initialize2DArrayNew(n + 1, k + 1);
    dp[0][0] = 1;
    for (let i = 1; i <= n; i++) {
        dp[i][0] = 1;
        for (let j = 1; j <= k; j++) {
            dp[i][j] = (dp[i - 1][j] + dp[i][j - 1]) % MOD;
            if (j >= i) {
               dp[i][j] = (dp[i][j] - dp[i - 1][j - i] + MOD) % MOD;
            }
        }
    }
    return dp[n][k];
};