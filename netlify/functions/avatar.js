// 导入模块:
import {identicon} from 'minidenticons';

exports.handler = async function (event, context) {
    // 获取name输入:
    let name = event.queryStringParameters.name || 'unnamed';
    // 计算:
    let svg = identicon(name);
    // 返回结果:
    return {
        // HTTP 200:
        statusCode: 200,
        // 响应类型:
        headers: {
            'content-type': 'image/svg+xml'
        },
        // 响应文本:
        body: svg
    };
};