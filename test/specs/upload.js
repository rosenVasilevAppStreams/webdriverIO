const path = require('path'); //importing path package, it is included in node 

describe('Describe tests', () =>{
it('Simple upload', async () =>{
//open url

await browser.url('https://the-internet.herokuapp.com/upload');

//store test file path
const filePath = path.join(__dirname, '../data/download, (1).jpeg'); // __dirname is the absolute path for the current dir - admin/../test/spec/upload/js and
// .. is for one level up to the data dir

//upload test file
const remoteFilePath = await browser.uploadFile(filePath);

//set file path value in the input field
await $('#file-upload').setValue(remoteFilePath);
await $('#file-submit').click();

//assertion
 await expect($('h3')).toHaveText('File Uploaded!');

});
it.only('upload in a hidden input field', async ()=>{
//open url
await browser.url('/cart/');

//store test file path
const filePath = path.join(__dirname, '../data/download, (1).jpeg'); // __dirname is the absolute path for the current dir - admin/../test/spec/upload/js and
// .. is for one level up to the data dir

//upload test file
const remoteFilePath = await browser.uploadFile(filePath);

//remove the hidden class 
await browser.execute("document.querySelector('#upfile_1').className = ' '"); //the code in the execute() was written in the console of the browser
// #upfile_1 is an id that was in the  <input type=file ..> block, we use it to show the choose file button by removing the hidden class
//browser.execute executes JS in the browser

//set file path value in the input field
await $('#upfile_1').setValue(remoteFilePath);
await $('#upload_1').click();

//assertion
await expect($('#wfu_messageblock_header_1_label_1')).toHaveTextContaining('uploaded successfully');


});
});