

const authenticated = async (req, res, next) => {
    if(req.session.user) {
        console.log(req.session.user);
    next();
    }
    else res.status(401).json({
        ok:false,
        response:"Unauthorized"
    })
}

export { authenticated }