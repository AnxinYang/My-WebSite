<h3>Installation instructions for UI server:</h3><br/>

0). install required environment<br/>
    - node.js<br/>
    - git<br/>
    - webpack<br/>
    
1). clone the repository with git<br/>

2). To install, at the root directory, run<br/>
  npm install<br/>
  
3). To run on a development web server, type<br/>
  npm start<br/><br/>
  

4). To build a production version, run<br/>
  webpack -p<br/>
  The command above will generate two files:<br/><br/>
  index.html<br/>
  bundle.js<br/><br/>
  
  To deploy the product version, simply copy the two files above<br/> to <b>the root of the web server</b><br/>
  so that this application can be launch as the default application when access the web server url.<br/>
  For example, in case you have a web server running at 192.168.100, then http://192.168.100 will launch<br/>
  the application (in order to deploy this application to an arbitrary location we need to setup the routing in the web server) <br/>

5). To test, run<br/>
  npm test<br/><br/>
  
<h3>Installation instructions for Broacast server:</h3><br/><br/>

0). Install Node.js. For Centos, you may want to do the following:<br/>
 - login as root or switch to root after login<br/>
 - type:<br/>
    yum update openssl<br/>
    yum install epel-release<br/>
    yum install nodejs<br/>
    yum install npm<br/>
    
1). Then, copy the uiserver directory from github to your vm, say under /home/ne/<br/><br/>
    cd /home/ne/uiserver<br/>
    npm install<br/><br/>
2). Open the port for Broadcast server<br/><br/>
    firewall-cmd --zone=public --add-port=3000/tcp --permanent<br/>
    firewall-cmd --reload<br/>
    
3). Next, start the Broadcast server<br/><br/>
   
    node src/index.js<br/><br/>
    
4). To use the Broadcast server<br/><br/>

   a). as a product user, you need to pass the url of the Broadcast server a url parameter when accessing the UI as the following:<br/><br/>
    
        http://url:port?url=manoserverUrl&ws=broadcastServerUrl
        
        example:
        
        http://192.168.7.163:3000?url=http://192.168.7.233:8080/mano-nfvo/rest/&ws=ws://192.168.7.233:5000/ws
    
   b). as a developer, for your convenience, you need to modify the default url setting in Servers.js, so that you don't need to pass parameters each time when you browse the UI<br/>
    
 <br/>
 
<h3>Instructions to setup Git</h3>

1). Never check in Server.js

after you setup the git environment, please run

git update-index --assume-unchanged src/common/Servers.js

so that you never check in this file. You may want to edit this file locally to point UI to your own servers.
