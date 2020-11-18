/**
 * JavaScript基础
 * 
 * 原型与原型链
 * 
 * 原型就是每个JavaScript对象在创建时会与之关联另一个对象，这个对象就是原型，每一个对象都会从原型
 * 继承属性。
 * 构造函数有一个属性prototype指向实例原型。
 * 每个对象都有一个__proto__的属性指向该对象的原型（Object.prototype）
 * 每个原型都有一个constructor属性指向关联的构造函数
 * 
 * 读取实例的属性时，如果找不到，就会查找与对象关联的原型中的属性，如果还查不到，就去找原型的原型，
 * 一直到最顶层的为止。（原型的原型 Object.prototype）
 * 原型的原型相互关联就叫原型链
 */

/**
 * 作用域 作用域链
 * 
 * 作用域规定了如何查找变量，确定当前执行代码对变量的访问权限
 * JavaScript采用词法作用域（静态作用域）
 */

/**
 * 闭包
 */



/**
 * 执行上下文栈 ECS
 */

/**
 * call和apply的模拟实现
 */

/**
 * bind模拟实现
 */

/**
 * new 模拟实现
 */

/**
 * 继承
 */

/**
 * ES6
 */

/**
 * ES6新特性 并简述
 * 块级作用域 let const
 * 解构赋值
 */

/**
 * Promise简述及常用方法
 * 手写Promise思路
 */

/**
 * VUE
 */

/**
 * 简述VUE生命周期
 * 
 * vue实例创建时一系列的初始化过程
 * 
 * 设置数据监听
 * 编译模板
 * 将实例挂载到DOM
 * 数据变化时更新DOM
 * 
 * created：实例创建完成，完成数据观测（data可用） property（属性可用）和方法的运算，但真实DOM还没生成，$el还不可用
 * 比如：created 函数在实例创建之后调用，页面初始加载数据
 * 
 */

/**
 * 每个生命周期具体适用场景
 */

/**
 * 
 */



/**
 * 从VUE源码看生命周期
 * 
 * 调用new VUE的时候，会直接调用vue实例上的_init方法
 * 首先会初始化生命周期相关属性（绑定父组件 根组件）
 * 初始化事件（父组件添加的事件）
 * 初始化渲染函数（给实例添加$attrs和$listeners属性）
 * 然后调用beforeCreate函数  callHook(vm, 'beforeCreate')
 * 初始化inject
 * 初始化state
 *      initState方法中初始化props、methods、data、computed、watch
 * 初始化provide
 * 然后执行created钩子函数 callHook(vm, 'created') //调用created生命周期  
 * （判断是否有el选项 是否有template选项）
 * created执行完成后，调用vm.$mount(vm.$options.el) 挂载组件到DOM上
 *      $mount方法中的mountComponent方法判断当前实例是否有render函数
 *      如果有准备开始执行beforeMount钩子函数，否则报错
 *      render函数生成步骤：
 *      传入template通过一系列编译生成render函数：
 *       1）编译template 生成AST抽象语法树
 *       2）优化AST 标记静态节点
 *       3）根据AST 生成render函数
 * callHook(vm,‘beforeMount’) 执行beforeMount钩子函数
 * 
 * 
 * 
 * 
 */


/**
 * 简述keep-alive
 * 
 * keep-alive主要是缓存组件状态，频繁切换组件的时候，想保持组件的状态，同时避免反复重新渲染导致的性能问题。
 * 使用：用keep-alive包裹需要缓存的组件 可以设置include exclude属性 指定缓存组件 可以设置max最大缓存数目
 */

/**
 * 简述双向绑定原理
 */

/**
 * 简述MVVM
 */

/**
 * Vue常用指令
 */

/**
 * JS运行机制
 */

/**
 * Webpack
 */

/**
 * 
 */

/**
 * 
 */

/**
 * 
 */

/**
 * 
 */

/**
 * 
 */

/**
 * 
 */

/**
 * 
 */

/**
 * 
 */

 