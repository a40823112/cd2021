var tipuesearch = {"pages": [{'title': 'Introduction', 'text': 'Github :  40823112 \n Repository :  cd2021  \n Website :  cd2021 website \n Group r epository :  stage1-ag10 \xa0,\xa0 stage2-ag1 \n Group website :\xa0 stage1-ag10 \xa0,\xa0 stage2-ag1 \n Stage1-Job description: coppeliasim模擬、reveal.js與PDF報告製作、倉儲網頁編輯 \n Stage2-Job description:\xa0coppeliasim模擬、reveal.js製作、倉儲網頁編輯', 'tags': '', 'url': 'Introduction.html'}, {'title': 'Course Content', 'text': '', 'tags': '', 'url': 'Course Content.html'}, {'title': 'W1', 'text': '', 'tags': '', 'url': 'W1.html'}, {'title': '利用SSH維護倉儲', 'text': '新增鑰匙: \n Step1:  使用編輯器進入shell命令環境 \n \n Step2: 輸入指令，在 y/tmp/key/id_rsa 目錄下新增id_rsa與id_rsa等 private key 與 public key \n ssh-keygen -t rsa -b 4096 -C "學號"\n \n \n Step3: 開啟Y/Putty目錄下的 puttygen.exe 將id_rsa轉為Putty可解讀的.ppk格式 \n \n Step4: 將 public key 利用scite開啟，在工具列中 Options-Wrap 就可見完整的檔案內容 \n Step5: 將內容複製後，開啟 github settings 中的 SSH and GPD keys \n \n 選擇  New SSH keys \n \n 將複製內容放入KEY的空格 \n \n 設定Putty: \n Step1: 修改 start.bat 設定，新增 \n set GIT_HOME=%Disk%:\\portablegit\\bin\\\nset GIT_SSH=%Disk%:\\putty\\plink.exe \n Step2: 設定 y/home/.shh 中的 config \n \n Step3: 將倉儲中.git目錄下的config連線設定，由https更改為ssh連線 \n \n Step4: 開啟  Putty.exe \n \n Step5:Load github.com \n \n Step6: 進入 Connection/SSH/Auth 選擇之前創的Key \n \n Step7: 回到 Session按save \n \n Step8: 按下 open 後就可進行push \n \n', 'tags': '', 'url': '利用SSH維護倉儲.html'}, {'title': '建立倉儲', 'text': 'Step1: 在mdecourse的cmstemplate倉儲下按 Use this template \n \n Step2: 在 Repository name 中輸入cd2021 \n \n Step3: 在Y槽的tmp目錄下clone倉儲，在編輯器中輸入 \n git clone --recurse-submodules https://github.com/學號/cd2021.git \n Step4: 利用編輯器在cd2021目錄下輸入 \n python wsgi.py \n \n 倉儲建立完成 \n', 'tags': '', 'url': '建立倉儲.html'}, {'title': '建立Leo編輯Palican', 'text': 'Step1: 在tmp的目錄下輸入 \n leo \n \n Step2: 若開啟leo時出現此畫面，則需到 Y/home/.leo 中新增 .leoID的txt文字檔， 內容隨意 \n \n \n Step3: 重新啟動編輯器後就可開啟 \n \n Step4: 按 File 中的 Open-Outline ，選取 Y/tmp/cd2021/config/pelican.leo \n \n \n Step5: 在 Pelican設定 下的 @edit pelicanconf.py 更改 AUTHOR、SITENAME \n \n Step6: 更改 @edit publishconf.py 中的 SITEURL \n \n Step7: 在 markdown 下更改Blog內容 \n \n Step8: 更改完後，在編輯器上輸入就可push \n pelican markdown -o blog -s local_publishconf.py\npelican markdown -o blog -s publishconf.py \n', 'tags': '', 'url': '建立Leo編輯Palican.html'}, {'title': 'W2', 'text': '', 'tags': '', 'url': 'W2.html'}, {'title': 'Project production', 'text': "與隊友討論後決定製作  Da Vinci's Paddle Boat\xa0 \n 進度規劃: \n W2: 討論與繪製零件圖 \n W3: 進行coppeliasim模擬、網頁與報告製作 \n W4: 網頁報告與製作 \n \n", 'tags': '', 'url': 'Project production.html'}, {'title': '手繪草稿', 'text': '1.與組員討論的初期手稿: \n \n 2.發現左右兩齒輪旋轉方向不同而更改草圖 \n \n 3.模擬後發現惰輪會使左右齒輪轉速不同而修改 \n \n', 'tags': '', 'url': '手繪草稿.html'}, {'title': '初步設計與討論', 'text': '討論船的傳動方式，如何使左右船槳能同方向旋轉。 \n 討論結果: \n 在一邊的齒輪上多加一個惰輪更改方向。 \n \n 初步設計成品: \n 將初步繪出的立體圖放入Coppeliasim進行模擬，找出需要更改設計的地方。 \n \n', 'tags': '', 'url': '初步設計與討論.html'}, {'title': 'W3', 'text': '', 'tags': '', 'url': 'W3.html'}, {'title': '錯誤排解 齒輪方向與速度', 'text': '齒輪大小與傳動方式更改 \n 模擬後發現因為惰輪大小不同導致做又大齒輪轉速不同，經討論後齒輪改動如下: \n 手繪草稿:(討論如何使左右齒輪速度、方向相同) \n \n (零件更改後) \n', 'tags': '', 'url': '錯誤排解 齒輪方向與速度.html'}, {'title': '錯誤排解 傳動改正', 'text': '傳動改良 \n 齒輪傳動後發現會產生 簡諧 運動，所以更改齒數及形狀 \n \xa0(🔽更改前) \n \n \n (🔽更改後) \n \n 使大齒輪能穩定帶動船槳，而提高位置 \n \n', 'tags': '', 'url': '錯誤排解 傳動改正.html'}, {'title': '產品簡化', 'text': '零件簡化 \n 追求最佳化設計，而將沒必要的物件刪除 \n \n \n', 'tags': '', 'url': '產品簡化.html'}, {'title': '完成品', 'text': '\n', 'tags': '', 'url': '完成品.html'}, {'title': 'W4', 'text': '', 'tags': '', 'url': 'W4.html'}, {'title': '2D工程圖', 'text': '\n \n \n', 'tags': '', 'url': '2D工程圖.html'}, {'title': '3D爆炸圖', 'text': '\n', 'tags': '', 'url': '3D爆炸圖.html'}, {'title': '產品設計報告與影片', 'text': '\n \n', 'tags': '', 'url': '產品設計報告與影片.html'}, {'title': 'W5', 'text': '', 'tags': '', 'url': 'W5.html'}, {'title': 'Stage2\xa0Grouping', 'text': '進行分組與討論Stage2的產品設計。 \n 組員: \n 40823108\xa0 Repository:\xa0 40823108 \xa0W ebsite :\xa0 40823108 \n 40823109 \xa0 Repository:\xa0 40823109 \xa0 W ebsite :\xa0 40823109 \n 40823112 \xa0 Repository:\xa0 40823112 \xa0 W ebsite :\xa0 40823112 \n 40823145 \xa0 Repository:\xa0 40823145 \xa0 W ebsite :\xa0 40823145 \n', 'tags': '', 'url': 'Stage2\xa0Grouping.html'}, {'title': '進度規劃', 'text': 'W6:\xa0 小組主題討論、 C oppeliasim方向鍵操控模擬 \n W7: \xa0C oppeliasim方向鍵操控與傳感器模擬 \n W8:\xa0 Coppeliasim傳 感器 模擬、 網頁報告與製作 \n W9:\xa0 網頁報告與製作', 'tags': '', 'url': '進度規劃.html'}, {'title': 'W6', 'text': '', 'tags': '', 'url': 'W6.html'}, {'title': '討論', 'text': '分組討論完，決定Stage2的 產品設計內容，為Stage1-ag1的產品進行改良，並新增其它功能: \n 1.利用鍵盤方向鍵操控 \n 2.增加接近傳感器使產品自動行走時，不會撞到障礙物 \n \n \n', 'tags': '', 'url': '討論.html'}, {'title': 'W7', 'text': '', 'tags': '', 'url': 'W7.html'}, {'title': 'Coppeliasim方向鍵操控模擬', 'text': "\n ( 🔽程式碼 ) \n function sysCall_init() \n    left_handle= sim.getObjectHandle('left_m')\n    right_handle= sim.getObjectHandle('right_m')\n    MaxVel=2\n    leftvelocity=0\n    rightvelocity=0\n    dVel=0.5;\n    sim.setJointTargetVelocity(left_handle,leftvelocity)\n    sim.setJointTargetVelocity(right_handle,rightvelocity)\nend\n \nfunction sysCall_actuation() \n    message,auxiliaryData=sim.getSimulatorMessage()\n    while message~=-1 do\n        if (message==sim.message_keypress) then\n            if (auxiliaryData[1]==32) then\n                -- right key\n                leftvelocity=0\n                rightvelocity=0\n                sim.setJointForce(left_front_handle, 0)\n                sim.setJointForce(right_front_handle, 0)\n                break\n            else\n                sim.setJointForce(left_handle, 10000)\n                sim.setJointForce(right_handle, 10000)\n            end\n            if (auxiliaryData[1]==2007) then\n                -- up key\n                leftvelocity=(leftvelocity+rightvelocity)/2\n                rightvelocity=leftvelocity\n                leftvelocity=leftvelocity+dVel\n                rightvelocity=rightvelocity+dVel\n            end\n            if (auxiliaryData[1]==2008) then\n                -- down key\n                leftvelocity=(leftvelocity+rightvelocity)/2\n                rightvelocity=leftvelocity\n                leftvelocity=leftvelocity-dVel\n                rightvelocity=rightvelocity-dVel\n            end\n            if (auxiliaryData[1]==2009) then\n                -- left key\n                leftvelocity=leftvelocity-dVel\n                rightvelocity=rightvelocity+dVel\n            end\n            if (auxiliaryData[1]==2010) then\n                -- right key\n                leftvelocity=leftvelocity+dVel\n                rightvelocity=rightvelocity-dVel\n            end\n        end\n        message,auxiliaryData=sim.getSimulatorMessage()\n    end\n     \n    if leftvelocity>MaxVel then\n        leftvelocity=MaxVel\n    end\n    if leftvelocity<-MaxVel then\n        leftvelocity=-MaxVel\n    end\n     \n    if rightvelocity>MaxVel then\n                rightvelocity=MaxVel\n    end\n    if rightvelocity<-MaxVel then\n                rightvelocity=-MaxVel\n    end\n     \n    sim.setJointTargetVelocity(left_handle,leftvelocity)\n    sim.setJointTargetVelocity(right_handle,rightvelocity)\n     \nend", 'tags': '', 'url': 'Coppeliasim方向鍵操控模擬.html'}, {'title': '模擬問題與排解', 'text': '問題: \xa0 當本體開啟運動模擬時會產生錯誤，導致產品解體 \n \n 問題原因: \xa0 討論後發現，產品的模擬干涉太多使其無法正常運作，原因是產品的輪子跟球體上並不是完整的圓，而是由許多正方形的小格子所構成，所以在模擬時產生過多的干涉影響電腦正常模擬，因而模擬錯誤。 \n \n 問題排解: \xa0在coppeliasim內 add->primitive shape->Cylinder 增添簡化圖形來代替原本的車輪，而原本的輪子就做為Disc的造型。 \n \n \n \n \n', 'tags': '', 'url': '模擬問題與排解.html'}, {'title': 'W10', 'text': '', 'tags': '', 'url': 'W10.html'}, {'title': 'Task 1', 'text': '讀取  stage3_2a.txt \xa0, 建立 Stage3 的分組倉儲, 分組網頁, 以及各組員倉儲及網頁連結。 \n (此程式由Stage3-ag1組長 40823131 所製作) \n # open file, default is read mode, since txt content no chinese char4\n# no encoding = "UTF-08" is needed\nwith open("123.txt") as fh:\n    #匯入txt內容\n    data = fh.readlines()\n    data = [a.replace(\'4823122\',\'40823122\') for a in data]\n    #由於22號座號打錯少打0，給後傳回data\n    data = [b.replace(\'\\t\\t\\t\\t\',\'\') for b in data]\n    #第三組的組員只有6人，多讀取了四個空格，因此多了四個\\t，將其刪除後匯入data\n    print(data)\nfor i in range(len(data)):\n    #(len(data))=6，共有六組\n    group = data[i].rstrip("\\n").split("\\t")\n    #刪除data中的\\n，並將\\t作為分隔的依據\n    print(\'<p>\'+group[0]+\'|<a href="https://\'+group[1]+\'.github.io/stage3-ag\'+group[0][9]+\'">網站</a>|<a href="https://github.com/\'+group[2]+\'/stage3-ag\'+group[0][9]+\'">倉儲</a></p>\')\n#用for迴圈增添每個小組的超連結網址\n#print : 將字串顯示在螢幕上\n#group[0] :文字檔中每一條第一個值、[1]:文字檔中每一條第二個值\n#group[0][9]:文字檔中每一條第一個值的第九位\n \n    for z in range(2,18,2):\n    #range(2,18,2):選取文字檔中的第2格到第18格，每跳兩格選一次\n        try:\n            print(\'<p>\'+group[z]+\'|Website:\'+\'<a href="https://\'+group[z]+\'.github.io/cd2021\'+\'">\'+group[z]+\'</a>\'+\'|Repository:\'+\'<a href="https://github.com/\'+group[z]+\'/cd2021\'+\'">\'+group[z]+\'</a></p>\')\n            #用for迴圈增添每個組員的超連結網址\n            #group[z] : 選取z跳的值\n        except:\n            continue\n            #由於有一組是6人，在執行程式時會超出範圍影響輸出，所以需用try execot解決 \n \n', 'tags': '', 'url': 'Task 1.html'}, {'title': 'Task 2', 'text': '', 'tags': '', 'url': 'Task 2.html'}, {'title': 'Product Drawing', 'text': '', 'tags': '', 'url': 'Product Drawing.html'}, {'title': 'stage1-ag10', 'text': 'Inventor: 達爾文船零件圖檔 \n \n Coppeliasim: 達爾文船模擬圖檔 \n \n', 'tags': '', 'url': 'stage1-ag10.html'}, {'title': 'stage2-ag1', 'text': '', 'tags': '', 'url': 'stage2-ag1.html'}]};