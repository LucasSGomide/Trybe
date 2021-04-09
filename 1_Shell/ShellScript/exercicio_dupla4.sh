#!/bin/bash

FILE="/home/lucas/Trybe/Modulo_1/1_5_Shell_Script/exercicio_dupla4.sh"

if [ -e $FILE ]
    then
        echo "O caminho $FILE está habilitado"
fi
if [ -w $FILE ]
    then
        echo "Você tem permissão para editar !"
    else
        echo "Você não pode editar o arquivo !"
fi
