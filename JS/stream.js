 const num=[1,5,2,3,4,7];
// const c=num.filter((n)=>(n%2==0));
// console.log(c);
// console.log(num.sort((a,b)=>a-b))

const d=num.map((n)=>(n*2));
console.log(d);

const e=num.filter((n)=>(n%2==0)).map((n)=>(n*2));
console.log(e);

const f=num.filter((n)=>(n%2==0)).map((n)=>(n*2)).reduce((n,s)=>(n+s));
console.log(f);
