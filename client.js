const { Kafka } = require("kafkajs");

// Kafka Client
const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ["172.26.32.1:9092"],
});

module.exports = kafka;
