const mongoose = require('mongoose');

const BetSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "OdinCircledbModel", required: true },
  roomId: { type: String, required: true },
  amount: { type: Number, required: true },
  type: { type: String, enum: ["bet", "win", "lost"], default: "bet" },
  createdAt: { type: Date, default: Date.now }
});

const BetModel = mongoose.model('Bet', BetSchema);

module.exports = BetModel;
