def safe_print_list_integers(my_list=[], x=0):
    count = 0
    for i in my_list:
        try:
            if type(i) == int:
                print("{:d}".format(i), end=' ')
                count += 1
        except:
            pass
        if count == x:
            break
    print()
    return count
