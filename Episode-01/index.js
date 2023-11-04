 // core react thing
 const head1 = React.createElement("h1",{},"hello world from React");
 // work of reactdom to create root for react lib to put this h1 into browser
 const root = ReactDOM.createRoot(document.getElementById("root"));
//  rendering the react ELEment in root
 root.render(head1)
