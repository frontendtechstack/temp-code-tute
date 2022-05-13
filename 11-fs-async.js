
const fs = require('fs');

fs.readFile('./content/first.txt','utf-8',(err, result) => {
    if(err){
        return;
    }
    const first = result;
    fs.readFile('./content/second.txt','utf-8', (err,result) => {
        if(err){
            return;
        }
        const second = result;
        fs.writeFile(
            './content/result-async.txt',
            `This is the result: ${first} ${second}`, 
            {flag: 'a'}, (err, result) => {
            if(err){
                return;
            }
            console.log('Sucess');
        });
    });
});

