## Mini projeto em linguagem Python.
## Encontra valor aproximaado de Pi utilizando a série de Gregory-Leibniz.
## Quanto maior o número de termos, mais próxima se torna a aproximação, porém mais poder computacional é necessário.

def calculate_pi(number):

    denominador = 1.0
    operacao = 1.0
    pi = 0.0

    for _ in range(number):
        pi += operacao * (4.0 / denominador)
        denominador += 2.0
        operacao *= -1.0
    return pi


if __name__ == "__main__":
    n_termos = [10, 1000, 100000, 10000000, 100000000]
    for n in n_termos:
        print(f"PI ({n}): {calculate_pi(n)}")