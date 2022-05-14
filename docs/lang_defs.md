---
sidebar_position: 2
---

# 语言特性

## 简介


## 基本数据类型
* `char`
* `short`
* `int`
* `long`
* `float`
* `double`
* `string`

前6种类型遵循C语言标准。`string`类型只能用于声明字符串常量，且必须在声明时初始化，例如：

```cpp
int main(){
    string a = "Hello";
    string b = __builtin_strcat(a, " world!");
}
```

## 内置函数

```cpp
string __builtin_strcat(string, string);
int __builtin_strlen(string);
```


## 语法(Yacc)


TBD

