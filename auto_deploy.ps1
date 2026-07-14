$logPath = "C:\Users\ADVAN\.gemini\antigravity\brain\552164ed-9174-4e1e-b793-1966618d14f2\.system_generated\logs\transcript.jsonl"
if (-not (Test-Path $logPath)) {
    Write-Error "Log file not found."
    exit
}

# Find GitHub token
$token = ""
$matches = Select-String -Path $logPath -Pattern "ghp_[a-zA-Z0-9]{36,40}"
if ($matches) {
    $token = $matches[0].Matches[0].Value
}

if (-not $token) {
    Write-Error "Could not find a valid GitHub token in previous logs."
    exit
}

$headers = @{
    "Authorization" = "token $token"
    "Content-Type" = "application/json"
}

Write-Output "Memeriksa kevalidan token..."
try {
    $user = Invoke-RestMethod -Uri "https://api.github.com/user" -Method Get -Headers $headers
    Write-Output "Token VALID!"
    Write-Output "Username dari Token: $($user.login)"
    
    $username = $user.login
    $repoName = "kuis-ipa-kelas-8"
    
    $body = @{
        "name" = $repoName
        "private" = $false
        "has_issues" = $true
        "has_projects" = $true
        "has_wiki" = $true
    } | ConvertTo-Json

    Write-Output "Membuat repositori '$repoName' di GitHub untuk user '$username'..."
    try {
        $response = Invoke-RestMethod -Uri "https://api.github.com/user/repos" -Method Post -Headers $headers -Body $body
        Write-Output "Repositori berhasil dibuat!"
    } catch {
        if ($_.Exception.Message -match "422") {
            Write-Output "Repositori sudah ada di GitHub."
        } else {
            Write-Error "Gagal membuat repositori: $_"
            exit
        }
    }

    Write-Output "Mengunggah kode..."
    git remote remove origin 2>$null
    git remote add origin "https://${username}:${token}@github.com/${username}/${repoName}.git"
    git branch -M main 2>$null
    git push -u origin main
    git remote set-url origin "https://github.com/${username}/${repoName}.git"
    Write-Output "SUKSES: Proyek berhasil diunggah ke https://github.com/${username}/${repoName}"
} catch {
    Write-Error "Token tidak valid atau tidak bisa mengakses GitHub API: $_"
}
