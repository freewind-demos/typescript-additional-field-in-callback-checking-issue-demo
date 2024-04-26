TypeScript Additional Field in Callback Checking Issue Demo
===========================

在某些情况下，如果写了多余的field，typescript并不会报错。
让我感觉非常意外，因为它导致了几个typo错误，特别是在type中有optional fields的时候。

https://www.typescriptlang.org/docs/handbook/2/objects.html#excess-property-checks

```
Object literals get special treatment and undergo excess property checking when assigning them to other variables, or passing them as arguments
```

但是像 array.map这样指定类型参数的，并不会进行该检查。

所以需要
 
```
array.map(it: T => ({...}))
```

或者

``` 
array.map<T>(it => ({...}) satisfied T
```

有一个更有针对性的issue讨论：https://github.com/microsoft/TypeScript/issues/7547

看起来是typescript的一个bug，而不是feature

```
npm install
npm start
```
