# Conceitos:

- A **Ordem de Complexidade** diz o quanto o tempo de execução (ou espaço de memória ocupado) de um algoritmo cresce, na medida em que aumentamos o tamanho da sua entrada!

- Uma O(1) executa no mesmo tempo independente do tamanho da entrada.

- Uma O(n) significa que o algoritmo é linear : se aumentamos a entrada em 2 vezes , aumentamos o tempo de execução em 2 vezes.

- Uma O(n²) significa que o algoritmo é quadrático : se aumentamos a entrada em 2 vezes , aumentamos o tempo de execução em 4 (2²) vezes.

- Uma O(n³) significa que o algoritmo é cúbico : se aumentamos a entrada em 2 vezes , aumentamos o tempo de execução em 8 (2³) vezes .

### Exercício 1: Qual a Ordem de Complexidade (complexidade de tempo) do algoritmo abaixo? E a complexidade de espaço?

- Exercício fixação 1:

```Python
def multiply_array(numbers):
    result = 0
    for number in numbers:
            result *= number

    return result
```
- Complexidade de tempo: O(n) -> Escala linearmente a medida que a entrada de dados aumenta
- Complecidade de memória 0(1) -> Complexidade constante, independentemente do tamanho da entrada, ocupará o mesmo espaço em memória.

- Exercício fixação 2:

```Python
# Os arrays tem sempre o mesmo tamanho
def multiply_arrays(array1, array2):
    result = []
    for number1 in array1:
        for number2 in array2:
            result.append(number1 + number2)

    return result
```

- O(n²) -> Iteração entre 2 arrays aninhados por exemplo (Tempo de execução aumenta cerca de 4 vezes pois para cada item de 1 array ele percorrerá o outro integralmente)

### Complexidade logaritimica
- Dado pela notação O(log n) , um algoritmo logarítmico geralmente reduz pela metade o tamanho do input a cada iteração.

#### Exemplo busca binária:

```Python
# A estrutura deve estar ordenada para que a busca binária funcione
def binary_search_iterative(array, element):
    mid = 0
    start = 0
    end = len(array)
    step = 0

    while (start <= end):
        print("Subarray in step {}: {}".format(step, str(array[start: end + 1])))
        step = step + 1
        mid = (start + end) // 2

        if element == array[mid]:
            return mid

        if element < array[mid]:
            end = mid - 1
        else:
            start = mid + 1

    return - 1


print(binary_search_iterative(data, 2))
```

### Complexidade exponencial e fatorial

- Essas complexidades caracterizam algoritmos que, para aumentos pequenos no tamanho da entrada, aumentam enormemente o seu tempo de execução

### Análise de algoritimos com várias estruturas de repetição

#### Exemplo:
```Python
def calculations(n):
    number1 = 0
    for n1 in range(n): # o(n)
        number1 += n1

    number2 = 0
    for n1 in range(n): # o(n²)
       for n2 in range(n):
            number2 += n1 + n2

    number3 = 0
    for n1 in range(n): # # o(n³)
       for n2 in range(n):
           for n3 in range(n):
               number3 += n1 + n2 + n3

    return number1, number2, number3

n1, n2, n3 = calculations(100)
print(f'{n1}, {n2}, {n3}')
```

- Para calcular a ordem de complexidade deste exemplo utilizamos a soma.
    - Itens aninhados multiplica-se
    - Itens em paralelo soma-se

### O(n + n² + n³)

### Melhor Caso , Pior Caso e Caso Médio

#### Exemplo:
```Python
def linear_search(numbers, n):
    for index, number in enumerate(numbers):
        if(number == n): return index

    return -1

print(linear_search([1, 2, 3, 4, 5], 4))
```

- **Melhor Caso:** O(1) => Caso encontre o item do array de primeira
- **Caso Médio:** O(n * 1/2) => Caso o item esteja próximo da metade do array
- **Pior Caso:** O(n) => Caso o item do array seja o último item

- Exercício fixação N:

```Python

```

