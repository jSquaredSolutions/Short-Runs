# For Linux Machine to get up and running for SPFx dev Ubuntu
# elevater perms       chmod 755 HyperV-Ubuntu.sh
# then use 'touch setup.sh' in the Ubuntu shell
# then copy and paste the code there
# I don't know what linux-virtual-lts-xenial is, I think this might have been for hyper-v screen res
# sudo apt-get install linux-virtual-lts-xenial -y

sudo apt-get update -y
echo "sudo apt-get update -y [DONE]"
sudo apt-get upgrade -y
sudo apt-get dist-upgrade -y
sudo apt-get update -y
sudo apt-get autoremove -y
sudo apt-get full-upgrade -y
sudo apt-get install curl -y
sudo apt-get update -y
curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -
sleep 60
sudo apt install nodejs -y
sleep 30 
sudo apt-get update -y
sleep 60 
echo "sudo apt-get update -y [DONE]"
sleep 30
sudo apt-get update -y
sleep 15
echo "sudo apt-get update -y"
sudo apt-get autoremove -y
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
sudo dpkg -i google-chrome-stable_current_amd64.deb
sudp apt-get install git-core
sudo apt-get update -y
sudo apt-get purge firefox -y
sudo apt-get purge thunderbird* -y
wget http://jsquaredsolutions.net/code_1.29.1-1542309157_amd64.deb
sudo dpkg -i code_1.29.1-1542309157_amd64.deb
sudo apt-get update -y
sudo apt-get autoremove -y
sudo apt --fix-broken install -y
sudo apt-get install build-essential -y
npm install -g yo gulp -y