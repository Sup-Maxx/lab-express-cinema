const router = require("express").Router()

router.get("/movies/:moviesId", (req,res) => {
    Movie.findId(req.params.movieId)
    .then((result) => {
        res.render("/movies/movie-details", result)
    })
    res.send(req.params)
})

router.get("/movies", (req,res) => {
    Movie.find()
    .then((result) => {
        console.log(result)
        res.render("/movies-list", {result})
    })
})

module.exports = router
