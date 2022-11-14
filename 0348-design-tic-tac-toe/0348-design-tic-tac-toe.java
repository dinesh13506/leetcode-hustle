class TicTacToe {
    
    private int[] rowSum;
    private int[] colSum;
    private int forwardDiagSum;
    private int backDiagSum;
    private int n;

    public TicTacToe(int size) {
        n = size;
        rowSum = new int[n];
        Arrays.fill(rowSum, 0);
        colSum = new int[n];
        Arrays.fill(colSum, 0);
        forwardDiagSum = 0;
        backDiagSum = 0;
    }
    
    public int move(int row, int col, int player) {
        int inc = 1;
        if(player == 2) inc = -inc;
        rowSum[row] += inc;
        if(rowSum[row] == -n || rowSum[row] == n ) return player;
        colSum[col] += inc;
        if(colSum[col] == -n || colSum[col] == n) return player;
        
        if(row == col) {
            forwardDiagSum += inc;
            if(forwardDiagSum == -n || forwardDiagSum == n) return player;
        }
        if(row + col == n-1) {
            backDiagSum += inc;
            if(backDiagSum == -n || backDiagSum == n) return player;
        }
        return 0;
    }
}

/**
 * Your TicTacToe object will be instantiated and called as such:
 * TicTacToe obj = new TicTacToe(n);
 * int param_1 = obj.move(row,col,player);
 */