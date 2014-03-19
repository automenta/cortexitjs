#!/bin/sh
rm -Rf build
rm cortexit_chrome.crx
rm cortexit_chrome.pem

mkdir build
cp * build
cp -R web build/
rm -Rf build/web/speak
rm build/web/icons/cortexit_logo.xcf

chromium-browser --pack-extension=build/
mv build.crx cortexit_chrome.crx
mv build.pem cortexit_chrome.pem

