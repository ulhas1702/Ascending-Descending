function sort(selector, col){
    var table = document.querySelector(selector)
    var tbody = table.querySelector('tbody')
    var rows = Array.from(document.querySelectorAll('tr'))
    var not = rows.filter(row => !row.querySelector('th'))
    var sorted 

    if(col === 'td:nth-child(1)'){
        sorted = not.sort((a, b) => {
            return a.textContent.localeCompare(b.textContent)
        })
    } else if(col === 'td:nth-child(2)'){
        sorted = not.sort((a, b) => {
            var avalue = parseInt(a.querySelector(col).textContent)
            var bvalue = parseInt(b.querySelector(col).textContent)
            return bvalue - avalue
        })
    }

    sorted.forEach(row => {
        tbody.appendChild(row)
    })
}
