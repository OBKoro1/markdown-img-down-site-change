// 检查数据格式
const checkData = (type, data) => {
    if (!type || !data) return false;
    if (type === 'String') {
        return typeof data === 'string'
    } else if (type === 'Object') {
        return Object.prototype.toString.call(data) === '[object Object]'
    } else if (type === 'number') {
        return typeof data === 'number'
    } else if (type === 'function') {
        return Object.prototype.toString.call(data) === '[object Function]'
    } else {
        return false;
    }
};

const checkDataAction = (type, data, errMsg = data) => {
    if (checkData(type, data)) {
        return true
    } else {
        console.error('检查数据出错：', errMsg)
    }
}

module.exports = {
    checkDataAction
}

