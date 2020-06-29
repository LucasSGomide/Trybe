#!/bin/bash

echo "Olá, vamos instalar o git no Ubuntu =)"
echo "Deseja prosseguir com a instalação  - y / n - "
read CONFIRM
if [ $CONFIRM == "y" ]
    then
        echo "sudo apt-get install git-all&"
        echo "Instalando"; sleep 1; echo .; sleep 1; echo .; sleep 1; echo .
        echo "Parabp"
    else
        echo "Que pena, quem sabe na próxima >)"
fi
