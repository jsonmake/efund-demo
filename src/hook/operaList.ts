//接口定义了方法
interface IoperaList<T>{
    add(info:T):boolean;
    update(info:T,id:number):boolean;
    delete(id:number):boolean;
    get(id:number):any[];
}

//定义一个操作TodoList的类 实现泛型接口
class operaToDoList<T> implements IoperaList<T>{
    add(info: T): boolean {
        throw new Error("Method not implemented.");
    }
    update(info: T, id: number): boolean {
        throw new Error("Method not implemented.");
    }
    delete(id: number): boolean {
        throw new Error("Method not implemented.");
    }
    get(id: number): any[] {
        throw new Error("Method not implemented.");
    }
    
}

    
class ListItem{
    name:string|undefined;
    code:string|undefined;
}

let item = new ListItem();
item.name = '易方达'
item.code = '医疗保健A'

let todoList = new operaToDoList<ListItem>();

todoList.add(item)