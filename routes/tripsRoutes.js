const express = require("express");
const router = express.Router();
const {Location,Travel,Trip} = require("../models/");

router.post('/', async (req, res) => {
    try {
      const tripData = await Trip.create(req.body);
      res.status(200).json(tripData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

// DELETE route to remove a trip 

router.delete('/:id', async (req, res) => {
    try {
      const tripData = await Trip.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (!tripData) {
        res.status(404).json({ message: 'No library card found with that id!' });
        return;
      }
  
      res.status(200).json(tripData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports=router