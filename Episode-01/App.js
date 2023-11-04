 // core react thing
//  const head1 = React.createElement("h1",{id:"hell",xyz:
// "ss"},"Hakuna matata from React");
//  // work of reactdom to create root for react lib to put this h1 into browser
//  const root = ReactDOM.createRoot(document.getElementById("root"));
//  root.render(head1)
//  g
// console.log(head1)

const parent = React.createElement("div",{id:"parent"},[
React.createElement("div",{id:"child1"}, [
    React.createElement("h1",{},"I am h1 tag"),
    React.createElement("h2",{},"i am h2 tag"),
]),
React.createElement("div",{id:"child2"}, [
    React.createElement("h1",{},"I am h1 tag"),
    React.createElement("h2",{},"i am h2 tag")
]),
]);


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)
