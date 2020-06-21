(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{368:function(t,a,s){"use strict";s.r(a);var n=s(42),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("a",{attrs:{href:"###centos7%E4%B8%AD%E7%94%A8hadoop%E6%89%A7%E8%A1%8Cjava%E6%96%87%E4%BB%B6"}})]),t._v(" "),s("h4",{attrs:{id:"_1-安装jdk和配置环境变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装jdk和配置环境变量"}},[t._v("#")]),t._v(" 1.安装jdk和配置环境变量")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://blog.csdn.net/qq_43650979/article/details/105081051",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击这里查看在centos7中安装jdk8并配置环境变量"),s("OutboundLink")],1)]),t._v(" "),s("h4",{attrs:{id:"_2-安装hadoop"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装hadoop"}},[t._v("#")]),t._v(" 2.安装hadoop")]),t._v(" "),s("p",[t._v("（1）下载\n可以到"),s("a",{attrs:{href:"https://hadoop.apache.org/releases.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网"),s("OutboundLink")],1),t._v("查看自己需要的版本\n"),s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200325154611400.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQzNjUwOTc5,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}}),t._v("\n然后执行下载命令：\n"),s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200325154407798.PNG",alt:"在这里插入图片描述"}}),t._v("\n然后解压到自己喜欢的路径下，格式：tar zxvf 源文件名  -C 目的路径\n"),s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200325155054326.PNG",alt:"在这里插入图片描述"}}),t._v("\n（2）Hadoop基本设置\n打开hadoop路径下的 etc/hadoop/hadoop-env.sh文件，用vim编辑设置Java环境："),s("code",[t._v("export JAVA_HOME=/usr/lib/jvm/jdk1.8.0_241")]),t._v("（根据自己的jdk版本来设置）\n"),s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200325155538489.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQzNjUwOTc5,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}}),t._v(" "),s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200325155632564.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQzNjUwOTc5,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}}),t._v("\n（3）设置Hadoop环境变量\n"),s("code",[t._v("vim /etc/profile")]),t._v("编辑环境变量：\n"),s("img",{attrs:{src:"https://img-blog.csdnimg.cn/2020032515593032.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQzNjUwOTc5,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),s("h4",{attrs:{id:"_3-利用hadoop执行java包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-利用hadoop执行java包"}},[t._v("#")]),t._v(" 3.利用hadoop执行java包")]),t._v(" "),s("p",[t._v("（1）编辑自己的java文件，然后放到Hadoop目录下的javasource文件夹中\n"),s("img",{attrs:{src:"https://img-blog.csdnimg.cn/2020032516034390.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQzNjUwOTc5,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}}),t._v("\n（2）编译java文件\n格式："),s("code",[t._v("javac XXXX.java -d XXX")]),t._v(" "),s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200325160638543.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQzNjUwOTc5,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}}),t._v("\n（3）打包\n格式："),s("code",[t._v("jar –cvf XXXXXX.jar –C XXX/ .")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("-c: 创建压缩文件\n-v: 输出压缩详细情况\n-f: 指定压缩文件\n-m: 指定清单文件（manifest.mf是描述JAR内容的清单文件） \n-C dir：指定目录\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200325160657804.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQzNjUwOTc5,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}}),t._v("\n（4）执行\n格式："),s("code",[t._v("bin/hadoop jar xxx.jar packagename.classname input output")]),t._v("\n这里的WordCountV2程序需要读取一个文件README.txt，然后计算每个单词出现的次数，然后输出到out文件夹下（如果out已存在，先删除out再执行）\n"),s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200325160718592.png",alt:"在这里插入图片描述"}}),t._v("\n（5）查看结果\n"),s("img",{attrs:{src:"https://img-blog.csdnimg.cn/2020032516074030.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQzNjUwOTc5,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);