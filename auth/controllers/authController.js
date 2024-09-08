module.exports.renderLogin = (req, res) => {
  res.render("login");
}

module.exports.postLogin = (req, res) => {

  console.log(req.body)
  // dddd

  res.setHeader('Set-Cookie', 'isAuth=true; Max-Age=10000')

  // DELETE Cookie
  // res.setHeader('Set-Cookie', 'isAuth=true; Max-Age=0')
  req.session.isAuth = true

  req.session.save((err) => {
    if (err) {
      console.log(err)
    }
    res.redirect('/dashboard')
  })
}


module.exports.postLogout = (req, res) => {

  // DELETE sESSION Cookie
  req.session.destroy(() => {
    res.redirect('/')
  })

}