---
title: "MS Access database in Linux"
summary: "Easy way to use Ms Access in linux"
date: 2023-02-13T23:00:40+01:00
draft: false
author: helper4
categories:
  - "Windows"
tags:
  - "access"
  - "linux"
# thumbnail: "images/js.svg"
toc: true
autonumbering: false
---

## Universal Database Tool
Free multi-platform database tool for developers, database administrators, analysts and all people who need to work with databases. Supports all popular databases: MySQL, PostgreSQL, SQLite, Oracle, DB2, SQL Server, Sybase, MS Access, Teradata, Firebird, Apache Hive, Phoenix, Presto, etc.

You can use {{< rawhtml >}}
<a class="roll" target="_blank" href="https://dbeaver.io/">
  <span data-attr="DBeaver">DBeaver</span></a>
{{< /rawhtml >}}. It has "MS Access (UCanAccess)" driver to open .mdb files.

Here is a guide ho to {{< rawhtml >}}
<a class="roll" target="_blank" href="https://www.how2shout.com/linux/how-to-install-dbeaver-on-ubuntu-20-04-lts/">
  <span data-attr="install">install</span></a>
{{< /rawhtml >}} dbeaver on Ubuntu 20.04
```md
wget https://dbeaver.io/files/dbeaver-ce_latest_amd64.deb
sudo dpkg -i dbeaver-ce_latest_amd64.deb
sudo apt install -f
``` 
&nbsp;

{{< img_in_post "/images/dbeaver.png" "dbeaver" >}}


## What's new on DBeaver 22.3.4
February 5th, 2023

### ChatGPT integration for smart completion and code generation (as optional extension)

### Accessibility:
#### Text reader for entity editor was improved
#### Text reader for data grid was improved 
### SQL editor:
#### Query generation from human language text was added
#### Server output log levels configuration was improved
#### Global metadata search was fixed
#### Variables resolution is fixed in strings and comments
#### Issue with queries with invalid line feeds was resolved 
### Data editor:
#### Grouping panel messages were improved
#### Datetime calendar editor was fixed (in panel and inline editor) 
### Database navigator: issue with rename/refresh was resolved
### Dashboards were fixed for inherited databases
### Project import now sets DBeaver nature (thanks to @froque
### ERD: custom diagram editor was fixed (issue wth missing notes and connections was resolved)
### Databricks: table DDL reading was fixed, extra SQL keywords were added (thanks to @mixam24)
### DB2 BigSQL: table with RID_BIT columns data reading was fixed (thanks to @bkyle)
### MySQL: numeric identifiers quoting was fixed
### Netezza: tables/views search query was improved
### PostgreSQL:
#### Procedures invocation was improved (thanks to @plotn)
#### Filter by enum was fixed (thanks to @plotn) 
### Redshift: triggers DDL reading was fixed
### Snowflake: table constraints reading was fixed
### We switched to Java 17 so now DBeaver supports all newest JDBC drivers 


