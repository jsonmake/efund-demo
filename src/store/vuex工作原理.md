# Vue Components(组件) -> commit -> mutation -> state -> 视图变更 -> 响应式
- Vuex工作流
1. 组件 -> dispatch(派发) -> action
2. dispatch -> type(actionType) -> 某一action
3. action -> commit 调用 -> mutation
4. mutation -> change -> state
5. render方案: state -> 数据流 -> 视图

1. actionTypes action类型
2. actions 调用mutation的方法
3. mutations　更改state的方法
4. state 中央数据管理池
5. store出口 actions mutations state统一到仓库进行管理