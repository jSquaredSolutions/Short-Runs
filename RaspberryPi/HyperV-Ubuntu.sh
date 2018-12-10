# For Linux Machine to get up and running for SPFx dev Ubuntu
# elevater perms       chmod 755 HyperV-Ubuntu.sh
# then use             bash HyperV-Ubuntu.sh
sudo apt-get update -y
sleep 70
sudo apt-get upgrade -y
sleep 800
sudo apt-get dist-upgrade -y
sleep 200
sudo apt-get update -y
sleep 10
sudo apt-get autoremove -y
sleep 10
sudo apt-get full-upgrade -y
sleep 10
sudo apt-get install curl -yo
sleep 10
sudo apt-get update -y
sleep 10
curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -
sleep 60
sudo apt install nodejs -y
sleep 30 
sudo apt-get update -y
sleep 60 
# I don't know what linux-virtual-lts-xenial is, I think this might have been for hyper-v screen res
sudo apt-get install linux-virtual-lts-xenial -y
sleep 10
# I don't know what linux-tools-virtual-lts-xenial is, I think these might be for screen res
sudo apt-get install linux-tools-virtual-lts-xenial linux-cloud-tools-virtual-lts-xenial -y
sleep 10
npm install -g yo gulp -y
sleep 30
sudo apt-get update -y
sleep 15
sudo apt-get autoremove -y
sleep 15
sudo shutdown -P now