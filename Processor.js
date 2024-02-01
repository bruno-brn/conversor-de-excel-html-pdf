class Processor {
    static Process(data){
        var rows = data.split('\r\n')
        var rowsL = []

        rows.forEach(row => {
            var array = row.split(';')
            rowsL.push(array)
        })
        return rowsL
    }
}

module.exports = Processor