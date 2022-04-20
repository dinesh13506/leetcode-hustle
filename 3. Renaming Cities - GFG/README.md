# 3. Renaming Cities
## Medium 
<div class="problem-statement">
                <p></p><p><span style="font-size:18px">Some cities are going to be renamed and accordingly name of their railway stations will also change. Changing the name of railway station should also result in changed station code.&nbsp;Railways have an idea that station code should be the shortest prefix out of all railway stations renamed prior to this. If some city has same name, then&nbsp;prefix will be the name with suffix as the count of occurence of that city prior to this and including this, seperated with spaces.</span></p>

<p><span style="font-size:18px">Given&nbsp;N&nbsp;renamed cities consisting of lowercase alphabets only. The task is to generate a&nbsp;station ID&nbsp;for all the stations.</span></p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input:
</strong>N = 6
Cities[] = {shimla,safari,jammu,delhi,
                jammu,dehradun}
<strong>Output:
</strong>s
sa
j
d
jammu 2
deh<strong>
Explanation: </strong>Till&nbsp;shimla, no stations are there.
So, it's first character will be the unique
smallest prefix. For safari, first character of
shimla matches, so unique smallest prefix is&nbsp;sa
Similarly,&nbsp;j&nbsp;is smallest unique prefix for&nbsp;jammu
and&nbsp;d&nbsp;is for delhi. For last city&nbsp;jammu, we have
countered&nbsp;jammu before, and therefor no smallest
prefix is possible. So, we can generate its code
as jammu with suffix equal to the count of jammu,
i.e, 2. Smallest unique prefix is&nbsp;jammu2. Now,
delhi can be renamed as d, and dehradun can be
renamed as deh, since deh is the smallest non
matching prefix.&nbsp;</span>
</pre>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
Complete&nbsp;<strong>check</strong>&nbsp;function which takes&nbsp;array of strings&nbsp;and&nbsp;number of string&nbsp;'n' as arguments and print the require answer in the function itself. You have to provide new line in the function itself.</span></p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
1 &lt;= N &lt;= 10<sup>6</sup><br>
1 &lt;= Word Length &lt;= 100</span></p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:</strong>&nbsp;O(N *&nbsp;WORD_LEN).<br>
<strong>Expected Auxiliary Space:</strong>&nbsp;O(N * WORD_LEN).</span></p>
 <p></p>
            </div>