async function getMe(req, res) {
  console.log(req.user);

  res.status(200).send({ msg: 'Todo ok' });
}

module.exports = {
  getMe,
};
