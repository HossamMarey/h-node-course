module.exports.renderDashboardHome = (req, res) => {


  const cookiesStr = req.get('Cookie')
  const cookies = {}

  cookiesStr?.split(';').forEach(cookie => {
    cookies[cookie?.split('=')[0].trim()] = cookie?.split('=')[1]
  })

  if (!req.session.isAuth) {
    return res.redirect('/')
  }

  console.log('cookies', req.session.isAuth)
  res.render("dashboard");
}

