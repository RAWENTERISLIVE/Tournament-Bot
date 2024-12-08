const Razorpay = require('razorpay');

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

module.exports = async (interaction) => {
    const tournamentId = interaction.customId.split('_')[1];
    const order = await razorpay.orders.create({
        amount: 500 * 100, // ₹500 in paise
        currency: 'INR',
        receipt: `tournament_${tournamentId}`,
    });

    const paymentLink = `https://rzp.io/i/${order.id}`;
    await interaction.reply({
        content: `Complete payment here: [Pay Now](${paymentLink})`,
        ephemeral: true,
    });
};
