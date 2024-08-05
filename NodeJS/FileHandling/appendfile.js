const fs = require('fs');

//creating file synchronously
fs.writeFileSync("./NodeJS/FileHandling/myCreatedFile.txt","This is created by @monukd01dev");

//appending data to a file
fs.appendFileSync("./NodeJS/FileHandling/myCreatedFile.txt","\nThis is the appended data");

//deleting a file 
// fs.unlinkSync("myCreatedFile.txt")


//coping a file 
fs.cpSync('./NodeJS/FileHandling/myCreatedFile.txt',"./NodeJS/FileHandling/cpyMyCreatedFile.txt");

//reading from a file

fs.readFile("./NodeJS/FileHandling/myCreatedFile.txt","utf-8",(err,data)=>{
    if(err){
        console.error(err);
    }else{
        console.log(data)
    }
});


//making a directory
fs.mkdirSync("./NodeJS/FileHandling/myDir/child_1", {recursive:true});
fs.mkdirSync("./NodeJS/FileHandling/myDir/child_2", {recursive:true});

// fs.unlinkSync("./NodeJS/FileHandling/myDir",{recursive:true})// this delete single file only

// for deleting directory use fs.rmSync

// fs.rmSync('./NodeJS/FileHandling/myDir', { recursive: true, force: true }); //we use this only
// fs.rmdirSync() is deprecated 

