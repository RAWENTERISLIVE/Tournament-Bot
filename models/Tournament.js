const mongoose = require('mongoose');

const ParticipantSchema = new mongoose.Schema({
    name: String,
    gameId: String,
    contact: String,
    paymentStatus: { type: String, enum: ['pending', 'confirmed'], default: 'pending' },
});

const TournamentSchema = new mongoose.Schema({
    name: String,
    game: String,
    prizeMoney: Number,
    maxParticipants: Number,
    participants: [ParticipantSchema],
});

module.exports = mongoose.model('Tournament', TournamentSchema);
