# Script I built for the Raspberry Pi to get node installed an running


sudo apt-get update -y
sudo apt-get upgrade -y
sudo apt-get dist-upgrade -y
sudo apt-get update -y
sudo apt-get autoremove
sudo apt-get full-upgrade -y
sudo apt-get update -y
curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -
sudo apt install -y nodejs
