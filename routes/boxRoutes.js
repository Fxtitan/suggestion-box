// // Routes:
// // GET /byname-suggestion
// // POST /create-suggestion
// // UPDATE /update-suggestion


const express = require('express');
const router = express.Router();
const Boxer = require('../models/Box');

const {getAllSuggestions, getSingleSuggestion } = require('../controllers/suggestionController')

router.get('/all-suggestions', getAllSuggestions);
router.get('/single-suggestion/:id', getSingleSuggestion);


// router.get('/byName-suggestion/', (req, res) => {
// let byName = users.filter((name) => {
// if (name. === req.params.) {
// return res.status(200).json({ confirmation: 'success', name });
// }
// });
// if (!byName.length)
// return res
// .status(400)
// .json({ confirmation: 'fail', message: 'User Does Not Exist' });
// });



router.delete('/delete-suggestion', );








module.exports = router;



