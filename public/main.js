getcss.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "style.css")
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const style = document.createElement("style")
                style.innerHTML = request.response
                document.body.appendChild(style)
            }
            else {
                alert("CSS加载失败")
            }
        }
    }
    request.send()
}
getjs.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "2.js")
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const script = document.createElement("script")
                script.innerHTML = request.response
                document.body.appendChild(script)
            }
            else {
                alert("JS加载失败")
            }
        }
    }
    request.send()
}
gethtml.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "3.html")
    request.onreadystatechange = () => {
        console.log(request.readyState)
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const div = document.createElement("div")
                div.innerHTML = request.response
                document.body.insertBefore(div, getcss)
                div.style.display = "inline"
            }
            else {
                alert("HTML加载失败")
            }
        }
    }
    request.send()
}
getxml.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "4.xml")
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const xml = request.responseXML
                const text = xml.getElementsByTagName("warning")[0].textContent
                console.log(text.trim())
            }
            else {
                alert("XML加载失败")
            }
        }
    }
    request.send()
}
getjson.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "5.json")
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                console.log(request.response)
                let object = JSON.parse(request.response)
                myname.textContent = object.name
            }
            else {
                alert("JSON加载失败")
            }
        }
    }
    request.send()
}
let n = 1
getpage.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", `/page${n + 1}`)
    if (n === 3) {
        getpage.disabled = "true"
        return
    }
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const array = JSON.parse(request.response)
                array.forEach(item => {
                    let li = document.createElement("li")
                    li.textContent = item.id
                    list.appendChild(li)
                })
            }
            else {
                alert(`page${n + 1}` + ".json加载失败")
            }
            n++
        }
    }
    request.send()
}



