const fs = require('fs')
const  util = require('util')

class Reader{
    constructor(){
        this.reader = util.promisify(fs.readFile)
    }

    async Read(filepaht){
        try{
            return await this.reader(filepaht, 'utf-8')
        }catch{
            return 'erro ao ler arquivo'
        }
    }
}

module.exports = Reader