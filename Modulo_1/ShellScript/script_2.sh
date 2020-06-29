# !/bin/bash

echo "Olá, informe seu nome: "
read NOME
echo $NOME
echo "Informe sua idade: "
read IDADE
echo $IDADE
USUARIO= whoami
echo "$USUARIO: É o seu usuário"
DIRETORIO= pwd
echo "É o seu diretório atual é: '$DIRETORIO' "