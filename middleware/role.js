const role = (roles) => {
    return (req, res, next) => {
        if (roles.includes(req.user.role)) {
            next();
        } else {
            return res.status(403).json({ msg: 'Access denied' });
        }
    };
};

module.exports = role;