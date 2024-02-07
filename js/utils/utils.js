window.apply = (obj, lambda) => {
    lambda(obj)
    return obj
}

window.add = (obj, type, lambda) => {
    if (typeof type == 'string') {
        obj.appendChild(apply(document.createElement(type), lambda))
    } else {
        obj.appendChild(type)
    }
    return obj
}