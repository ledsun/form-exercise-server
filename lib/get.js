import url from 'url';
import qs from 'qs';

export default function(req, res, next) {
    if (req.method === 'GET') {
        if (req.url !== '/favicon.ico') {
            let obj = qs.parse(url.parse(req.url).query)
            res.render(obj)
        }
    }
    next()
}
