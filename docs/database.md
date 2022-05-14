---
sidebar_position: 3
---

# 数据库

## E-R Model

![table](/img/table.png)

## DDL

```sql
create table USER
(
    ID        INTEGER auto_increment
        primary key,
    REAL_NAME VARCHAR(255),
    PASSWORD  VARCHAR(255),
    ROLE      VARCHAR(255),
    USER_NAME VARCHAR(255)
        constraint UK4BAKCTVIOBMDK6DDH2NWG08C2
            unique
);

create table DOCTOR_INFO
(
    ID         INTEGER auto_increment
        primary key,
    DEPARTMENT VARCHAR(255),
    HOSPITAL   VARCHAR(255),
    USER_ID    INTEGER,
    constraint FK9B6UHWG0FVWHIE0IODI3SO2HQ
        foreign key (USER_ID) references USER (ID)
);

create table ARRANGE
(
    ID         INTEGER auto_increment
        primary key,
    DAY_TYPE   VARCHAR(255),
    END_TIME   TIME,
    START_TIME TIME,
    USER_ID    INTEGER,
    constraint FKE3R03RG7BY376CH5IOWCCAWN6
        foreign key (USER_ID) references USER (ID)
);
```

## Schema

### User--个人信息

User(id,userName,password,realName,role)

| 字段     |     类型     | 是否可为空 | 是否主键 | 备注                 |
| -------- | :----------: | :--------: | :------: | -------------------- |
| id       |     int      |     NO     |   YES    | 用户唯一标识符       |
| userName | varchar(255) |     NO     |    NO    | 用户名称(唯一)       |
| role     |     ENUM     |     NO     |    NO    | 枚举类型包括三种角色 |
| password | varchar(255) |     NO     |    NO    | 用户密码             |
| realName | varchar(255) |     NO     |    NO    | 用户真实名称         |

### Arrange--医生排班信息

Arrange(id,start_time,end_time,dayType)

|    字段    |   类型   | 是否可为空 | 是否主键 | 备注                   |
| :--------: | :------: | :--------: | :------: | ---------------------- | --- |
|     id     |   int    |     NO     |   YES    | 唯一标识符             |
| start_time | datetime |     NO     |    NO    | 当日值班开始时间       |
|  end_time  | datetime |     NO     |    NO    | 当日值班结束时间       |
|  dayType   |   ENUM   |     NO     |    NO    | 枚举类型包括周一至周日 |     |

### doctorInfo--医生信息

docterInfo(id,department,hospital)

|    字段    |     类型     | 是否可为空 | 是否主键 | 备注         |
| :--------: | :----------: | :--------: | :------: | ------------ |
|     id     |     int      |     NO     |   YES    | 唯一标识符   |
| department | varchar(255) |     NO     |    NO    | 医生所属部门 |
|  hospital  | varchar(255) |     NO     |    NO    | 医生所属医院 |
