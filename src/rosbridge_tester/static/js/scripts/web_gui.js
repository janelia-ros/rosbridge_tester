// Connecting to ROS
// -----------------

var ros = new ROSLIB.Ros();

// Create a connection to the rosbridge WebSocket server.
ros.connect('ws://localhost:9090');

ros.on('connection', function() {
  console.log('Connected to websocket server.');
});

ros.on('error', function(error) {
  console.log('Error connecting to websocket server: ', error);
});

ros.on('close', function() {
  console.log('Connection to websocket server closed.');
});

// Publishing a Topic
// ------------------

var chatter = new ROSLIB.Topic({
  ros : ros,
  name : '/chatter',
  messageType : 'std_msgs/String'
});

var testString = new ROSLIB.Message({
  data : 'testing, testing, 1, 2 3!'
});

document.getElementById('publish').onclick = function() {
  chatter.publish(testString);
  console.log('published ' + testString.data);
  alert('published ' + testString.data);
};

// Subscribing to a Topic
// ----------------------

var listener = new ROSLIB.Topic({
  ros : ros,
  name : '/chatter',
  messageType : 'std_msgs/String'
});

listener.subscribe(function(message) {
  console.log('Received message on ' + listener.name + ': ' + message.data);
  alert('Received message on ' + listener.name + ': ' + message.data);
});

