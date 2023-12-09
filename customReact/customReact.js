//designing the customRender method
//the name in the parameter section of this fn could be anything




// function customeRender(reactElement,container){
// const domElement=document.createElement(reactElement.type)
// domElement.innerHTML=reactElement.children
// domElement.setAttribute('href',reactElement.props.href);
// domElement.setAttribute('target',reactElement.props.target);

// container.appendChild(domElement);
// }

function customRender(reactElement,container){
    const domElement=document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.children;
    for (const prop in reactElement.props) {
        if(prop === 'children')continue;
        domElement.setAttribute(prop,reactElement.props[prop])
    }

    container.appendChild(domElement);
}

const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'click me to visit google'
}

const container=document.querySelector('#root');

//now we need a method to add reactElement to root
//so we are using customRender method
customRender(reactElement,container);