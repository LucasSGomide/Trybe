#!/bin/bash

echo "Qual sua idade"

read IDADE

if [$IDADE -ge "16"]
then
echo "Você pode votar !"
else
echo "Se deu bem !"
fi