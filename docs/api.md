---
title: API
sidebar_position: 2
---

## Version: 1.0

### /api/arrange

#### GET
##### Summary

查询排班

##### Description

查询排班情况

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [Response«ArrangeListResponseData»](#responsearrangelistresponsedata) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

#### POST
##### Summary

添加排班

##### Description

添加新的排班

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | query | id | Yes | integer |
| start_time | query | start_time | Yes | string |
| end_time | query | end_time | Yes | string |
| dayType | query | dayType | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [Response«object»](#responseobject) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

### /api/doctor

#### GET
##### Summary

按医院科室

##### Description

查询某个医院的某个科室所有医生的信息

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| hospital | query | hospital | Yes | string |
| department | query | department | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [Response«DoctorInfoListResponseData»](#responsedoctorinfolistresponsedata) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

#### POST
##### Summary

添加医生

##### Description

向医生库中添加一个医生

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| userId | query | userId | Yes | integer |
| department | query | department | Yes | string |
| hospital | query | hospital | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [Response«object»](#responseobject) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

### /api/doctor/all

#### GET
##### Summary

查询所有医生

##### Description

查询所有医生的信息

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [Response«DoctorInfoListResponseData»](#responsedoctorinfolistresponsedata) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

### /api/doctor/dept/{dept}

#### GET
##### Summary

按科室查询

##### Description

查询某个科室所有医生的信息

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| dept | path | dept | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [Response«DoctorInfoListResponseData»](#responsedoctorinfolistresponsedata) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

### /api/doctor/hospital/{hospital}

#### GET
##### Summary

按医院查询

##### Description

查询某个医院所有医生的信息

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| hospital | path | hospital | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [Response«DoctorInfoListResponseData»](#responsedoctorinfolistresponsedata) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

### /api/oauth/captcha

#### GET
##### Summary

获取验证码

##### Description

获取验证码

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [Response«CaptchaResponseData»](#responsecaptcharesponsedata) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

#### POST
##### Summary

验证验证码

##### Description

验证验证码

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| key | query | key | Yes | string |
| code | query | code | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [Response«object»](#responseobject) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

### /api/oauth/login

#### POST
##### Summary

用户登录

##### Description

前端登陆界面使用

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| userName | query | userName | Yes | string |
| password | query | password | Yes | string |
| captchaKey | query | captchaKey | Yes | string |
| captchaCode | query | captchaCode | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [Response«object»](#responseobject) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

### /api/oauth/logout

#### GET
##### Summary

用户登出

##### Description

用户登出

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [Response«object»](#responseobject) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

### /api/oauth/register

#### POST
##### Summary

用户注册

##### Description

前端注册界面使用，仅支持病人用户注册

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| userName | query | userName | Yes | string |
| realName | query | realName | Yes | string |
| password | query | password | Yes | string |
| captchaKey | query | captchaKey | Yes | string |
| captchaCode | query | captchaCode | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [Response«object»](#responseobject) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

### /api/oauth/verify

#### GET
##### Summary

鉴权

##### Description

验证登录是否有效

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [Response«AccessControlResponseData»](#responseaccesscontrolresponsedata) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

### /api/user

#### GET
##### Summary

查询所有用户

##### Description

查询所有用户的信息

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [Response«UserListResponseData»](#responseuserlistresponsedata) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

#### POST
##### Summary

添加用户

##### Description

添加一个新用户

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| userName | query | userName | Yes | string |
| realName | query | realName | Yes | string |
| password | query | password | Yes | string |
| role | query | role | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [Response«object»](#responseobject) |
| 201 | Created |  |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

### /api/user/id/{id}

#### GET
##### Summary

按ID查询

##### Description

按照ID查询某个用户

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | id | Yes | integer |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [Response«UserResponseData»](#responseuserresponsedata) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

### /api/user/name/{name}

#### GET
##### Summary

按姓名查询

##### Description

按照姓名查询用户

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| name | path | name | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [Response«UserResponseData»](#responseuserresponsedata) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

### /api/user/role/{role}

#### GET
##### Summary

按身份查询

##### Description

按照身份查询符合条件的所有用户

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| role | path | role | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | OK | [Response«UserListResponseData»](#responseuserlistresponsedata) |
| 401 | Unauthorized |  |
| 403 | Forbidden |  |
| 404 | Not Found |  |

### Models

#### AccessControlResponseData

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| role | string |  | No |
| userName | string |  | No |

#### ArrangeListResponseData

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| arranges | [ [ArrangeResponseData](#arrangeresponsedata) ] |  | No |

#### ArrangeResponseData

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| end_time | string |  | No |
| id | integer |  | No |
| start_time | string |  | No |

#### CaptchaResponseData

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| image | string |  | No |
| key | string |  | No |

#### DoctorInfoListResponseData

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| doctorInfos | [ [DoctorInfoResponseData](#doctorinforesponsedata) ] |  | No |

#### DoctorInfoResponseData

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| department | string |  | No |
| hospital | string |  | No |
| id | integer |  | No |
| realName | string |  | No |
| userName | string |  | No |

#### Response«AccessControlResponseData»

返回结果

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| code | integer | 业务返回值，0表示成功，-1表示失败 | No |
| data | [AccessControlResponseData](#accesscontrolresponsedata) | 返回数据，继承自ResponseData类 | No |
| message | string | 返回消息 | No |

#### Response«ArrangeListResponseData»

返回结果

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| code | integer | 业务返回值，0表示成功，-1表示失败 | No |
| data | [ArrangeListResponseData](#arrangelistresponsedata) | 返回数据，继承自ResponseData类 | No |
| message | string | 返回消息 | No |

#### Response«CaptchaResponseData»

返回结果

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| code | integer | 业务返回值，0表示成功，-1表示失败 | No |
| data | [CaptchaResponseData](#captcharesponsedata) | 返回数据，继承自ResponseData类 | No |
| message | string | 返回消息 | No |

#### Response«DoctorInfoListResponseData»

返回结果

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| code | integer | 业务返回值，0表示成功，-1表示失败 | No |
| data | [DoctorInfoListResponseData](#doctorinfolistresponsedata) | 返回数据，继承自ResponseData类 | No |
| message | string | 返回消息 | No |

#### Response«UserListResponseData»

返回结果

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| code | integer | 业务返回值，0表示成功，-1表示失败 | No |
| data | [UserListResponseData](#userlistresponsedata) | 返回数据，继承自ResponseData类 | No |
| message | string | 返回消息 | No |

#### Response«UserResponseData»

返回结果

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| code | integer | 业务返回值，0表示成功，-1表示失败 | No |
| data | [UserResponseData](#userresponsedata) | 返回数据，继承自ResponseData类 | No |
| message | string | 返回消息 | No |

#### Response«object»

返回结果

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| code | integer | 业务返回值，0表示成功，-1表示失败 | No |
| data | object | 返回数据，继承自ResponseData类 | No |
| message | string | 返回消息 | No |

#### UserListResponseData

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| users | [ [UserResponseData](#userresponsedata) ] |  | No |

#### UserResponseData

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | integer |  | No |
| realName | string |  | No |
| userName | string |  | No |
