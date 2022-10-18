const { default: mongoose } = require('mongoose');
const favouritesService = require('../services/favourites');
const itemService = require('../services/item');

/*
const createFavourite = async (req, res) => {
    const { userId } = req.params;
    try {
        const favourites = await favouritesService.create({userId});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}
*/

const getFavourite = async (req, res) => {
    const { userId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(404).json({error: 'Favourite does not exist'});
    }

    const favourite = await favouritesService.readByUserId(userId);

    if (!favourite) {
        return res.status(404).json({error: 'Favourite does not exist'});
    }

    const items = []

    console.log(favourite.items);

    for (const itemId of favourite.items) {
        const item = await itemService.readById(itemId);
        if (item.sold == false) {
            items.push(item);
        }
    }

    res.status(200).json(items);
}

/*
const deleteFavourite = async (req, res) => {
    const { favId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(favId)) {
        return res.status(404).json({error: 'Favourite does not exist'});
    }

    const favourite = await favouritesService.deleteById(favId);
    //res.status(200).json(cart);
}

const updateFavourite = async (req, res) => {
    const { favId } = req.params;
    const { itemId, quantity } = req.body;
    if (!mongoose.Types.ObjectId.isValid(favId)) {
        return res.status(404).json({error: 'Favourite does not exist'});
    }

    if (itemId == -1 && quantity == -1) {
        const favourite = await favouritesService.removeAllItems(favId);
        if (!favourite) {
            return res.status(404).json({error: 'Failed to remove all items'});
        }
    }
    else {
        if (!mongoose.Types.ObjectId.isValid(itemId)) {
            return res.status(404).json({error: 'Item does not exist'});
        }
        if (quantity > 0) {
            const favourite = await favouritesService.addItem(favId, itemId);
            if (!favourite) {
                return res.status(404).json({error: 'Failed to add item'});
            }
        }
        else if (quantity < 0) {
            const favourite = await favouritesService.deleteItem(favId, itemId);
            if (!favourite) {
                return res.status(404).json({error: 'Failed to delete item'});
            }
        }
    }
}*/

const addtoFavourite = async (req, res) => {
    const { userId, itemId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(404).json({error: 'Favourite does not exist'});
    }
    if (!mongoose.Types.ObjectId.isValid(itemId)) {
        return res.status(404).json({error: 'Item does not exist'});
    }

    const favourite = await favouritesService.addItem(userId, itemId);

    if (!favourite) {
        return res.status(404).json({error: 'Failed to add item'});
    }
    //res.status(200).json(cart);
}

const deleteFromFavourite = async (req, res) => {
    const { userId, itemId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(404).json({error: 'Favourite does not exist'});
    }
    if (!mongoose.Types.ObjectId.isValid(itemId)) {
        return res.status(404).json({error: 'Item does not exist'});
    }

    const favourite = await favouritesService.deleteItem(userId, itemId);

    if (!favourite) {
        return res.status(404).json({error: 'Failed to delete item'});
    }
    //res.status(200).json(cart);
}

const deleteAllFromFavourite = async (req, res) => {
    const { userId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(404).json({error: 'Favourite does not exist'});
    }

    const favourite = await favouritesService.removeAllItems(userId);
    
    if (!favourite) {
        return res.status(404).json({error: 'Failed to delete all'});
    }
    //res.status(200).json(cart);
}

module.exports = {
    getFavourite,
    addtoFavourite,
    deleteFromFavourite,
    deleteAllFromFavourite,
}