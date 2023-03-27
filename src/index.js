const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	try{
		await fs.writeFile(fileName,fileContent)
		console.log('file created');
	}catch(error){
			console.log(error);
	}
}
myFileWriter('input.txt','Hello I am from node')

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function  name
	try{
		const data = await fs.readFile(fileName,'utf-8')
		console.log(data);
	}catch(error){
		console.log(error);
	}
}
myFileReader('input.txt')


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function  name
	try{
		await fs.appendFile(fileName,fileContent)
		console.log('file updated');
	}catch(error){
		console.log(error);
	}
}
myFileUpdater('input.txt',' and where are you from ?')

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	try{
		await fs.unlink(fileName)
		console.log('file has been deleted');
	}catch(error){
		console.log(error);
	}
}
myFileDeleter('input.txt')




module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }