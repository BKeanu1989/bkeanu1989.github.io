# SQL Import

## .sql file
```bash
mysql -u USERNAME -p DBNAME < /path/to/file.sql
```
## .zip file
```bash
# unzip -p flag => pipe into mysql
unzip -p dbdump.sql.zip | mysql -u root -p dbname
```
