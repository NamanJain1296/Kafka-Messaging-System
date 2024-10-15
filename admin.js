const kafka = require('./client');

async function init() {
    const admin = kafka.admin();
    console.log("Admin Connecting...");
    await admin.connect();
    console.log("Admin Connection Success...");

    console.log('Creating Topic [rider-updated]');
    await admin.createTopics({
        topics: [{
            topic: "rider-updated",
            numPartitions: 2,
        }],
    });
    console.log("Topic Created Success [rider-updated]");

    console.log("Disconnecting Admin...");
    await admin.disconnect();
}

init();
