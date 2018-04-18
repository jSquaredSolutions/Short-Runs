$AdminName = "jtm27"
$Pass = Get-Content C:\Users\jtm27\cred.txt | ConvertTo-SecureString
$Cred = new-object -typename System.Management.Automation.PSCredential -argumentlist $AdminName, $Pass
Connect-PnPOnline –Url https://dcricollab.dcri.duke.edu/sites/NIHKR –Credentials $Cred
$folder = "C:\Users\jtm27\Desktop\Short-Runs\DcriCollab_DisplayTemplate"
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
        If ($name -eq "Control_SearchResults_Custom.html" -Or $name -eq "Item_Default_Custom.html" -Or $name -eq "Item_Default_HoverPanel_Custom.html") {
            Write-Host "The file $name was $changeType at $timeStamp at path: $path"
            Add-PnPFile -Path $path -Folder "_catalogs/masterpage/Display Templates/Search"
        } elseIf ($name -eq "CustomSearch.js") {
            Write-Host "The file $name was $changeType at $timeStamp at path: $path"
            Add-PnPFile -Path $path -Folder "SiteAssets"
        };  
    ')

    Register-ObjectEvent $Watcher "Changed" -Action $changeAction
}

 Register-Watcher "C:\Users\jtm27\Desktop\Short-Runs\DcriCollab_DisplayTemplate"