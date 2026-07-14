@echo off
title Deploy Kuis IPA Kelas 8 ke GitHub
cls
echo =======================================================
echo         DEPLOMENT OTOMATIS KUIS IPA KELAS 8
echo =======================================================
echo.
echo Skrip ini akan membantu Anda membuat repositori di GitHub
echo dan mengunggah kode Kuis IPA secara otomatis.
echo.

:: Tetapkan Username GitHub yang ditemukan dari aplikasi sebelumnya
set USERNAME=vikoade
echo Username GitHub terdeteksi: %USERNAME%
echo.

:: Ambil Input Token
set /p TOKEN="Masukkan Personal Access Token (PAT) GitHub Anda: "
echo.

if "%TOKEN%"=="" goto error_input

echo [1/4] Membuat repositori 'kuis-ipa-kelas-8' di GitHub via API...
curl -H "Authorization: token %TOKEN%" -H "Content-Type: application/json" -d "{\"name\":\"kuis-ipa-kelas-8\",\"private\":false,\"has_issues\":true,\"has_projects\":true,\"has_wiki\":true}" https://api.github.com/user/repos > temp_api_res.json

:: Cek apakah curl sukses
findstr /i "id" temp_api_res.json >nul
if errorlevel 1 (
    echo.
    echo Gagal membuat repositori. Silakan periksa Token Anda.
    echo Pastikan Token memiliki izin 'repo' (atau write access).
    del temp_api_res.json
    pause
    exit /b
)
del temp_api_res.json
echo Repositori berhasil dibuat di GitHub!
echo.

echo [2/4] Mengatur remote Git lokal...
git remote remove origin 2>nul
git remote add origin https://%USERNAME%:%TOKEN%@github.com/%USERNAME%/kuis-ipa-kelas-8.git
echo Remote Git telah dikonfigurasi.
echo.

echo [3/4] Menambahkan file, melakukan commit, dan mengunggah berkas...
git add -A
git commit -m "Initial commit: Aplikasi Kuis IPA Kelas 8"
git branch -M main 2>nul
git push -u origin main
if errorlevel 1 (
    echo.
    echo Gagal mengunggah kode ke GitHub.
    pause
    exit /b
)
echo.
echo [4/4] BERHASIL! Kode Kuis IPA Kelas 8 telah diunggah.
echo.
echo Tautan Repositori Anda: https://github.com/%USERNAME%/kuis-ipa-kelas-8
echo.
echo =======================================================
echo            LANGKAH PENTING BERIKUTNYA:
echo =======================================================
echo 1. Buka tautan repositori di atas pada browser.
echo 2. Masuk ke menu 'Settings' -> 'Pages'.
echo 3. Di bagian 'Branch', pilih 'main' dan '/ (root)', lalu klik 'Save'.
echo 4. Website Kuis Anda akan aktif dalam 1-2 menit pada:
echo    https://%USERNAME%.github.io/kuis-ipa-kelas-8/
echo =======================================================
echo.
pause
exit /b

:error_input
echo.
echo Error: Personal Access Token (PAT) tidak boleh kosong.
pause
exit /b
