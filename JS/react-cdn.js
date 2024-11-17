const parent=document.getElementById("root");
const element=React.createElement("h1",{},"Shopping Cart");
const root=ReactDOM.createElement(parent);
const item1=React.createElement("li",{},"item1");
const item2=React.createElement("li",{},"item2");
const list=React.createElement("ol",{},item1,item2);
root.render([element,list]);
const item3=React.createElement("li",{},"")