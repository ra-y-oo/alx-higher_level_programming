def safe_print_division(a, b):
    try:
        result = a / b
    except ZeroDivisionError:
        print("Can't divide by zero")
        return None
    except:
        print("An error occurred")
        return None
    finally:
        print("Inside result: {}".format(result))
    return result
