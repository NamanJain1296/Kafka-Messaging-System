const kafka = require('./client');
const group = process.argv[2];

async function init() {
    const consumer = kafka.consumer({ groupId: "user-1" });
    await consumer.connect();

    await consumer.subscribe({ topic: 'rider-updates', fromBeginning: true });

    await consumer.run({
        eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
            try {
                console.log(`${group}: [${topic}]: PART:${partition}:`, message.value.toString());
            } catch (err) {
                console.error('Error processing message:', err);
            }
        },
    });
}

init();
