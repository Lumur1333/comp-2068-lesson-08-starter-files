const Quote = require('../models/quote');

exports.create = async (req, res, next) => {
    try {
        const { author, quote, date } = req.body;
        const qt = await Quote.create({
            author,
            quote,
            date: new Date(date)
        });

        res.status(200).json({message: 'Quote was created successfully.',
    quote: qt});
    } catch (error) {
        next(error);
    }
};

exports.index = async (req, res, next) => {
    try {
        const quotes = await Quote.find();
    } catch (error) {
        next (error);
    }
};

exports.update = async (req, res, next) => {
    try {
      const { _id, author, quote, date } = req.body;
      const qt = await Quote.findOneAndUpdate({_id}, {
        author,
        quote,
        date: new Date(date)
      });

      res.status(200).json({
        message: 'Quote was updated successfully',
        quote: qt
      });
    } catch (error) {
      next(error);
    }
  };

exports.destroy = async (req, res, next) => {
    try {
        const { _id } = req.body;
        await Quote.findOneAndDelete({_id});
        res.status(200).json({
            message: 'Quote was deleted successfully'
        });
    } catch (error) {
        next(error);
    }
};