# SPIKE Migrating from MariaDB to AWS Aurora

This spike is to prove that AWS Aurora is fully compatible with mysql.

# ToDo
1. How to freez mysql db - test if it works with app -> DONE
2. Create simple nodejs app that selects and inserts data -> DONE
3. Check if connecting to aurora with mysql command tool works -> DONE
4. Test app with aurora -> DONE
5. Migrate mysql dump to aurora -> DONE


# Commands

Connect to DB:
```s
mysql -h 127.0.0.1 -P 3306 -uroot -ppassword
```

Creating DB:
```sql
SHOW DATABASES;
SHOW TABLES;
CREATE DATABASE test;
USE test;
CREATE TABLE people (id VARCHAR(20), name VARCHAR(20));
INSERT INTO test.people VALUES ('1','daniel');
SELECT * FROM test.people;
```

Run app:
```s
npm install mysqljs/mysql --save
node insert.js
node select.js
```

Dump DB:
```s
mysqldump -h 127.0.0.1 -P 3306 -uroot -ppassword test > dumpfile
mysql -h 127.0.0.1 -P 3306 -uroot -ppassword < dumpfile
```

Lock table - this will not allow app to insert data to table but one lock is lifted this data will be inserted to table. Looks like insert is stored in cache and when table is unlocked cache is flushed to table.
```sql
FLUSH TABLES test.people WITH READ LOCK;
LOCK TABLES test.people READ;
UNLOCK TABLES;
```
