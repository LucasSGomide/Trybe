#!/bin/bash

echo "Digite um diretório: "
FILE="/home/lucas/Trybe/Modulo_1/1_5_Shell_Script/"
if [ -f $FILE ] 
    then
        echo "É um arquivo comum"
elif [ -d $FILE ]
    then
        echo "É um diretório"
else
    echo "Este é um outro tipo de arquivo"
fi
ls -l $FILE