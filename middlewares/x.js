const { getuser } = require('../service/x');

function restrictedlog(req, res, next) {
    const authcook = req.cookies.ud;
    console.log(authcook)
    
    if (!authcook) {
        console.log('no cookie found')
        return res.render('home');
    }

    const user = getuser(authcook);
    console.log(user)
    
    if (!user) {
        console.log('no user found')
        return res.render('home');
    }else{

    req.user = user;
    next();}
}

module.exports = { restrictedlog };