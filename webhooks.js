const Tournament = require('./models/Tournament');

module.exports = async (req, res) => {
    try {
        const data = req.body;

        if (data.event === 'payment.captured') {
            const [_, tournamentId] = data.payload.payment.entity.receipt.split('_');
            const tournament = await Tournament.findById(tournamentId);
            tournament.participants.find(p => p.contact === data.payload.payment.entity.notes.contact).paymentStatus = 'confirmed';
            await tournament.save();

            res.status(200).send('Payment updated successfully');
        } else {
            res.status(400).send('Event not supported');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};
