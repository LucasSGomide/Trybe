def reversed_list(list_to_reverse): # Solução Ingênua (Iterativa)
    result = []
    counter = 0
    for numbers in list_to_reverse:
        counter = counter + 1
        reversed_index = (len(list_to_reverse) - counter)
        print(reversed_index)
        result.append(list_to_reverse[reversed_index])
    return result

test = [1, 2, 3, 4, 5, 6, 7]

# print(reversed_list(test))

def reverse(list): # Solução recursiva
    if len(list) < 2:
        return list
    else:
        return reverse(list[1:]) + [list[0]]

print(reverse(test))