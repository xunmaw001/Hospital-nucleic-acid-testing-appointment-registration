const menu = {
    list() {
        return [{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"医院信息","menuJump":"列表","tableName":"yiyuanxinxi"}],"menu":"医院信息管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"预约时间段","menuJump":"列表","tableName":"yuyueshijianduan"}],"menu":"预约时间段管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"核酸检测","menuJump":"列表","tableName":"hesuanjiance"}],"menu":"核酸检测管理"},{"child":[{"buttons":["查看","修改","删除","报告","审核"],"menu":"核酸预约","menuJump":"列表","tableName":"hesuanyuyue"}],"menu":"核酸预约管理"},{"child":[{"buttons":["查看","修改","删除","报表"],"menu":"核酸报告","menuJump":"列表","tableName":"hesuanbaogao"}],"menu":"核酸报告管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"轮播图管理","tableName":"config"},{"buttons":["新增","查看","修改","删除"],"menu":"公告信息","tableName":"news"},{"buttons":["新增","查看","修改","删除"],"menu":"在线咨询","tableName":"chat"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"核酸检测列表","menuJump":"列表","tableName":"hesuanjiance"}],"menu":"核酸检测模块"},{"child":[{"buttons":["查看"],"menu":"公告信息列表","tableName":"news"}],"menu":"公告信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["查看","预约"],"menu":"核酸检测","menuJump":"列表","tableName":"hesuanjiance"}],"menu":"核酸检测管理"},{"child":[{"buttons":["查看","删除","支付"],"menu":"核酸预约","menuJump":"列表","tableName":"hesuanyuyue"}],"menu":"核酸预约管理"},{"child":[{"buttons":["查看"],"menu":"核酸报告","menuJump":"列表","tableName":"hesuanbaogao"}],"menu":"核酸报告管理"},{"child":[{"buttons":["查看","删除"],"menu":"我的收藏管理","tableName":"storeup"}],"menu":"我的收藏管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"核酸检测列表","menuJump":"列表","tableName":"hesuanjiance"}],"menu":"核酸检测模块"},{"child":[{"buttons":["查看"],"menu":"公告信息列表","tableName":"news"}],"menu":"公告信息模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"}]
    }
}
export default menu;
