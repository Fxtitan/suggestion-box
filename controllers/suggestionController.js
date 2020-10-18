const Boxer = require('../models/Box');

module.exports = {
    getAllSuggestions: (req, res) => {
        Boxer.find()
        .then((users) => {
        return res.status(200).json({ confirmation: 'success', users });
        })
        .catch((err) => res.status(500).json({confirmation: 'failed', err}));
        },

        getSingleSuggestion: (req, res) => {
            let foundSuggestion = users.filter((suggestion) => {
            if (suggestion.id === req.params.id) {
            return res.status(200).json({ confirmation: 'success', suggestion });
            }
            });
            if (!foundSuggestion.length)
            return res
            .status(400)
            .json({ confirmation: 'failure', message: 'Suggestion Does Not Exist' });
            },
            
            deleteSuggestion: (req,res) => {
                try {
                Boxer.findByIdAndDelete(req.params.id)
                .then((suggestion) => {
                res.status(200).json({message: 'User Deleted', suggestion});
                })
                .catch((err) => 
                res.status(400)
                .json({confirmation: 'fail', message: 'Suggestion Not Found'}))
                } catch (err) {
                return res.status(500).json({ message: 'Server Error', err});
                }
                }
}