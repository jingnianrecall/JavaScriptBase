/**
 * 计算属性
 * 
 * 需要进行数值计算，并依赖于其他数据时（data或组件传值），应当使用computed,因为可以利用computed的缓存特性
 * 避免每次取值时，都要重新计算 区别于method。单位换算 
 */

 /**
  * 监听 watch
  * 需要在数据变化时执行异步或开销较大的操作时，应该使用watch
  */
/**
 * 
 * 挂载后（mounted）如果希望在整个视图都渲染完毕操作，使用vm.$nextTick：
 */

/**
 * 简述VUE生命周期
 * 
 * 
 * 
 * 实例创建完成后调用created，这一步完成数据观测，property和方法运算，watch/event事件回调
 * 挂载阶段还没开始，$el尚不可用
 * 
 * beforeMount 在挂载之前被调用：相关的render函数首次被调用
 * 
 * mounted 实例挂载完成后调用，el被新创建的vm.$el替换 （el: Vue 实例使用的根 DOM 元素）
 * mounted不会保证所有的子组件一起被挂载，希望整个视图渲染完毕（在mounted内使用vm.$nextTick）
 * 
 * beforeUpdate 数据更新时调用可以访问到现有DOM（更新之前）
 * 
 * updated 更改数据导致虚拟DOM重新渲染，这之后会调用updated钩子
 * 调用updated时（更新完成），组件DOM已更新
 * 
 * beforeDestroy 实例销毁之前调用，目前实例仍然完全可用
 * 
 * destroyed 实例销毁后调用，调用后，对应Vue实例所有指令都被解绑，事件监听器移除，子实例被销毁
 * 
 */

/**
 * Vue 常用指令
 * 
 * v-show v-if v-else v-else-if
 * v-for v-bind v-model v-
 */

/**
 * vue key 
 * v-for动态加载数据时，添加key 防止重复使用
 */

/**
 * keep-alive主要用于保留组件状态 避免重新渲染
 */