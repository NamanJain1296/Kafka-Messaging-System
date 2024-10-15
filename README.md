# Kafka-Messaging-System

## Project Overview
This project demonstrates the use of **Apache Kafka** for real-time streaming and message handling in a distributed system using **Node.js**. It includes a Kafka producer that sends messages to a specific topic and a Kafka consumer that listens for and processes messages from that topic.

### Features:
- **Kafka Producer**: Sends messages to a topic in Kafka.
- **Kafka Consumer**: Consumes messages from the Kafka topic.
- **Real-Time Streaming**: Implements real-time message passing between producer and consumer.
- **Error Handling**: Includes basic error handling for producer and consumer operations.

## Project Structure
```bash
.
├── client.js             # Kafka client configuration
├── producer.js           # Kafka producer that sends messages
├── consumer.js           # Kafka consumer that processes messages
├── admin.js              # Kafka admin to create topics
├── package.json          # Node.js project dependencies
├── .gitignore            # Files to be ignored by Git
└── README.md             # Project documentation
```

## Prerequisites

To run this project, you need the following:
- **Node.js** (v14 or later) installed
- **Apache Kafka** installed and running locally or remotely
- **KafkaJS** library installed

You can install KafkaJS by running:
```bash
npm install kafkajs
```

## How to Run the Project

### 1. Clone the Repository
Clone this project to your local machine:
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Set Up Kafka
Make sure you have Kafka running on your machine. Start the Zookeeper and Kafka services.

### 3. Configure Kafka Broker
In the `client.js` file, ensure that your Kafka broker is correctly configured:
```js
const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['localhost:9092']   // Update with your broker IP/Port
});
```

### 4. Run the Kafka Admin (Create Topic)
Before running the producer and consumer, you need to create the topic in Kafka:
```bash
node admin.js
```
This script will create a topic called `rider-updates` with 2 partitions.

### 5. Run the Producer
Start the producer that sends messages to the Kafka topic:
```bash
node producer.js
```
The producer will send messages to the `rider-updates` topic.

### 6. Run the Consumer
Start the consumer that listens to messages from the `rider-updates` topic:
```bash
node consumer.js
```
The consumer will log messages received from the Kafka topic.

## Example
Once you run both the producer and consumer, the following message will be sent by the producer and consumed by the consumer:

```bash
[rider-updates]: PART:0: {"name":"Tony Stark", "loc":"SOUTH"}
```

## Future Improvements
- Implement advanced retry mechanisms for the producer.
- Add monitoring and metrics collection.
- Set up Kafka cluster with multiple brokers.
- Implement message partitioning and custom partitioners.

## License
This project is licensed under the MIT License. See the `LICENSE` file for more details.
