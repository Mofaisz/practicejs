let fs = require("fs");
let path = require("path");

let folderPath = path.join(__dirname,"./json-1");
let totalFile = 5;

function createFile(){
    return new Promise((resolve, reject) => {
        let createFile =[]
        for(let index = 0; index<totalFile; index++){
            let fileName = `file${index}.json`
            let filePath = path.join( folderPath,fileName);
            let content = JSON.stringify({id:1,value:Math.random() *20});
            createFile.push(
                fs.promises.writeFile(filePath, content)
            .then(() =>{
                console.log(`${fileName} created successfully`)
            })
            .catch((err) =>{
                throw new Error(err)
            })
            )

        }
        Promise.all(createFile)
        .then(() =>{
            resolve("File created successfully")
        })
        .catch((err) =>{
            reject(err)
        })
    })
}
createFile()
.then((msg) =>{
    console.log(msg)
})
.catch((err) =>{
    console.log(err)
});


