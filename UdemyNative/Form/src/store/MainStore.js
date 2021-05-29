import {observable, action, makeObservable, autorun, reaction,when,computed} from "mobx";
class MainStore{
    @observable name = "Yavuz";
    @observable surname="Demir"

    constructor(){
        makeObservable(this);
        // autorun(()=>{
        //     alert(this.name)
        // })
        // reaction(()=>this.name, name=>{
        //     if(name=="yusuf"){
        //         alert("isim yusuf oldu bırak")
        //     }
        // })
        //when(()=>this.name=="sevcan", ()=>alert("isim sevcan oldu"))  //reaction un yaptığını bir defa yapar
    }

    @action getName(){
        return this.name;
    }
    @action setName(name){
        this.name=name;
    }
    @computed get fullName(){
        return `${this.name} ${this.surname}`
    }
}

export default new MainStore();