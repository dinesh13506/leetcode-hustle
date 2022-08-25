# Write your MySQL query statement below

select person.firstName, person.lastName, address.city, address.state from Person as person left join Address as address ON  person.personId = address.personId;
