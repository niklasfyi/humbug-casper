# UPDATE

git clone git@github.com:thatshumbug/humbug-casper.git
cd humbug-casper
git remote add upstream https://github.com/TryGhost/Casper.git
git fetch upstream
git merge upstream/master
# Resolve conflicts (accept incoming changes)
yarn install
yarn zip
git add -A
git commit -m "Merge upstream, update to 2.4.0"
git push
