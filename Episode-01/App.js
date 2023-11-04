 // core react thing
 const head1 = React.createElement("h1",{id:"hell",xyz:
"ss"},"Hakuna matata from React");
 // work of reactdom to create root for react lib to put this h1 into browser
 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(head1)
 
console.log(head1)