const express = require("express");
const router = express.Router();
const {Location,Traveler,Trip} = require("../models/");

router.get('/', async (req, res) => {
    try {
      const travelerData = await Traveler.findAll();
      res.status(200).json(travelerData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


// GET ONE route single traveller with associated trips

router.get('/:id', async (req, res) => {
    try {
      const travelerData = await Traveler.findByPk(req.params.id, {
        include: [{ model: Trip }],
      });
  
      if (!travelerData) {
        res.status(404).json({ message: 'No driver found with that id!' });
        return;
      }
  
      res.status(200).json(travelerData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// POST route to add traveller

router.post('/', async (req, res) => {
    try {
      const travelerData = await Traveler.create(req.body);
      res.status(200).json(travelerData);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  

// DELETE route to remove traveller and all associated trips

router.delete('/:id', async (req, res) => {
    try {
      const travelerData = await Traveler.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (!travelerData) {
        res.status(404).json({ message: 'No library card found with that id!' });
        return;
      }
  
      res.status(200).json(travelerData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports=router