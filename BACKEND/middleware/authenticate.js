const isAuthenticated = async (req, rese) => {
  try {
    console.log(req.cookies);
  } catch (error) {
    console.log(error);
  }
};

module.exports = isAuthenticated;
