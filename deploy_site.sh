

dist_dir=_site
bucket=antd-pro-site
export qnak=aroRRNOX0hnzrAxDv4G1I76a1Ygr18zGsg0D7kJn
export qnsk=vnFMDUjInrTPwtQPW7CfQ0WQNIrgz0l9uMFYDGtu

# rm -rf deploy
mkdir -p deploy
cd deploy

binfileDir='.bin'
buildPlatform=`uname | tr '[A-Z]' '[a-z]'`
qshellfile_ext=

case $buildPlatform in  
    *msys_nt*) export qshellfile=qshell-windows-x64.exe ; export qshellfile_ext=.exe ;;
    *darwin*) export qshellfile=qshell-darwin-x64;;
    *linux*) export qshellfile=qshell-linux-x64;;
    *) echo -e "error OS ${buildPlatform}";exit;;  
esac 



if [ ! -d "${binfileDir}" ]; then

	  mkdir -p ${binfileDir}
	  curl -o ${binfileDir}/qshell${qshellfile_ext} https://dn-devtools.qbox.me/2.1.5/${qshellfile}
      chmod +x ${binfileDir}qshell${qshellfile_ext}
      echo "File: ${qshellfile}"


fi



export PATH=${PATH}:`pwd`/.bin




rm -rf ./www
cp -R ../${dist_dir}/ ./www/

echo '{
  "src_dir": "./www",
  "bucket": "'${bucket}'",
  "overwrite": true,
  "rescan_local": true
}' > qiniuuploadconfig.json

rm -rf ~/.qshell
qshell account ${qnak} ${qnsk}
qshell qupload 5 qiniuuploadconfig.json
export deployUrl=`qshell domains ${bucket} | head -n1`
# export deployUrl=oyf8dh209.bkt.clouddn.com
rm -rf ./httpUrlList.txt
cd www && /bin/find . -maxdepth 1 -type f | sed "s/^\(\.\)\(.*$\)/http:\/\/${deployUrl}\2/" >> ../httpUrlList.txt
cd ..

cd www && /bin/find . -maxdepth 1 -type d | grep -v \"^.\$\"  | sed "s/^\(\.\)\(.*$\)/http:\/\/${deployUrl}\2\//" >> ../httpUrlList.txt
cd ..

cat ./httpUrlList.txt

qshell cdnrefresh httpUrlList.txt
echo http://${deployUrl}/

rm -rf ./www
rm -rf qiniuuploadconfig.json httpUrlList.txt
cd ..
