$ProgressPreference="SilentlyContinue"

$containerName = "content"
$destinationUri = "https://$($Env:mycontainer_uri)/$containerName"
$destinationKey = $Env:STORAGE_KEY
D:\devtools\AzCopy\AzCopy.exe /Source:.\Client /Dest:$destinationUri /DestKey:$destinationKey /SetContentType /S /Y
if ($LastExitCode -ne 0) { throw "azcopy returned code $($LastExitCode)" }

$storageContext = New-AzureStorageContext -ConnectionString $Env:AzureWebJobsStorage -ErrorAction Stop
Set-AzureStorageContainerAcl -Container $containerName -Permission Blob -Context $storageContext -ErrorAction Stop
