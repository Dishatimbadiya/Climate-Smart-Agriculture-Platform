exports.homeRoutes = (req, res) => {
    res.render('index');
};

exports.registerUser = (req, res) => {
    res.render('registerUser');
};

exports.predictCrop = (req, res) => {
    res.render('predictCrop');
};
