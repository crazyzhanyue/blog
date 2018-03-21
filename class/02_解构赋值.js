//解构赋值


//数组解构
{
  let a,b,rest;
  [a,b]=[1,2];
  console.log(a,b);
}

{
  let a,b,rest;
  [a,b,...rest]=[1,2,3,4,5,6];
  console.log(a,b,rest);
}

//对象解构
{
  let a,b;
  ({a,b}={a:1,b:2})
  console.log(a,b);
}

//默认值
{
  let a,b,c,rest;
  [a,b,c=3]=[1,2]; // 1 2 3
  [a,b,c]=[1,2]; // 1 2 undefind
  console.log(a,b,c);
}

//变量交换
{
  let a=1;
  let b=2;
  [a,b]=[b,a];
  console.log(a,b);
}

{
  function f(){
    return [1,2]
  }
  let a,b;
  [a,b]=f();
  console.log(a,b);
}

{
  function f(){
    return [1,2,3,4,5]
  }
  let a,b,c;
  [a,,,b]=f();  //选择性接收变量
  console.log(a, b); //1 4
}

{
  function f(){
    return [1,2,3,4,5]
  }
  let a,b,c;
  [a,...b]=f(); // 1 [2,3,4,5]
  [a,,...b]=f(); // 1 [3,4,5]
  console.log(a,b);
}

{
  let o={p:42,q:true};
  let {p,q}=o;
  console.log(p,q); // 42 true
}

{
  let {a=10,b=5}={a:3};
  console.log(a,b); // 3 5
}

//json 处理
{
  let metaData={
    title:'abc',
    test:[{
      title:'test',
      desc:'description'
    }]
  }
  let {title:esTitle,test:[{title:cnTitle}]}=metaData;
  console.log(esTitle,cnTitle);
}
