class Solution {
    public String reverseWords(String s) {
        s = s.trim(); //remove starting and trailing spaces
        s = s.replaceAll("\\s+"," "); // replace all in between spaces with a single space
        var arr = s.split(" ");
        int i = 0, j = arr.length - 1;
        while(i < j) {
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
        }
        return String.join(" ", arr);
    }
}