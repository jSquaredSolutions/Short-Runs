#!/bin/sh
echo "starting"
sudo apt-get update -y
sudo apt-get upgrade -y
sudo apt-get dist-upgrade -y
sudo apt-get update -y
sudo apt-get autoremove -y
sudo apt-get full-upgrade -y
sudo apt-get update -y
clear
sudo apt-get install curl -y
sudo apt-get update -y
sudo apt-get install linux-virtual-lts-xenial -y
sudo apt-get install linux-tools-virtual-lts-xenial linux-cloud-tools-virtual-lts-xenial -y
sudo apt-get install git -y
sudo apt-get update -y
sudo apt-get install dconf-tools -y
sudo dconf write /org/gnome/desktop/interface/cursor-size 48
sudo apt-get autoremove -y
sudo apt-get install git -y
curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -
sudo apt-get install nodejs -y
sudo npm install -g yo gulp
sudo npm install webpack 
sudo npm install @microsoft/generator-sharepoint -g
sudo apt-get update -y
sudo apt-get autoremove -y



