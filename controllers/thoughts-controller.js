const req = require('express/lib/request');
const { Thoughts } = require('../models');

const thoughtController = {
    // get all Thoughts
    getAllThoughts(req, res) {
        Thoughts.find({})
            .select('-__v')
            .sort({ _id: -1 })
            .then(dbthoughtsdb => res.json(dbthoughtsdb))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    // get one thought by id
    getThoughtsById({ params }, res) {
        Thoughts.findOne({ _id: params.id })
            .select('-__v')
            .then(dbThoughtsData => {
                if (!dbThoughtsData) {
                    res.status(404).json({ message: 'No thought found with this id!' });
                    return;
                }
                res.json(dbThoughtsData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    // create thought
    createThoughts({ body }, res) {
        Thoughts.create(body)
            .then(dbThoughtsData => res.json(dbThoughtsData))
            .catch(err => res.status(400).json(err));
    },

    // update thoughts by id
    updateThoughts({ params, body }, res) {
        Thoughts.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
            .then(dbThoughtsData => {
                if (!dbThoughtsData) {
                    res.status(404).json({ message: 'No thought found with this id!' });
                    return;
                }
                res.json(dbThoughtsData);
            })
            .catch(err => res.status(400).json(err));
    },

    // delete Thought
    deleteThoughts({ params }, res) {
        Thoughts.findOneAndDelete({ _id: params.id })
            .then(dbThoughtsData => {
                if (!dbThoughtsData) {
                    res.status(404).json({ message: 'No thought found with this id!' });
                    return;
                }
                res.json(dbThoughtsData);
            })
            .catch(err => res.status(400).json(err));
    },

    // delete Reaction
    deleteReactions({ params }, res) {
        Thoughts.updateOne({ _id: params.id }, {
            $pullAll: {
                reactions: [{ _id: req.params.deleteId }]
            }
        })
            .then(dbThoughtsData => {
                if (!dbThoughtsData) {
                    res.status(404).json({ message: 'No reaction found with this id!' });
                    return;
                }
                res.json(dbThoughtsData);
            })
            .catch(err => res.status(400).json(err));
    },

    // add reaction 
    // addReaction({ params, body }, res) {
    //     Thoughts.findOneAndUpdate({ _id: params.id }, {
    //         $push: {
    //             reactions: { body }
    //         },
    //         new: true
    //     })
    //         .then(dbThoughtsData => {
    //             if (!dbThoughtsData) {
    //                 res.status(404).json({ message: 'No reaction found with this id!' });
    //                 return;
    //             }
    //             res.json(dbThoughtsData);
    //         })
    //         .catch(err => res.status(400).json(err));
    // }
}

module.exports = thoughtController; 