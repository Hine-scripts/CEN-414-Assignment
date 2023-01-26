primes = []

# Function to check if a number is prime


def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False
    return True


# Iterate through the numbers from 1 to 100,000
for i in range(1, 100001):
    if is_prime(i):
        primes.append(i)

# Print the list of prime numbers
print(primes)
