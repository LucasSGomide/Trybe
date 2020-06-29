#!/bin/bash

V1="Shell Script com variáveis é demais !"

echo $V1

V2=$(hostname)
echo "Este script está rodando no computador: $V2"

FILE="/home/lucas/Trybe/Modulo_1/1_5_Shell_Script/exercicio_dupla.sh"
if [ -e "$FILE" ]
    then
        echo "O caminho $FILE está habilitado" 
fi
if [ -w "$FILE" ]
    then
        echo "VocÊ tem permissão para editar $FILE"
    else
        echo "Você não foi autorizado a editar o $FILE"
fi

echo "Digite um diretório: "
read FILE
