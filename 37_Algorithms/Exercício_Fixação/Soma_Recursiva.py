def soma_recursiva(n):
    if n == 1:
        return 1
    
    else:
        return n + soma_recursiva(n - 1)


assert soma_recursiva(4) == 10
