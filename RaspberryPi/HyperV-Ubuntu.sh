# For Linux Machine to get up and running for SPFx dev Ubuntu

echo "starting"
sudo apt-get update -y
sudo apt-get upgrade -y
sudo apt-get dist-upgrade -y
sudo apt-get update -y
sudo apt-get autoremove
sudo apt-get full-upgrade -y
sudo apt-get update -y
curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -
sudo apt install -y nodejs
sudo apt-get update
sudo apt-get install linux-virtual-lts-xenial
sudo apt-get install linux-tools-virtual-lts-xenial linux-cloud-tools-virtual-lts-xenial
