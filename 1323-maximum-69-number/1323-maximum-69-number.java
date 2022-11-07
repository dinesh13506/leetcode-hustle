class Solution {
    public int maximum69Number (int num) {
        String str_num = new String(num + "");
        final int n = str_num.length();
        char[] str_ch_arr = str_num.toCharArray();
        for(int i = 0; i < n; i++) {
            if(str_ch_arr[i] == '6') {
                str_ch_arr[i] = '9';
                break;
            }
        }
        StringBuilder sb = new StringBuilder();
        for(char ch : str_ch_arr) {
            sb.append(ch);
        }
        return Integer.parseInt(sb.toString());
    }
}