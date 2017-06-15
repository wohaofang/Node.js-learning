MongoDB基础知识
	什么是MongoDB
		MongoDB是一个开源的基于文档的高性能，高可用，可自动扩展的数据库
	主要特征
		高性能
		丰富的查询语言
		高可用性
		水平扩展能力
		多个存储引擎的支持
	MongoDB的安全





	连接数据库
mongodb://[username:password@]host1[:port1][/[database][?options]]
协议://[用户名:密码@]数据库地址[:数据库端口]/[数据库][?其它选项]


mongoDB 
开启在bin目录下输入mongod --bind_ip 127.0.0.1
新开一个cmd  mongo  
show dbs是看有哪些数据库  
use admin进入admin数据库
show collections 看当前数据库内有哪些集合
db.createUser({user:"boss",pwd:"boss@passok",roles:[{role:"readWriteAnyDatabase",db:'admin'}]})创建数据库
db.system.users.find()查看
“创建新的数据库”db.名字.insert({"name":".... "})

use db 链接到一个指定的数据库
db 显示当前数据库对象或集合
db.dropDatabase() 删除数据库

show collections	显示所有的集合
db.collection.xxx	对集合进行操作
db.collection.drop()	删除集合
db.collection.insert(document)	插入
db.collection.find(document)	查找
更新数据
db.collection.update(
	<query>,
	<update>,
	{
	    upsert:<boolean>,
	    multi:<boolean>,
	    writeConcern:<document>
	}
)
修改某一个字段的时候要加上$set
在db.test.update({name:'benben'},{age:20},{upsert:true})//生成未命名的数据
{multi:true}//修改多条相同的数据
删除文档
	db.collection.remove(<query>,<justOne>)

mongod --auth 必须经过认证才能继续执行下去
--bind_ip		绑定服务IP，如绑定为127.0.0.1，则只能本机访问，不指定默认本机所有IP
--logpath		定MongoDB日志文件，注意是指定文件目录
--logappend		使用追加的方式写日志
--port			指定服务端口号，默认端口27017
--serviceName		指定服务名称
--serviceDisplayName	指定服务名称，有多个mongodb服务时执行
--install		指定作为一个windows服务安装




