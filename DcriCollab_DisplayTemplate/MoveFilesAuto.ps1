<# Read-Host -Prompt "Enter your tenant password" -AsSecureString | ConvertFrom-SecureString | Out-File "C:\Users\jtm27\cred.txt" #>
$AdminName = "jtm27"
$Pass = Get-Content C:\Users\jtm27\cred.txt | ConvertTo-SecureString
$Cred = new-object -typename System.Management.Automation.PSCredential -argumentlist $AdminName, $Pass
Connect-PnPOnline –Url https://dcricollab.dcri.duke.edu/sites/NIHKR –Credentials $Cred
Add-PnPFile -Path c:/temp/newJava.js -Folder "_catalogs/masterpage/Display Templates/Search"




