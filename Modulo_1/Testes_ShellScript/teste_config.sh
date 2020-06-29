#!/bin/bash

echo "Olá, vamos configurar o seu git automáticamente."
echo "Por favor, insira seu nome de usuário: "
read NOME
git config -global user.name "$NOME"
echo "Agora nos informe um e-mail para seu usuário: "
read EMAIL
git config -global user.email $EMAIL
echo "Qual o seu editor padrão , digite code p/ VScode"
read EDITOR
git config -global core.editor $EDITOR

