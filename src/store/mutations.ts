import {SET_TODO} from './actionType';
import { IState, ITodo } from '@/typings';
export default{
    [SET_TODO](state:IState,todo:ITodo):void{
        state.list.unshift(todo);
        console.log(state.list)
    }
}