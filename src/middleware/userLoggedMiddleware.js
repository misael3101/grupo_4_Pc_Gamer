function userLoggedMiddleware(req, res, netx){
    res.locals.isLogged = false;

    if(req.session && req.session.userLogged) {
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged
    }

    netx()
}

module.exports = userLoggedMiddleware; 