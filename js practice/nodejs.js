

// const fs=require('fs')//function req for allow js to access files
// const a=writeFile('./myfile.txt','hello everyone!!')(error)
// if(error){
//     console.log(error);
// }
// else{
//     console.log('done')
// }

node node1.js // start the server    ctr+c
browser-->127.0.0.1::4500 //send the request to url and portno

const http=require('http');
const server=http.createServer((request,response)=>{

response.write("hello world");
response.end();//this function will terminate the processing of server
});
server.listen(4500);
