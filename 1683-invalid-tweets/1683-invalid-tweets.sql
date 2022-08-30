# Write your MySQL query statement below

select tws.tweet_id from Tweets as tws
where length(tws.content) > 15
