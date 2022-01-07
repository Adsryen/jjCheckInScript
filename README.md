# jjCheckInScript
掘金自动签到脚本

## Start quickly
将项目Fork到自己的仓库，然后在`config.js`中填入掘金到`cookie`，项目每天九点会自动触发`action`执行签到

### cookie获取方式
进入到掘金，**F12**打开控制台，选择**network**后随便点击一个接口，找到请求头中的`cookie`，选中数据后右键**复制值**
> 为啥不用`document.cookie`? 


## 脚本功能
- [ ] `action` 每天9点定时执行