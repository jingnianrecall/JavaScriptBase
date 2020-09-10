/**
 * vue keep-alive
 */


/**
 * Promise常用方法
 */


/**
 * 闭包
 */


/**
 * 跨域
 */

/**
 * 继承
 */

/**
 * Vue生命周期
 * 
 * 1、Vue实例有一个完整的生命周期，从开始创建、初始化数据、编译模板、挂载DOM、渲染更新->渲染卸载一系列过程，称为Vue生命周期
 * 
 * 
 */

/**
 * Vue组件通信
 * 
 * 1、父子组件传值
 *    父组件通过props的方式向子组件传值，子 to 父 通过在子组件中的$emit事件，父组件的v-on实现。
 *    * 父组件通过props向下传递数据给子组件
 *    * 子组件通过自定义事件传递值，父组件使用v-on:自定义事件接收值
 * 2、$emit/$on
 *    通过一个空Vue实例作为事件中心，用它来触发事件和监听事件，可实现父子、兄弟、跨级
 *    (发送方)兄弟组件定义Event.$emit('brother-a', 18)事件
 *    (接收方)兄弟组件定义Event.$on('brother-a', age=>{this.age = age}) //箭头函数内部不会产生新的this
 * 
 * 3、VueX

/**
 * Vue双向绑定
 * 
 * 1、什么是 MVVM
 *    Model-View-ViewModel
 *    Model和View之间使用ViewModel进行关联，ViewModel负责将Model的数据变化显示在View上
 *    将View的改变反馈到Model上。
 * 
 * 2、Vue的双向数据绑定通过数据劫持 结合 发布者-订阅者模式的模式实现。
 *    
 *    通过使用Object.defineProperty()方法重写get() / set()属性方法，实现数据劫持。
 *    ** Object.defineProperty()方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性 **
 *    ** Vue初始数据对象的结构 ** 
 * 
 * 3、双向绑定实现
 *    MVVM总结就是两个方面：
 *     1、视图变化更新数据
 *     2、数据变化更新视图
 * 
 *    * 视图变化更新数据通过监听input事件获取更新的数据，传递给实际数据就能实现。
 * 
 *    * 数据变化更新视图，通过Object.defineProperty()对属性设置了一个set函数，
 *      数据改变触发这个函数，所以这时候需要一些更新方法来实现data更新view.
 * 
 * 4、实现过程
 *    1、设置一个监听器 Observer()，监听所有属性
 *    2、如果属性发生变化，就告诉订阅者Watcher()是否要更新视图。
 *    3、订阅者有多个，需要有个集中的消息订阅者Dep来管理这些订阅者。
 */

/**
 * VUEX
 * 
 * 1、VUEX原理
 *    VUE实现了一个单向数据流，在全局有一个State存放数据，组件需要更改Status中的数据时，
 *    必须通过Mutation进行修改，根据State变化，渲染到视图。
 */

/**
 * 手写Promise
 */

/**
 * cookie
 */
