#rosbridge_tester

Authors:

    Peter Polidoro <polidorop@janelia.hhmi.org>

License:

    BSD

```shell
sudo apt-get install ros-kinetic-rosbridge-server
mkdir -p ~/catkin_ws/src
cd ~/catkin_ws/src
catkin_init_workspace
git clone https://github.com/janelia-ros/rosbridge_tester.git
cd ~/catkin_ws/
catkin_make
source devel/setup.bash
roslaunch rosbridge_tester rosbridge_tester.launch
```

```shell
rqt_console
```

```shell
cd catkin_ws/
source devel/setup.bash
rostopic pub -1 /chatter std_msgs/String "test"
```
