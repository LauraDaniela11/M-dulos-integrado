const validar = (req, res) => {
    if (req.session.usuario) {
      res.status(200).send('Haz  sido autorizado')
    } else {
      res.status(401).send('No eres bienvenido')
    }
}
module.exports = validar