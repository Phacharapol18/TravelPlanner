const express = require("express");
const router = express.Router();
const {Location,Traveler,Trip} = require("../models/");


router.get('/', async (req, res) => {
    try {
      const locationData = await Location.findAll();
      res.status(200).json(locationData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// GET ONE route for one location and its associated trips

router.get('/:id', async (req, res) => {
    try {
      const locationData = await Location.findByPk(req.params.id, {
        include: [{ model: Trip }],
      });
  
      if (!locationData) {
        res.status(404).json({ message: 'No driver found with that id!' });
        return;
      }
  
      res.status(200).json(locationData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// POST route to add a location 

router.post('/', async (req, res) => {
    try {
      const locationData = await Location.create(req.body);
      res.status(200).json(locationData);
    } catch (err) {
      res.status(400).json(err);
    }
  });



// DELETE route to remove a location and associated trips

router.delete('/:id', async (req, res) => {
    try {
      const locationData = await Location.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (!locationData) {
        res.status(404).json({ message: 'No library card found with that id!' });
        return;
      }
  
      res.status(200).json(locationData);
    } catch (err) {
      res.status(500).json(err);
    }
  });




module.exports = router;
