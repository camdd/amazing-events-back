


const verifications = {
    
    verifyData: (req, res, next) => {
        const {name, category, date, description, image, place, price} = req.body

        if (!name) {
            return res.status(400).json({
                message: "name is required"
            })
        }

        if (!category) {
            return res.status(400).json({
                message: "category is required"
            })
        }

        if (!date) {
            return res.status(400).json({
                message: "date is required"
            })
        }

        if (!description) {
            return res.status(400).json({
                message: "description is required"
            })
        }

        if (!image) {
            return res.status(400).json({
                message: "image link is required"
            })
        }

        if (!place) {
            return res.status(400).json({
                message: "place is required"
            })
        }

        if (!price) {
            return res.status(400).json({
                message: "price is required"
            })
        }

        next()
    },

    verifyId: (req, res, next) => {
        const {id} = req.params
        if (!id) {
            return res.status(400).json({
                message: "id is required"
            })
        }
        next()
    }
}

module.exports = verifications