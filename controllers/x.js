const authusers=require('../models/user')
const {setuser}=require('../service/x')

async function register(req, res) {
    const { username, email, password } = req.body;
    await authusers.create({ Username: username, Email: email, Password: password });
    console.log('user created')
    return res.render('home');
}



async function login(req, res) {
    const { email, password } = req.body;
    const user = await authusers.findOne({ Email: email, Password: password });

    if (user) {
        const token = setuser(user);
        res.cookie('ud', token);
        return res.render('cb');
    } else{
        return res.render('login')
    }
}

module.exports = { register, login };