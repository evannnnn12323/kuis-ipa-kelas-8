Get-ChildItem -Path "C:\Users\ADVAN\.gemini\antigravity\brain" -Recurse -File -Filter "transcript.jsonl" | 
    Sort-Object LastWriteTime -Descending | 
    ForEach-Object {
        $file = $_
        $matches = Select-String -Path $file.FullName -Pattern "ghp_[a-zA-Z0-9]{36,40}"
        if ($matches) {
            Write-Output "$($file.LastWriteTime) : $($file.FullName) : $($matches.Count) matches"
        }
    }
