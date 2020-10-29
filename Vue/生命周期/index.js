/**
 * beforeCreate和created之间，进行初始化事件，进行数据观测
 * created时数据已经和data属性进行绑定 此时还没有el选项
 * 注：el为当前vue实例挂载的元素节点
 * 
 * created钩子函数到beforeMount 
 * 首先判断是否有el选项，有的话继续编译
 * 如果没有el选项则停止编译，直到该vue实例上调用vm.$mount(el) // el参数就是挂载的dom节点
 * 然后判断是否有模板选项：
 * (1) 如果vue实例对象中有template参数选项，则将其作为模板编译成render函数
 * (2) 如果没有template选择，则将外部html作为模板编译
 * (3) template中的模板优先级要高于outer HTML的优先级
 * 
 * 注：判断el是否存在在template之前
 * 
 * vue对象中还有一个render函数，以createElement作为参数，然后做渲染操作（可嵌入JSX）
 * 
 * beforeMount（虚拟DOM，并未加载el）和mounted 此时给vue实例对象添加$el成员，并替换掉挂载的DOM元素
 * 
 * mounted 将数据挂载到DOM元素
 * 
 * 当vue发现data中的数据发生了改变，会触发相应的组件重新渲染，先后调用beforeUpdate和updated
 * beforeDestory钩子函数在实例销毁之前调用，这一步实例完全可用
 * destroyed钩子函数在Vue实例销毁后调用。
 * 调用后，vue实例指示的所有东西都会解绑定，事件监听器被移除，子实例被销毁
 */
/**
 * 介绍流程版
 * 
 * 在beforeCreate和created钩子函数之间进行初始化、数据观测
 * 
 * 在created钩子函数和beforeMount之间先判断是否有el选项，有的话继续编译，没有则停止，直到在该vue实例上调用vm.$mount(el)
 * 然后继续判断是否有template选项，有则将其作为模板编译成render函数。如果没有则将外部html作为模板编译
 * 
 * 在beforeMount和mounted之间给vue实例对象添加$el成员，替换挂载的DOM元素
 * 
 * mounted 挂载 把相应的data挂载到DOM
 * 
 * 当vue发现data中的数据发生改变，触发对应组件重新渲染，先后调用beforeUpdate和updated
 * beforeUpdate可以监听到data的变化但view层没有被重新渲染
 * updated时view层才被重新渲染，数据更新。
 * 
 * beforeDestroy钩子函数在实例销毁前调用，这一步实例仍然可用
 * destroyed钩子函数在vue实例销毁后调用，调用后，vue实例指示解除绑定，事件监听移除，子实例销毁
 * 
 * 
 * 编译模板
 * 
 * 挂载实例到DOM
 * 
 * 数据变化时更新DOM
 */