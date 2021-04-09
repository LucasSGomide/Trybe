#!/bin/bash

DIR=$1
if [ -d $DIR ] 
    then
        CONT=$(ls -l $DIR | wc -l)
        echo "O diretório $DIR têm $CONT arquivos"
else "Não é um diretório"
fi
