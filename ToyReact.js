class ElementWrapper{
    constructor(type){
        this.root = document.createElement(type);
    }
    setAttribute(name,value){
        this.root.setAttribute(name,value);
    }
    appendChild(vchild){
        vchild.mountTo(this.root)
    }
    mountTo(parent){
        parent.appendChild(this.root)
    }
}

class TextWrapper{
    constructor(content){
        this.root = document.createTextNode(content)
    }
    mountTo(patent){
        parent.appendChildthis.root
    }
}

export let ToyReact = {
    createElement(type,attributes,...children){

        // debugger
        console.log(arguments)
        console.log(type)
        console.log(attributes)
        console.log(children)
        console.log("======")
        let element = document.createElement(type);
        for(let name in attributes){
            element.setAttribute(name,attributes[name]);
        }
        for(let child of children){
            if(typeof child === 'string'){
                child = document.createTextNode(child);
            }
            element.appendChild(child);
        }
        return element;
    },
    render(vdom,element){
        vdom.mountTo(element);

    }
}