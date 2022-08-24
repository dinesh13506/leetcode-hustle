class Solution {
public:
    bool isPowerOfThree(int n) {
        
        if(n==1){
            return true;
        }
        else if( n== 0){
            return false;
        }
        else{
          while(n%3 == 0){
                
                n = n/3;
          }
          if(n == 1) return 1;
          else return 0;
          
        }
    }
};