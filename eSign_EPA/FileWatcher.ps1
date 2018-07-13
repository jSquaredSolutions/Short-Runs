$AdminName = "mcfarland.jeffrey@epa.gov"
$Pass = Get-Content C:\Users\jmcfar03\creds.txt | ConvertTo-SecureString
$Cred = new-object -typename System.Management.Automation.PSCredential -argumentlist $AdminName, $Pass
Connect-PnPOnline -Url https://usepa.sharepoint.com/sites/OEI_Development/esign -Credentials $Cred
$folder = "C:\Users\jmcfar03\Desktop\Short-Runs\eSign_EPA"
Function Register-Watcher {
    param ($folder)
    $filter = "*.*"
    $watcher = New-Object IO.FileSystemWatcher $folder, $filter -Property @{ 
        IncludeSubdirectories = $false
        EnableRaisingEvents = $true
    }

    $changeAction = [scriptblock]::Create('
        # This is the code which will be executed every time a file change is detected
        $path = $Event.SourceEventArgs.FullPath
        $name = $Event.SourceEventArgs.Name
        $changeType = $Event.SourceEventArgs.ChangeType
        $timeStamp = $Event.TimeGenerated
        If ($name -eq "customEsign.js") {
            Write-Host "The file $name was $changeType at $timeStamp at path: $path"
            Add-PnPFile -Path $path -Folder "SiteAssets"
        }
    ')

    Register-ObjectEvent $Watcher "Changed" -Action $changeAction
}

 Register-Watcher "C:\Users\jmcfar03\Desktop\Short-Runs\eSign_EPA"