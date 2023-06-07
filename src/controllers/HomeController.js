class HomeController {
  index(req, res) {
    res.json('MADRI_API: HOME ROUTE - INDEX');
  }
}

export default new HomeController();
