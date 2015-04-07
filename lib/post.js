export default function(req, res, next) {
    if (req.method === 'POST') {
        res.render(req.body)
    }
    next()
}
