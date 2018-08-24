# Blind SQL Injection techniques

Mostly, web-application will hide output of the actual SQL-query. 
This way, you have no direct feedback of the database-result of an SQL-Injection attack.
There are however, other ways to dissect and discover the structure and content of a database.
While these methods are complex and very time-consuming when executed manually, there are tools that fully automate these kinds of attacks.

## Basics
Blind SQL injection abuses different techniques to understand valid or invalid queries
the fact that a valid query will return a different result as an invalid query.
For instance, the following query may result in an actual result page:

```
http://newspaper.com/items.php?id=2
// results in:
SELECT title, description, body FROM items WHERE ID = 2
```

While this page may result in an error-page:
```
http://newspaper.com/items.php?id=2 and 1=2
// results in:
SELECT title, description, body FROM items WHERE ID = 2 and 1=2
```

