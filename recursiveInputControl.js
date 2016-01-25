var commandNum;

var heightSpeed = .4;
var distanceSpeed = .3;
var rotateSpeed = .4;

var arDrone = require('ar-drone');
var client = arDrone.createClient();


var strArray;
// Make sure we got a filename on the command line.
if (process.argv.length < 3) {
  console.log('Usage: node ' + process.argv[1] + ' FILENAME');
  process.exit(1);
}
// Read the file and print its contents.
var fs = require('fs'), filename = process.argv[2];
fs.readFile(filename, 'utf8', function(err, data) {
	if (err) throw err;
	strArray = data.toString().split(" ");
	commandNum = 0;

	client.takeoff();
	client.battery();

	andAfter(strArray);

	function andAfter() {
		var command, seconds;
		command = strArray[commandNum];
		commandNum++;
		seconds = strArray[commandNum] * 1000;
		commandNum++;
		if (strArray[commandNum] != null) {
			console.log('stepped into new method');
			andAfter();
		}
		//do the command
		switch (command) {
			case 'up': 
				client.after(seconds, function() {
				   this.up(heightSpeed);
				});
				client.stop(); break;
			case 'down':
				client.after(seconds, function() {
				   this.down(heightSpeed);
				});
				client.stop(); break;
			case 'front':
				client.after(seconds, function() {
				   this.front(heightSpeed);
				}); break;
			case 'back':
				client.after(seconds, function() {
				   this.back(distanceSpeed);
				}); break;
			case 'left':
				client.after(seconds, function() {
				   this.back(distanceSpeed);
				}); client.stop(); break;
			case 'right':
				client.after(seconds, function() {
				   this.right(distanceSpeed);
				});
				client.stop(); break;
			case 'stay':
				client.stop(); break;
			case 'clockwise':
				client.after(seconds, function() {
				   this.clockwise(distanceSpeed);
				});
				client.stop(); break;
			case 'counterClockwise':
				client.after(seconds, function() {
				   this.counterClockwise(distanceSpeed);
				});
				client.stop(); break;
			case 'land':
				client.land(); break;
			case 'takeoff':
				client.takeoff();
				client.battery(); break;
			case 'phiM30Deg':
				client.after(seconds, function() {
				   this.animate('phiM30Deg');
				});
				client.stop(); break;
			case 'phi30Deg': 
				client.after(seconds, function() {
				   this.animate('phiM30Deg');
				});
				client.stop(); break;
			case 'thetaM30Deg':
				client.after(seconds, function() {
				   this.animate('thetaM30Deg');
				});
				client.stop(); break;
			case 'theta30Deg':
				client.after(seconds, function() {
				   this.animate('theta30Deg');
				});
				client.stop(); break;
			case 'theta20degYaw200deg':
				client.after(seconds, function() {
				   this.animate('theta20degYaw200deg');
				});
				client.stop(); break;
			case 'theta20degYawM200deg':
				client.after(seconds, function() {
				   this.animate('theta20degYawM200deg');
				});
				client.stop(); break;
			case 'turnaround':
				client.after(seconds, function() {
				   this.animate('turnaround');
				});
				client.stop(); break;
			case 'turnaroundGodown':
				client.after(seconds, function() {
				   this.animate('turnaroundGodown');
				});
				client.stop(); break;
			case 'yawShake':
				client.after(seconds, function() {
				   this.animate('yawShake');
				});
				client.stop(); break;
			case 'yawDance':
				client.after(seconds, function() {
				   this.animate('yawDance');
				});
				client.stop(); break;
			case 'phiDance':
				client.after(seconds, function() {
				   this.animate('phiDance');
				});
				client.stop(); break;
			case 'thetaDance':
				client.after(seconds, function() {
				   this.animate('thetaDance');
				});
				client.stop(); break;
			case 'vzDance':
				client.after(seconds, function() {
				   this.animate('vzDance');
				});
				client.stop(); break;
			case 'wave':
				client.after(seconds, function() {
				   this.animate('wave');
				});
				client.stop(); break;
			case 'phiThetaMixed':
				client.after(seconds, function() {
				   this.animate('phiThetaMixed');
				});
				client.stop(); break;
			case 'doublePhiThetaMixed':
				client.after(seconds, function() {
				   this.animate('doublePhiThetaMixed');
				});
				client.stop(); break;
			case 'flipAhead':
				client.after(seconds, function() {
				   this.animate('flipAhead');
				});
				client.stop(); break;
			case 'flipBehind':
				client.after(seconds, function() {
				   this.animate('flipBehind');
				});
				client.stop(); break;
			case 'flipLeft':
				client.after(seconds, function() {
				   this.animate('flipLeft');
				});
				client.stop(); break;
			case 'flipRight':
				client.after(seconds, function() {
				   this.animate('flipRight');
				});
				client.stop(); break;
			case 'end':
				client.after(2000, function() {
					//this.animateLeds('blinkOrange', 5, 2);
					this.stop();
	 			    this.land();
	 			}); break;
			default:
				client.stop();
		}
	}
});