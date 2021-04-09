#!/bin/bash

FILE=$1
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