function checkRole(allowedRoles) {
    return (req, res, next) => {
        const role = req.header('role')
        if (!role) return res.status(403).send('Role not provided')
        if (!allowedRoles.includes(role)) return res.status(403).send('Access denied')
        next()
    }
}
module.exports = checkRole
