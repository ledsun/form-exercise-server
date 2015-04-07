export default function(req, res, next) {
    res.render = function(values) {
        console.log(req.method, req.url, values)

        let html = `
            <div>Method: ${req.method}</div>
            <div>URL: ${req.url}</div>
            <div>Values: ${JSON.stringify(values)}</div>
        `

        res.end(html)
    }
    next()
}
