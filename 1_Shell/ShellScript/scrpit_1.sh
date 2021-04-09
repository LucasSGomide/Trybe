# !/bin/bash

# comentário só usar #

echo 'chama no pump' # printa a string
echo 'chama na fibra'

echo 'Criando um Diretório'
# mkdir pasta_teste (cria um diretório)
echo 'Loading' ; sleep 1; echo .; sleep 1; echo .; sleep 1; echo .
echo 'Diretório criado com sucesso !'

echo 'Criando um arquivo'
echo 'teste se funciona' > test_sh.txt
mkdir test_sh
cp test_sh.txt test_sh_1.txt
mv test_sh_1.txt ~/Trybe/Modulo_1/1_5_Shell_Script/test_sh
