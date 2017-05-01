# vue-multi

> A Vue.js project

## Build Setup

###1. npm install -g vue-cli
###2. cd [your project file fold]
###3. vue init wepack [your project name]
###4. edit src fold like this:

> src  
>  |--assets  common scripts,stlyes or other fonts,images,ect  
>  |--components  vue components  
>  |--pages	      html,page files
  
###5. edit build files like this:

> add get-entry.js to get all entry files and it require glob  
> add get-html-plugin-files.js to get all HtmlWebpackPlugin and it require get-entry.js  
> edit wepack.base.conf.js to change the entry(if necessary,add a common entry)  
> edit wepack.dev.conf.js and wepack.prod.conf.js to add HtmlWebpackPlugin to the plugins  
> if it has been added a common entry,please edit webpack.optimize.CommonsChunkPlugin in plugins in wepack.prod.conf.js,it can be referrenced in this project.  
> wepack.base.conf.js,wepack.dev.conf.js and wepack.prod.conf.js need to require either get-entry.js or get-html-plugin-files.js,or both of this two requires. 

##How To Run

> run in develop:`npm start`  
> run in build:`npm run build`

##Referrence:

[使用vue+webpack的多页面框子](http://blog.csdn.net/ychyssss/article/details/52494785)