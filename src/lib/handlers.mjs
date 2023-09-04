export function home(req, res) {
    res.render('home');
}

export function notFound(req, res) {
    res.render('404');
}

export function serverError(err, req, res) {
    res.render('500');
}

export default {
    home,
    notFound,
    serverError
}