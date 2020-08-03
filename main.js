import {ToyReact} from './ToyReact'
class MyComponent{
    mountTo(patent){
        let vdom = this.render();
        vdom.mountTo(patent)
    }
    render(){
        return <div>cool</div>
    }
}

let a = <MyComponent name="a" id="bbb">
        <span>Hello</span>
        <span>hahhaha</span>
        <span>您好</span>
    </MyComponent>


ToyReact.render(
    a,
    document.body
);
document.body.appendChild(a)
console.log("main")