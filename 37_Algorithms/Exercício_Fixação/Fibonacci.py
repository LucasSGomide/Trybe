
def fibonacci(expected_number): # Solução ingênua (Iterativa)
    fibonacci_list = []
    for index in range(0, expected_number + 1):
        if len(fibonacci_list) > 1:
            current_number = fibonacci_list[index - 1]
            previous_number = fibonacci_list[index - 2]
            next_number = current_number + previous_number
            fibonacci_list.append(next_number)
        elif len(fibonacci_list) == 0:
            fibonacci_list.append(0)
        elif len(fibonacci_list) == 1:
            fibonacci_list.append(1)
        
    return fibonacci_list[expected_number]


# print(fibonacci(10))


def fibonacci(n): # Solução recursiva
    if n < 2:
        return n
    else:
        return fibonacci(n-1) + fibonacci(n-2)

