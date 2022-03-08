const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtsById,
    createThoughts,
    updateThoughts,
    deleteThoughts,
    deleteReactions,
    addReaction
} = require('../../controllers/thoughts-controller');

// Set up GET all and POST at /api/thoughts
router
    .route('/')
    .get(getAllThoughts)
    .post(createThoughts);

// Set up GET one, PUT, and DELETE at /api/thoughts/:id
router
    .route('/:id/:deleteId?')
    .get(getThoughtsById)
    .put(updateThoughts)
    .delete(deleteThoughts);

// router
//     .route('/reactions/:id/:deleteId')
//     .put(deleteReactions);

// router
//     .route('/reactions/:id')
//     .put(addReaction);

module.exports = router;