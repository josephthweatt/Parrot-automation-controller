# Parrot-automation-controller
A small program I wrote for my first Hackathon, Hack AZ 2016. Also my first stab at Node JS and drone programming.

The program aims to automate the motion of a drone (in this case, the ARDrone by Parrot) through an array of text. The program uses NodeCopter's interface to communicate instructions to the drone, and uses recursive methods to establish dynamic command strings. To use this program, I recommend installation of NodeJS and the GIT BASH shell.

Writing commands
----------------
Commands should be given through a .txt file entitled MovementControls.txt 
Each command must assume the rigid (yet simple) grammar: 

      <action desired> <time allocated>

  for each desired command. Time ought to be given as a unit of seconds (decimals accepted), and a full list of commands are available in the node copter git for ar-drone, in the Client API section of the readme.
    Available here: https://github.com/felixge/node-ar-droneUse only one space between each item. 

  Due to the recursive properties of the program, commands must be given from last to first commands, with the last always being 'end 0'.
  Ex.) for a 3-command operation,
      end 0 <command 3> <time allocated for 3> <command 2> <time allocated for 2> <command 1> <time allocated for 1>

Running the program
-------------------
To run instructions on the ARDrone, you must connect to the drone's built-in wifi with the device running the program. Once you have connected, simply run the GIT BASH on the project's folder and type the following command:
    node recursiveInputControl.js MovementCodes.txt
The drone should activate and execute commands at this point.

Special thanks to
-----------------
  *Hack AZ, for providing the hardware and people that made this happen
  
  *My team, Mona, Drew, and Rooz, for their help, feedback, and for chasing down all the runaway drones.
