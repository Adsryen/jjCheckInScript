# jjCheckInScript
掘金自动签到脚本

## Start quickly
将项目Fork到自己的仓库，然后在`config.js`中填入掘金`cookie`，每天九点会自动触发`action`执行签到

自从用了自动签到后  妈妈再也不用担心我忘记签到了   兑换Switch不是梦

### cookie获取方式
登陆进入到掘金，**F12**打开控制台，选择**network**后随便点击一个接口，找到请求头中的`cookie`，选中数据后右键**复制值**

![image](https://user-images.githubusercontent.com/46524158/148544112-d965ec3a-2b07-4b2d-a2f4-db42e56bacb7.png)

> 为啥不用`document.cookie`? 


 控制台输入命令获取到的cookie并不完整
 
 这是控制台获取到的`cookie`，对比一下接口的`cookie`，相差很大
 ![image](https://user-images.githubusercontent.com/46524158/148544544-f1c29caf-389c-43b0-bd80-45c64b107a73.png)



## 具备能力
- [x] `action` 每天9点定时执行
- [ ] 邮件通知
  - [ ] cookie过期邮件通知
- [x] 签到
- [ ] 占喜气
- [x] 抽奖
- [ ] 设定想要兑换的周边 自动计算还需要签到多少天

## 声明
本项目仅适用于学习交流  并不具备其他用途  也没有经过掘金官方团队  若是被封号  与我无关（手动狗头保命）

有其他想法或功能 欢迎进行讨论 
