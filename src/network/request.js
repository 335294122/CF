import axios from 'axios'

// 【采用 Promise 的方式】
export function request (url) {

    // axios.create的源码采用 Promise 进行处理
    const instance = axios.create({
        baseURL: 'https://httpbin.org',
        timeout: 5000
    })

    // 【axios 拦截器】
    // 1.0 拦截 config 后，必须返回，否则使用时接收不到请求配置
    instance.interceptors.request.use(config => {
        // 发送请求成功
        // 常用于等待动画图标，（请求成功，显示等待图标，回应成功并拿到数据后，隐藏等待图标）
        // 还有一个需要登录的页面，如果没检查到token，就跳转到登录页面
        console.log(11111 + config)
        return config
    }, error => {
        // 发送请求失败
        console.log(error);
    })


    instance.interceptors.response.use(result => {
        // 常用于返回数据成功，隐藏等待图标
        // 登录成功，跳转到指定页面
        console.log(result);
        return result
    }, error => {
        console.log(error);
    })




    // url是交给了 Promise 进行处理
    return instance(url)
}


/*
// 【采用回调函数的方式】
export function request (config, success, fail) {
    // 创建 axios 实例
    const instance = axios.create({
        baseURL: 'https://httpbin.org',
        timeout: 5000
    })

    // 发送网络请求
    instance(config).then(result => {
        success(result)
    }).catch(error => {
        fail(error)
    })
}*/
